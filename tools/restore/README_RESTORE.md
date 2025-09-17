# 📝 Reglas de Restauración y Backup – Proyecto INSEMAD

1. **Un solo backup vigente**  
   - Siempre se conserva únicamente el último `.zip`.  
   - Los anteriores se eliminan automáticamente tras cada nuevo backup.  

2. **Backups fuera de GitHub**  
   - Carpeta `tools/restore/ultimo_punto_optimo/` está en `.gitignore`.  
   - Esto asegura que nunca se suban archivos grandes al remoto.  

3. **Backup automático con commit**  
   - Cada ejecución de `backup.sh` guarda estado y confirma con mensaje estándar:  
     ```
     💾 backup: YYYY-MM-DDTHH:MM:SSZ
     ```
   - Se mantiene limpio el historial.  

4. **Restore controlado**  
   - `restore.sh` restaura desde el último `.zip` y elimina versiones antiguas.  
   - No se acumulan restos.  

5. **Tags de Puntos Óptimos**  
   - Al llegar a un estado visual o funcional validado, se crea tag:  
     ```
     git tag -a punto_optimoX -m "📌 Punto Óptimo X: descripción breve"
     git push origin punto_optimoX
     ```
   - Permite volver a un estado estable sin depender de backups locales.  

6. **Limpieza preventiva**  
   - Nunca subir `.zip` mayores a 100 MB a GitHub.  
   - Si ocurre, limpiar con `git rm` y, de ser necesario, BFG.  

---
📌 **Mantra**: *“Un solo backup vigente, histórico limpio, punto óptimo con tag”*
