#!/bin/bash
set -e

TS=$(date +%s)
cp index.html tools/backups/index.$TS.html
cp productos.html tools/backups/productos.$TS.html
echo "💾 Backup creado en tools/backups/ (timestamp: $TS)"
