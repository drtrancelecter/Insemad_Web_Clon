#!/bin/bash
set -e

INDEX_HEADER=$(grep -A10 "<header" index.html | tr -d ' \t\n')
PROD_HEADER=$(grep -A10 "<header" productos.html | tr -d ' \t\n')

if [ "$INDEX_HEADER" != "$PROD_HEADER" ]; then
  echo "❌ Headers diferentes detectados."
  # Crear un diff de texto
  diff -u <(echo "$INDEX_HEADER") <(echo "$PROD_HEADER") > tools/screenshots/headers.diff || true
  exit 1
fi

echo "✅ Headers uniformes en index.html y productos.html"
