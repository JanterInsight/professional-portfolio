---
name: auto-commit
description: Automatiza commits git después de aplicar cambios en el portafolio. Usar siempre que el agente modifique archivos del proyecto.
---

Esta skill configura el agente para hacer commits automáticos después de cualquier cambio en el portafolio profesional.

## Archivos relacionados

- `.agents/commit_agent.py` - Script principal de commit automático
- `.agents/auto_commit.ps1` - Wrapper para Windows (PowerShell)
- `.agents/auto_commit.sh` - Wrapper para Unix/Linux (Bash)

## Uso

Después de aplicar cualquier cambio (código, imágenes, documentación), el agente debe ejecutar:

```bash
# En Windows:
python .agents/commit_agent.py "Descripción del cambio en inglés"

# En Unix/Linux:
bash .agents/auto_commit.sh
# o
python .agents/commit_agent.py "Descripción del cambio en inglés"
```

## Mensaje de commit

- Los mensajes deben ser descriptivos y en **inglés**
- Si existe `.agents/CHANGE_MSG.txt`, se leerá automáticamente como mensaje
- Formato recomendado: "feat: add new project section" o "fix: correct responsive layout"

## Cuándo usar

- **SIEMPRE** después de modificar archivos del portafolio
- Al finalizar implementación de nuevas funcionalidades
- Al corregir errores o bugs
- Al actualizar contenido, imágenes o documentación