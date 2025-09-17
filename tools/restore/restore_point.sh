#!/bin/bash
set -e

echo "🔄 Restaurando proyecto al último punto óptimo documentado..."

# Traer todas las refs y tags
git fetch --all --tags

# Resetear duro al tag seguro
git reset --hard punto_optimo_doc

echo "✅ Proyecto restaurado exactamente al estado de 'punto_optimo_doc'"
