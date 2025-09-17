Scripts to backup, verify UI and create snapshots.

Usage:
./tools/restore/backup.sh    -> creates a zip backup under tools/restore/backups/
./tools/restore/verify_ui.sh -> checks single floating-buttons instance and reports box-shadow/filter occurrences
./tools/restore/create_snapshot.sh -> commits locally (if any) and creates an archive under tools/restore/snapshots/

No scripts push to remote. Confirm before pushing.
