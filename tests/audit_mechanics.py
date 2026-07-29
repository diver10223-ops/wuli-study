#!/usr/bin/env python3
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]


def require(source, markers, label):
    missing = [marker for marker in markers if marker not in source]
    if missing:
        raise SystemExit(f"{label}: missing {', '.join(missing)}")


def main():
    index = (ROOT / "index.html").read_text(encoding="utf-8")
    hub = (ROOT / "mechanics.html").read_text(encoding="utf-8")
    module = (ROOT / "m2.html").read_text(encoding="utf-8")
    progress = (ROOT / "mechanics-progress.html").read_text(encoding="utf-8")
    manifest_path = ROOT / "data/mechanics-course.js"
    manifest = manifest_path.read_text(encoding="utf-8")

    require(index, ['href="mechanics.html"', 'href="electric.html"', 'name="viewport"'], "index.html")
    require(hub, ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'physics-mechanics-*', 'data/mechanics-course.js', 'mechanics-progress.html', 'm2.html'], "mechanics.html")
    require(module, ['A轨', 'B轨', 'C轨', '前置诊断', '知识学习', '模型', '即时检测', '正式', '间隔复测', 'mechanics-progress.html'], "m2.html")
    require(progress, ['WuliMechanicsCourse', 'wuli-study/mechanics-progress', 'WuliProgress.run', 'assets/evidence.js'], "mechanics-progress.html")
    require(manifest, ["'diagnostic'", "'learning'", "'models'", "'check'", "'exam'", "'retest'", "physics-mechanics-", "'R6'", "entry:", "progress:"], "mechanics manifest")

    for track in "ab":
        for stage in ["diagnostic", "learning", "models", "check", "exam", "retest"]:
            page_name = f"m2-{track}.html" if stage == "learning" else f"m2-{track}-{stage}.html"
            data_name = f"m2-{track}-{stage}.js"
            page_path, data_path = ROOT / page_name, ROOT / "data" / data_name
            if not page_path.exists() or not data_path.exists():
                raise SystemExit(f"M2 {track.upper()}: missing {stage} page or data")
            page_source = page_path.read_text(encoding="utf-8")
            require(page_source, [f'data/{data_name}', 'assets/storage.js', 'name="viewport"', 'mechanics-progress.html'], page_name)
            subprocess.run(["node", "--check", str(data_path)], check=True)

    exam_source = (ROOT / "data/m2-a-exam.js").read_text(encoding="utf-8")
    require(exam_source, ["c.score>=80", "sectionsPassed", "gatesPassed", "physics-mechanics-m2-a-exam-v1"], "M2 A exam")
    b_exam_source = (ROOT / "data/m2-b-exam.js").read_text(encoding="utf-8")
    require(b_exam_source, ["c.score>=75", "sectionsPassed", "gatesPassed", "novelIndependent", "physics-mechanics-m2-b-exam-v1"], "M2 B exam")

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

    for script in [manifest_path, ROOT / "assets/progress.js"]:
        subprocess.run(["node", "--check", str(script)], check=True)
    print("OK: mechanics standard, aggregate progress, M2 A/B six-stage content and source routes")


if __name__ == "__main__":
    main()
