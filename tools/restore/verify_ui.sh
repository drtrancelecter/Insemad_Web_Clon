#!/bin/bash
set -e
cd "$(dirname "$0")/.."
count=$(grep -c '<div class="floating-buttons">' index.html || true)
if [ "$count" -ne 1 ]; then
  echo "ERROR_floating_buttons_instances=${count}"
  exit 2
fi
grep -n "box-shadow" assets/css/brand.css || true
grep -n "filter" assets/css/brand.css || true
echo "UI_CHECK_OK"
