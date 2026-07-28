#!/usr/bin/env python3
"""Dependency-free structural audit for the electricity learning pages."""

from __future__ import annotations

import re
import subprocess
import tempfile
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = sorted(ROOT.glob("e1*.html")) + sorted(ROOT.glob("e2-*.html")) + sorted(ROOT.glob("e4*.html")) + sorted(ROOT.glob("e5*.html")) + [ROOT / "electric.html", ROOT / "index.html"]


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: list[str] = []
        self.links: list[str] = []
        self.has_viewport = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if values.get("id"):
            self.ids.append(values["id"] or "")
        if tag == "a" and values.get("href"):
            self.links.append(values["href"] or "")
        if tag == "meta" and values.get("name") == "viewport":
            self.has_viewport = True


def check_page(path: Path) -> list[str]:
    errors: list[str] = []
    source = path.read_text(encoding="utf-8")
    parser = PageParser()
    parser.feed(source)
    if not parser.has_viewport:
        errors.append("missing viewport meta")
    duplicates = sorted({item for item in parser.ids if parser.ids.count(item) > 1})
    if duplicates:
        errors.append(f"duplicate ids: {', '.join(duplicates)}")
    for link in parser.links:
        if link.startswith(("http://", "https://", "#", "mailto:")):
            continue
        target = (path.parent / link.split("#", 1)[0]).resolve()
        if not target.exists():
            errors.append(f"broken link: {link}")
    scripts = re.findall(r"<script(?:\s[^>]*)?>(.*?)</script>", source, re.S)
    inline = "\n".join(script for script in scripts if script.strip())
    if inline:
        with tempfile.NamedTemporaryFile("w", suffix=".js", encoding="utf-8") as handle:
            handle.write(inline)
            handle.flush()
            result = subprocess.run(
                ["node", "--check", handle.name], capture_output=True, text=True, check=False
            )
        if result.returncode:
            errors.append(f"inline JavaScript syntax: {result.stderr.strip()}")
    return errors


def main() -> None:
    failures: list[str] = []
    for page in PAGES:
        for error in check_page(page):
            failures.append(f"{page.relative_to(ROOT)}: {error}")

    shared_scripts = [
        ROOT / "assets/storage.js",
        ROOT / "assets/diagnostic.js",
        ROOT / "assets/learning.js",
        ROOT / "assets/assessment.js",
        ROOT / "assets/written-assessment.js",
        ROOT / "data/e4-a-diagnostic.js",
        ROOT / "data/e4-a-learning.js",
        ROOT / "data/e4-a-models.js",
        ROOT / "data/e4-a-check.js",
        ROOT / "data/e4-a-exam.js",
        ROOT / "data/e4-b-diagnostic.js",
        ROOT / "data/e4-b-learning.js",
        ROOT / "data/e4-b-check.js",
        ROOT / "data/e4-b-exam.js",
        ROOT / "data/e4-c-diagnostic.js",
        ROOT / "data/e4-c-learning.js",
        ROOT / "data/e4-c-check.js",
        ROOT / "data/e4-c-exam.js",
    ]
    for script in shared_scripts:
        result = subprocess.run(
            ["node", "--check", script], capture_output=True, text=True, check=False
        )
        if result.returncode:
            failures.append(f"{script.relative_to(ROOT)}: JavaScript syntax: {result.stderr.strip()}")

    for script in sorted((ROOT / "data").glob("e5-*.js")):
        result = subprocess.run(
            ["node", "--check", script], capture_output=True, text=True, check=False
        )
        if result.returncode:
            failures.append(f"{script.relative_to(ROOT)}: JavaScript syntax: {result.stderr.strip()}")

    root_entry = (ROOT / "index.html").read_text(encoding="utf-8")
    for marker in {'url=electric.html', 'href="electric.html"', 'href="e2-r1.html"'}:
        if marker not in root_entry:
            failures.append(f"index.html: missing root entry marker {marker}")

    expected_links = {
        "e2-a-exam.html",
        "e2-b-diagnostic.html",
        "e2-b.html",
        "e2-b-check.html",
        "e2-b-exam.html",
        "e2-c-diagnostic.html",
        "e2-c.html",
        "e2-c-check.html",
        "e2-c-exam.html",
    }
    track_source = (ROOT / "e2-tracks.html").read_text(encoding="utf-8")
    for link in expected_links:
        if f'href="{link}"' not in track_source:
            failures.append(f"e2-tracks.html: missing route {link}")

    e1_source = (ROOT / "e1.html").read_text(encoding="utf-8")
    for link in {"e1-a-diagnostic.html", "e1-a.html", "e1-a-models.html", "e1-a-exam.html", "e1-b-diagnostic.html", "e1-b.html", "e1-b-check.html", "e1-b-exam.html", "e1-c-diagnostic.html", "e1-c.html", "e1-c-check.html", "e1-c-exam.html", "e1-progress.html"}:
        if f'href="{link}"' not in e1_source:
            failures.append(f"e1.html: missing A-track route {link}")
    diagnostic_source = (ROOT / "e1-a-diagnostic.html").read_text(encoding="utf-8")
    for gate in {"场强方向", "符号与能量", "电容器状态"}:
        if f"gate:'{gate}'" not in diagnostic_source:
            failures.append(f"e1-a-diagnostic.html: missing critical gate {gate}")

    e1_exam_source = (ROOT / "e1-a-exam.html").read_text(encoding="utf-8")
    for rule in {"score>=80", "bucketsPassed", "!failedGates.length"}:
        if rule not in e1_exam_source:
            failures.append(f"e1-a-exam.html: missing pass rule {rule}")

    e1_b_source = (ROOT / "e1-b-diagnostic.html").read_text(encoding="utf-8")
    for rule in {"correct>=7", "!failedGates.length", "矢量叠加", "符号与能量", "电容器状态"}:
        if rule not in e1_b_source:
            failures.append(f"e1-b-diagnostic.html: missing admission rule {rule}")

    e1_b_exam_source = (ROOT / "e1-b-exam.html").read_text(encoding="utf-8")
    for rule in {"score>=75", "multiPassed", "capacitorPassed", "novelIndependent"}:
        if rule not in e1_b_exam_source:
            failures.append(f"e1-b-exam.html: missing pass rule {rule}")

    e1_c_source = (ROOT / "e1-c-diagnostic.html").read_text(encoding="utf-8")
    for rule in {"toolsPassed", "bPassed", "goalConfirmed", "函数图像", "模型假设", "实验论证"}:
        if rule not in e1_c_source:
            failures.append(f"e1-c-diagnostic.html: missing admission rule {rule}")

    e1_c_check_source = (ROOT / "e1-c-check.html").read_text(encoding="utf-8")
    for rule in {"eligible", "correct>=6", "physics-e1-c-learning-v1"}:
        if rule not in e1_c_check_source:
            failures.append(f"e1-c-check.html: missing readiness rule {rule}")

    e1_c_exam_source = (ROOT / "e1-c-exam.html").read_text(encoding="utf-8")
    for rule in {"total>=70", "reviewComplete", "modelPassed", "inquiryPassed", "independentDerivation", "inquiryComplete"}:
        if rule not in e1_c_exam_source:
            failures.append(f"e1-c-exam.html: missing pass rule {rule}")

    e1_progress_source = (ROOT / "e1-progress.html").read_text(encoding="utf-8")
    for rule in {"physics-e1-a-exam-v1", "physics-e1-b-exam-v1", "physics-e1-c-exam-v1", "wuli-study/e1-progress", "exportedAt"}:
        if rule not in e1_progress_source:
            failures.append(f"e1-progress.html: missing evidence rule {rule}")

    e4_matrix = (ROOT / "docs/E4磁场与安培力三轨知识矩阵与考卷规格.md").read_text(encoding="utf-8")
    for node in {f"E4-K{i:02d}" for i in range(1, 14)}:
        if node not in e4_matrix:
            failures.append(f"E4 matrix: missing knowledge node {node}")
    for heading in {"A轨通过规则", "B轨通过规则", "C轨通过规则", "真实考卷证据如何映射"}:
        if heading not in e4_matrix:
            failures.append(f"E4 matrix: missing section {heading}")

    e4_source = (ROOT / "e4.html").read_text(encoding="utf-8")
    for link in {"e4-a-diagnostic.html", "e4-a.html", "e4-a-models.html", "e4-a-check.html", "e4-a-exam.html", "e4-b-diagnostic.html", "e4-b.html", "e4-b-check.html", "e4-b-exam.html", "e4-c-diagnostic.html", "e4-c.html", "e4-c-check.html", "e4-c-exam.html", "e4-progress.html", "e4-legacy.html", "e4-test.html"}:
        if f'href="{link}"' not in e4_source:
            failures.append(f"e4.html: missing route {link}")
    e4_a_diagnostic = (ROOT / "e4-a-diagnostic.html").read_text(encoding="utf-8") + (ROOT / "data/e4-a-diagnostic.js").read_text(encoding="utf-8") + (ROOT / "assets/diagnostic.js").read_text(encoding="utf-8")
    for rule in {"passCorrect: 12", "gatesPassed", "电流磁场方向", "安培力研究对象", "F=BIL适用条件", "guessedGates"}:
        if rule not in e4_a_diagnostic:
            failures.append(f"e4-a-diagnostic.html: missing gate rule {rule}")

    for asset in {"assets/storage.js", "assets/diagnostic.js", "data/e4-a-diagnostic.js"}:
        if f'src="{asset}"' not in e4_a_diagnostic:
            failures.append(f"e4-a-diagnostic.html: missing shared engine {asset}")

    e4_learning = (ROOT / "e4-a.html").read_text(encoding="utf-8")
    for asset in {"assets/storage.js", "assets/learning.js", "data/e4-a-learning.js"}:
        if f'src="{asset}"' not in e4_learning:
            failures.append(f"e4-a.html: missing shared learning asset {asset}")
    e4_learning_data = (ROOT / "data/e4-a-learning.js").read_text(encoding="utf-8")
    for node in {f"E4-K{i:02d}" for i in range(1, 14)}:
        if node not in e4_learning_data:
            failures.append(f"E4 A learning: missing knowledge node {node}")

    e4_models = (ROOT / "e4-a-models.html").read_text(encoding="utf-8")
    for asset in {"assets/storage.js", "assets/learning.js", "data/e4-a-models.js"}:
        if f'src="{asset}"' not in e4_models:
            failures.append(f"e4-a-models.html: missing shared learning asset {asset}")

    for page_name, data_name in {"e4-a-check.html": "data/e4-a-check.js", "e4-a-exam.html": "data/e4-a-exam.js"}.items():
        source = (ROOT / page_name).read_text(encoding="utf-8")
        for asset in {"assets/storage.js", "assets/assessment.js", data_name}:
            if f'src="{asset}"' not in source:
                failures.append(f"{page_name}: missing assessment asset {asset}")
    e4_check_rules = (ROOT / "data/e4-a-check.js").read_text(encoding="utf-8")
    for rule in {"c.correct>=8", "sectionsPassed", "gatesPassed", "physics-e4-a-learning-v1", "physics-e4-a-models-v1"}:
        if rule not in e4_check_rules:
            failures.append(f"E4 A check: missing rule {rule}")
    e4_exam_rules = (ROOT / "data/e4-a-exam.js").read_text(encoding="utf-8")
    for rule in {"c.score>=80", "sectionsPassed", "gatesPassed", "physics-e4-a-check-v1", "durationSeconds:3600"}:
        if rule not in e4_exam_rules:
            failures.append(f"E4 A exam: missing rule {rule}")

    e4_b_diagnostic = (ROOT / "data/e4-b-diagnostic.js").read_text(encoding="utf-8")
    for rule in {"passCorrect:8", "空间矢量叠加", "研究对象切换", "系统能量账本"}:
        if rule not in e4_b_diagnostic:
            failures.append(f"E4 B diagnostic: missing rule {rule}")
    e4_b_learning = (ROOT / "data/e4-b-learning.js").read_text(encoding="utf-8")
    for rule in {"physics-e4-a-exam-v1", "physics-e4-b-diagnostic-v1", "B01", "B08"}:
        if rule not in e4_b_learning:
            failures.append(f"E4 B learning: missing rule {rule}")
    e4_b_check = (ROOT / "data/e4-b-check.js").read_text(encoding="utf-8")
    for rule in {"c.correct>=8", "sectionsPassed", "gatesPassed", "physics-e4-b-learning-v1"}:
        if rule not in e4_b_check:
            failures.append(f"E4 B check: missing rule {rule}")
    e4_b_exam = (ROOT / "data/e4-b-exam.js").read_text(encoding="utf-8")
    for rule in {"c.score>=75", "spatialPassed", "energyPassed", "novelIndependent", "durationSeconds:4500"}:
        if rule not in e4_b_exam:
            failures.append(f"E4 B exam: missing rule {rule}")

    e4_c_diagnostic = (ROOT / "data/e4-c-diagnostic.js").read_text(encoding="utf-8")
    for rule in {"passCorrect:8", "physics-e4-b-exam-v1", "函数与极限", "微元与连续近似", "实验论证", "强基目标"}:
        if rule not in e4_c_diagnostic:
            failures.append(f"E4 C diagnostic: missing rule {rule}")
    e4_c_learning = (ROOT / "data/e4-c-learning.js").read_text(encoding="utf-8")
    for rule in {"physics-e4-c-diagnostic-v1", "C01", "C08"}:
        if rule not in e4_c_learning:
            failures.append(f"E4 C learning: missing rule {rule}")
    e4_c_check = (ROOT / "data/e4-c-check.js").read_text(encoding="utf-8")
    for rule in {"c.correct>=8", "sectionsPassed", "gatesPassed", "physics-e4-c-learning-v1"}:
        if rule not in e4_c_check:
            failures.append(f"E4 C check: missing rule {rule}")
    e4_c_exam = (ROOT / "data/e4-c-exam.js").read_text(encoding="utf-8")
    for rule in {"total>=70", "reviewComplete", "modelPassed", "inquiryComplete", "independentDerivation", "physics-e4-c-check-v1"}:
        if rule not in e4_c_exam:
            failures.append(f"E4 C exam: missing rule {rule}")
    e4_c_exam_page = (ROOT / "e4-c-exam.html").read_text(encoding="utf-8")
    for asset in {"assets/storage.js", "assets/written-assessment.js", "data/e4-c-exam.js"}:
        if f'src="{asset}"' not in e4_c_exam_page:
            failures.append(f"e4-c-exam.html: missing written assessment asset {asset}")

    e4_progress = (ROOT / "e4-progress.html").read_text(encoding="utf-8")
    for rule in {"physics-e4-a-exam-v1", "physics-e4-b-exam-v1", "physics-e4-c-exam-v1", "wuli-study/e4-progress", "exportedAt"}:
        if rule not in e4_progress:
            failures.append(f"e4-progress.html: missing evidence rule {rule}")

    e5_source = (ROOT / "e5.html").read_text(encoding="utf-8")
    for track in "abc":
        for suffix in {"diagnostic", "models", "check", "exam", "retest"}:
            link = f"e5-{track}-{suffix}.html"
            if f'href="{link}"' not in e5_source:
                failures.append(f"e5.html: missing route {link}")
        if f'href="e5-{track}.html"' not in e5_source:
            failures.append(f"e5.html: missing learning route e5-{track}.html")
        for kind in {"diagnostic", "learning", "models", "check", "exam", "retest"}:
            data = ROOT / f"data/e5-{track}-{kind}.js"
            if not data.exists():
                failures.append(f"E5 {track.upper()}: missing data {data.name}")
    e5_progress = (ROOT / "e5-progress.html").read_text(encoding="utf-8")
    for rule in {"physics-e5-a-exam-v1", "physics-e5-b-exam-v1", "physics-e5-c-exam-v1", "wuli-study/e5-progress", "exportedAt"}:
        if rule not in e5_progress:
            failures.append(f"e5-progress.html: missing evidence rule {rule}")
    for track, score in {"a": 80, "b": 75, "c": 70}.items():
        diagnostic = (ROOT / f"data/e5-{track}-diagnostic.js").read_text(encoding="utf-8")
        check = (ROOT / f"data/e5-{track}-check.js").read_text(encoding="utf-8")
        exam = (ROOT / f"data/e5-{track}-exam.js").read_text(encoding="utf-8")
        for rule in {"failedGates", "guessedGates", "eligible"}:
            if rule not in diagnostic + check + exam:
                failures.append(f"E5 {track.upper()}: missing gate rule {rule}")
        if f"c.score>={score}" not in exam:
            failures.append(f"E5 {track.upper()} exam: missing score rule {score}")

    rules = {
        "e2-a-exam.html": ["score >= 80", "criticalFailures.length === 0"],
        "e2-b-diagnostic.html": ["correct >= 7", "failedGates.length === 0"],
        "e2-b-exam.html": ["score>=75", "novelIndependent"],
        "e2-c-diagnostic.html": ["toolsPassed&&goalConfirmed&&bPassed"],
        "e2-c-exam.html": ["total>=70", "reviewComplete", "inquiryStructure"],
    }
    for filename, needles in rules.items():
        source = (ROOT / filename).read_text(encoding="utf-8")
        for needle in needles:
            if needle not in source:
                failures.append(f"{filename}: missing pass rule {needle}")

    if failures:
        raise SystemExit("\n".join(failures))
    print(f"OK: audited {len(PAGES)} electricity pages, routes, scripts, links and pass rules")


if __name__ == "__main__":
    main()
