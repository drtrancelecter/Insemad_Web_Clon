#!/bin/bash
set -e
cd "$(dirname "$0")/../.."
git add -A
git commit -m "📦 snapshot $(date -u +'%Y-%m-%dT%H:%M:%SZ')" || true
mkdir -p tools/restore/snapshots
ts=$(date +%s)
git archive -o "tools/restore/snapshots/snapshot_${ts}.zip" HEAD
echo "snapshot_created=tools/restore/snapshots/snapshot_${ts}.zip"
