(function (global) {
  'use strict';

  const LEGACY_ALIASES = Object.freeze({
    'physics-e1-a-learning-v1': ['physics-e1-a-cards-v1'],
    'physics-e2e3-a-diagnostic-v1': ['electricR1'],
    'physics-e2e3-a-check-v1': ['r2Test'],
    'physics-e2e3-a-retest-v1': ['r3Exam'],
  });

  function readWithAliases(storage, key) {
    const current = storage.read(key, null);
    if (current !== null) return { key, value: current, migrated: false };
    for (const alias of LEGACY_ALIASES[key] || []) {
      const value = storage.read(alias, null);
      if (value !== null) return { key: alias, value, migrated: true };
    }
    return { key, value: null, migrated: false };
  }

  function normalize(module, track, stage, record) {
    if (!record) return null;
    const score = Number.isFinite(record.score) ? record.score : Number.isFinite(record.total) ? record.total : null;
    return {
      version: 2,
      module,
      track,
      stage,
      passed: record.passed === true || record.admitted === true,
      score,
      reviewComplete: record.reviewComplete !== false,
      submittedAt: record.submittedAt || record.updatedAt || record.updated || null,
      sourceVersion: record.version || 1,
      raw: record,
    };
  }

  function collect(storage, course) {
    const records = [];
    course.modules.forEach((module) => course.tracks.forEach((track) => course.stages.forEach((stage) => {
      const canonicalKey = course.key(module.id, track, stage);
      const found = readWithAliases(storage, canonicalKey);
      records.push({ module, track, stage, canonicalKey, sourceKey: found.key, migrated: found.migrated, evidence: normalize(module.id, track, stage, found.value) });
    })));
    return records;
  }

  global.WuliEvidence = Object.freeze({ LEGACY_ALIASES, readWithAliases, normalize, collect });
})(window);
