#!/bin/bash
set -e

BACKUP_DIR="tools/restore/backups"

# Detectar último backup
LAST_BACKUP=$(ls -t "$BACKUP_DIR"/backup_*.zip 2>/dev/null | head -n 1)

if [ -z "$LAST_BACKUP" ]; then
  echo "❌ No hay backups disponibles en $BACKUP_DIR"
  exit 1
fi

echo "⏪ Restaurando desde: $LAST_BACKUP"
unzip -o "$LAST_BACKUP" -d .

# Mantener solo el último backup
echo "🧹 Limpiando backups antiguos..."
ls -t "$BACKUP_DIR"/backup_*.zip | tail -n +2 | xargs rm -f --

echo "✅ Restauración completada. Solo se conserva: $LAST_BACKUP"
