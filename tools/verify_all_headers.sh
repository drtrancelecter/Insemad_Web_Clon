#!/usr/bin/env bash
set -euo pipefail

extract_header () {
  # Toma el bloque <header>…</header>, quita class="active" y espacios/nuevas líneas
  awk '/<header/{flag=1} flag{print} /<\/header>/{exit}' "$1" \
  | sed 's/class="active"//g' \
  | tr -d ' \t\n'
}

INDEX_HEADER=$(extract_header index.html)
PROD_HEADER=$(extract_header productos.html)

mkdir -p tools/screenshots
printf "%s\n" "$INDEX_HEADER" > tools/screenshots/index_header.norm.txt
printf "%s\n" "$PROD_HEADER"  > tools/screenshots/productos_header.norm.txt

if [[ "$INDEX_HEADER" != "$PROD_HEADER" ]]; then
  echo "❌ Headers diferentes detectados (excepto active)."
  diff -u tools/screenshots/index_header.norm.txt tools/screenshots/productos_header.norm.txt > tools/screenshots/headers.diff || true
  exit 1
fi

echo "✅ Headers uniformes (ignorado class=active)"
