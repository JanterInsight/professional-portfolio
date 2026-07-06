# .agents

Este directorio contiene la configuración local del agente para el Portafolio Profesional de Janlier Rojas.

## Propósito

Permitir que el asistente (o cualquier agente configurado para este repositorio) trabaje con instrucciones específicas y con un conjunto claro de habilidades orientadas al desarrollo web y presentación de proyectos profesionales.

## Archivos

- `project.yaml`: configuración principal del agente con guía de uso de skills.
- `commit_agent.py`: helper para commits automáticos.
- `auto_commit.ps1` / `auto_commit.sh`: wrappers para ejecutar el helper en Windows / Unix.

## Skills Disponibles

Las skills están en `.agents/skills/`. Cada skill tiene un archivo `SKILL.md` con su descripción y cuándo usarla.

### Skills principales para este proyecto:

| Skill | Cuándo usar |
|-------|-------------|
| `auto-commit` | SIEMPRE después de modificar archivos del portafolio |
| `frontend-design` | Construir interfaces web, componentes, páginas |
| `amplify-workflow` | Trabajar con AWS Amplify, Cognito, AppSync |
| `convex-design` | Backend reactivo con Convex |
| `firestore-data` | Operaciones CRUD en Firestore |
| `gcp-to-aws` | Migrar workloads de GCP a AWS |
| `use-railway` | Operar infraestructura Railway |
| `searching-sourcegraph` | Buscar y navegar código |
| `teamcity-cli` | Trabajar con TeamCity CI/CD |
| `sentry-cli` | Monitoreo de errores con Sentry |
| `building-pydantic-ai-agents` | Construir agentes AI con Pydantic |
| `data-analyst` | Análisis de datos con ClickHouse |
| `mintlify` | Crear documentación con Mintlify |
| `playground` | Crear playgrounds HTML interactivos |
| `skill-creator` | Crear o optimizar skills |

Ver `project.yaml` para la guía completa de triggers y cuándo usar cada skill.

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
