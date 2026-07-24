# Git Exercise 1

## Objective

- Configure Git
- Initialize a Git repository
- Add a file to the repository
- Commit the changes

---

## Commands Used

### Check Git Version

```bash
git --version
```

### Check Git Configuration

```bash
git config --global --list
```

### Initialize Repository

```bash
git init
```

### Create File

```bash
echo "Welcome to the version control" > welcome.txt
```

### Check Status

```bash
git status
```

### Stage File

```bash
git add welcome.txt
```

### Commit Changes

```bash
git commit -m "Added welcome.txt"
```

### View Commit History

```bash
git log --oneline
```

---

## Files

- `welcome.txt`

---

## Outcome

- Git was configured successfully.
- A local Git repository was initialized.
- `welcome.txt` was created and committed successfully.
