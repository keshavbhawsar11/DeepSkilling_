# Git Exercise 2 - Git Ignore

## Objective

Learn how to ignore unwanted files and folders using `.gitignore`.

## Commands

```bash
touch app.log
touch notes.txt
mkdir log
touch log/error.log
touch .gitignore
```

Edit `.gitignore`

```gitignore
*.log
log/
```

Check status

```bash
git status
```

## Expected Output

Only the following files should appear:

- .gitignore
- notes.txt

The following should be ignored:

- app.log
- log/

## Explanation

- `*.log` ignores all log files.
- `log/` ignores the entire log directory.
