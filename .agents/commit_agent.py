#!/usr/bin/env python3
"""Helper para que el agente haga commits de forma fiable.

Uso:
  python .agents/commit_agent.py "Mensaje del commit"

El script hace `git add -A` y `git commit -m <msg>` y reporta salida.
"""
import subprocess
import sys
from pathlib import Path


def run_cmd(args):
    r = subprocess.run(args, capture_output=True, text=True)
    return r.returncode, r.stdout.strip(), r.stderr.strip()


def main():
    msg = "Agent: automated commit"
    if len(sys.argv) > 1:
        msg = sys.argv[1]

    # Ensure we're inside a git repo
    code, out, err = run_cmd(["git", "rev-parse", "--is-inside-work-tree"])
    if code != 0:
        print("Error: current directory is not a git repository.")
        print(err)
        sys.exit(1)

    code, out, err = run_cmd(["git", "add", "-A"])
    if code != 0:
        print("git add failed:")
        print(err)
        sys.exit(1)

    code, out, err = run_cmd(["git", "commit", "-m", msg])
    if code != 0:
        lower = (out + err).lower()
        if "nothing to commit" in lower:
            print("Nothing to commit.")
            sys.exit(0)
        print("git commit failed:")
        print(out)
        print(err)
        sys.exit(code)

    print(out)


if __name__ == '__main__':
    main()
