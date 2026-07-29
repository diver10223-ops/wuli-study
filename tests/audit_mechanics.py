#!/usr/bin/env python3
from pathlib import Path
import argparse
import subprocess

ROOT = Path(__file__).resolve().parents[1]


def require(source, markers, label):
    missing = [marker for marker in markers if marker not in source]
    if missing:
        raise SystemExit(f"{label}: missing {', '.join(missing)}")


MODULES = [f"M{number}" for number in range(1, 9)]


def parse_args():
    parser = argparse.ArgumentParser(description="Audit mechanics routes and course configurations")
    parser.add_argument("--module", choices=MODULES, help="audit one module instead of M1-M8")
    return parser.parse_args()


def main():
    args = parse_args()
    selected_modules = [args.module] if args.module else MODULES
    index = (ROOT / "index.html").read_text(encoding="utf-8")
    hub = (ROOT / "mechanics.html").read_text(encoding="utf-8")
    progress = (ROOT / "mechanics-progress.html").read_text(encoding="utf-8")
    manifest_path = ROOT / "data/mechanics-course.js"
    manifest = manifest_path.read_text(encoding="utf-8")

    require(index, ['href="mechanics.html"', 'href="electric.html"', 'name="viewport"'], "index.html")
    require(hub, ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'physics-mechanics-*', 'data/mechanics-course.js', 'mechanics-progress.html', 'm2.html'], "mechanics.html")
    require(progress, ['WuliMechanicsCourse', 'wuli-study/mechanics-progress', 'WuliProgress.run', 'assets/evidence.js'], "mechanics-progress.html")
    require(manifest, ["'diagnostic'", "'learning'", "'models'", "'check'", "'exam'", "'retest'", "physics-mechanics-", "'R6'", "entry:", "progress:"], "mechanics manifest")

    for module_id in selected_modules:
        module_slug = module_id.lower()
        entry = (ROOT / f"{module_slug}.html").read_text(encoding="utf-8")
        progress_source = (ROOT / f"{module_slug}-progress.html").read_text(encoding="utf-8")
        entry_markers = ["A轨", "B轨", "C轨", f"{module_slug}-progress.html"]
        if module_id == "M2":
            entry_markers += ["前置诊断", "知识学习", "模型", "即时检测", "正式", "间隔复测"]
        else:
            entry_markers += ["A轨 · 六阶段", "B轨 · 六阶段", "C轨 · 六阶段"]
        require(entry, entry_markers, f"{module_id} entry")
        progress_markers = [f"wuli-study/mechanics-{module_slug}-progress", "WuliProgress.run"]
        progress_markers.append("A/B/C互不补偿" if module_id == "M2" else "三轨互不补偿")
        require(progress_source, progress_markers, f"{module_id} progress")
        for track in "abc":
            for stage in ["diagnostic", "learning", "models", "check", "exam", "retest"]:
                page_name = f"{module_slug}-{track}.html" if stage == "learning" else f"{module_slug}-{track}-{stage}.html"
                data_name = f"{module_slug}-{track}-{stage}.js"
                page_path, data_path = ROOT / page_name, ROOT / "data" / data_name
                if not page_path.exists() or not data_path.exists():
                    failures = f"{module_id} {track.upper()}: missing {stage} asset"
                    raise SystemExit(failures)
                page_progress = "mechanics-progress.html" if module_id == "M2" else f"{module_slug}-progress.html"
                require(page_path.read_text(encoding="utf-8"), [f"data/{data_name}", "assets/storage.js", page_progress], page_name)
        if module_id == "M2":
            exams = {
                "A": ["c.score>=80", "sectionsPassed", "gatesPassed"],
                "B": ["c.score>=75", "sectionsPassed", "gatesPassed", "novelIndependent"],
                "C": ["c.score>=70", "gatesPassed", "independent"],
            }
            for track, markers in exams.items():
                exam_path = ROOT / "data" / f"m2-{track.lower()}-exam.js"
                require(exam_path.read_text(encoding="utf-8"), markers, f"M2 {track} exam")
        else:
            spec = ROOT / "docs" / f"{module_id}三轨知识矩阵与质量审计.md"
            require(spec.read_text(encoding="utf-8"), ["A轨", "B轨", "C轨", "正式卷门槛", "自动验收"], spec.name)

    for relative in [
        "运动和力/物理笔记-运动的描述.html",
        "运动和力/物理笔记：匀变速直线运动.html",
        "运动和力/物理笔记：相互作用——力.html",
        "运动和力/物理笔记：运动和力的关系.html",
        "运动和力/第6讲：平抛与斜抛.html",
        "运动和力/第7讲：圆周运动.html",
    ]:
        if not (ROOT / relative).exists():
            raise SystemExit(f"missing mechanics source: {relative}")

    catalog_command = ["node", str(ROOT / "tests/test_mechanics_catalog.js")]
    if args.module:
        catalog_command += ["--module", args.module]
    subprocess.run(catalog_command, check=True)
    subprocess.run(["node", "--check", str(manifest_path)], check=True)
    subprocess.run(["node", "--check", str(ROOT / "assets/progress.js")], check=True)
    stage_count = len(selected_modules) * 18
    scope = args.module or "M1-M8"
    print(f"OK: audited {scope}, {stage_count} tri-track stages, progress, specs and source routes")


if __name__ == "__main__":
    main()
