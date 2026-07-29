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
    print("OK: physics entry, mechanics three-track standard, aggregate progress and source routes")


if __name__ == "__main__":
    main()
