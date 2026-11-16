"""Gera os pacotes que permitem abrir o jogo diretamente a partir do disco."""
from pathlib import Path
import json

root = Path(__file__).resolve().parents[1]
dest = root / "dist" / "levels-local"
dest.mkdir(exist_ok=True)
for source in sorted((root / "dist" / "levels").glob("*.json")):
    data = json.loads(source.read_text(encoding="utf-8"))
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    (dest / (source.stem + ".js")).write_text(
        f"registerLocalLevel({payload});\n", encoding="utf-8"
    )
