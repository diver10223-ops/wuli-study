(function (global) {
  'use strict';

  function read(key, fallback = null) {
    try {
      const raw = global.localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  }

  function write(key, value) {
    global.localStorage.setItem(key, JSON.stringify(value));
    return value;
  }

  function remove(key) {
    global.localStorage.removeItem(key);
  }

  function exportRecords(keys, schema, version = 1) {
    return {
      schema,
      version,
      exportedAt: new Date().toISOString(),
      records: Object.fromEntries(keys.map((key) => [key, read(key)])),
    };
  }

  global.WuliStorage = Object.freeze({ read, write, remove, exportRecords });
})(window);
