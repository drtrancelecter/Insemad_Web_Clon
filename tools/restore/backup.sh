#!/bin/bash
set -e

BACKUP_DIR="tools/restore/backups"
mkdir -p "$BACKUP_DIR"

ts=$(date +%s)
ZIP="$BACKUP_DIR/backup_${ts}.zip"

# Crear backup de todo el repo
git add -A
git commit -m "💾 backup: $(date -u +%Y-%m-%dT%H:%M:%SZ)" || true
git archive -o "$ZIP" HEAD

echo "backup_created=$ZIP"

# Mantener solo el último backup
echo "🧹 Limpiando backups antiguos..."
ls -t "$BACKUP_DIR"/backup_*.zip | tail -n +2 | xargs rm -f --

echo "✅ Backup completado y backups antiguos eliminados."
