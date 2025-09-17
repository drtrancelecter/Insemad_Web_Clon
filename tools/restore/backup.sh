#!/bin/bash
set -e
cd "$(dirname "$0")/../.."
git checkout gh-pages
git add -A
git commit -m "💾 backup: $(date -u +'%Y-%m-%dT%H:%M:%SZ')" || true
mkdir -p tools/restore/backups
ts=$(date +%s)
zip -r "tools/restore/backups/backup_${ts}.zip" . -x "tools/restore/backups/*"
echo "backup_created=tools/restore/backups/backup_${ts}.zip"
