# .agents

Este directorio contiene la configuración local del agente para el Portafolio Profesional de Janlier Rojas.

## Propósito

Permitir que el asistente (o cualquier agente configurado para este repositorio) trabaje con instrucciones específicas y con un conjunto claro de habilidades orientadas al desarrollo web y presentación de proyectos profesionales.

## Archivos

- `project.yaml`: configuración principal del agente.
- `commit_agent.py`: helper para commits automáticos.
- `auto_commit.ps1` / `auto_commit.sh`: wrappers para ejecutar el helper en Windows / Unix.

## Uso

Mantén este directorio actualizado con las decisiones del proyecto y agrega nuevas instrucciones o habilidades según avance el desarrollo del portafolio.

## Auto-commit

El agente debe ejecutar automáticamente `.agents/commit_agent.py` después de aplicar cambios.

Cómo usar desde scripts del agente:

- Grabar el mensaje de commit (opcional) en `.agents/CHANGE_MSG.txt`.
- Ejecutar `.agents/auto_commit.ps1` (Windows) o `.agents/auto_commit.sh` (Unix).

Ejemplo (PowerShell):

```powershell
Set-Content -Path .agents/CHANGE_MSG.txt -Value "Describe los cambios realizados"
python .agents/commit_agent.py "Describe los cambios realizados"
```

`project.yaml` contiene `auto_commit_script` y `auto_commit_on_change: true` para que el agente lo respete.