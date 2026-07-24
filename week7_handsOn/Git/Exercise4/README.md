# Git Exercise 4 - Merge Conflict Resolution

## Objective

- Learn how to create merge conflicts.
- Resolve conflicts manually.
- Complete the merge successfully.
- Ignore backup files using `.gitignore`.

---

## Commands

### Check Repository Status

```bash
git status
```

### Create a New Branch

```bash
git branch GitWork
```

### Switch to the Branch

```bash
git switch GitWork
```

### Create a File

```bash
touch hello.xml
```

### Stage Changes

```bash
git add .
```

### Commit Changes

```bash
git commit -m "Added hello.xml in GitWork"
```

### Switch to Main Branch

```bash
git switch main
```

### Modify the Same File

```bash
git add .
git commit -m "Updated hello.xml in main"
```

### View Commit History

```bash
git log --oneline --graph --decorate --all
```

### Compare Branches

```bash
git diff main GitWork
```

### Merge Branch

```bash
git merge GitWork
```

### Resolve Merge Conflict

Edit the conflicting file manually, remove the conflict markers, and keep the required content.

### Stage Resolved File

```bash
git add .
```

### Commit the Merge

```bash
git commit -m "Resolved merge conflict"
```

### Ignore Backup Files

Add the following to `.gitignore`

```gitignore
*.orig
```

### Commit `.gitignore`

```bash
git add .gitignore
git commit -m "Updated .gitignore"
```

### List Branches

```bash
git branch
```

### Delete Merged Branch

```bash
git branch -d GitWork
```

### View Final History

```bash
git log --oneline --graph --decorate
```

---

## Expected Outcome

- Created a new branch.
- Modified the same file in both branches.
- Merge conflict occurred.
- Conflict was resolved successfully.
- Backup files were ignored using `.gitignore`.
- Branch was deleted after merging.
