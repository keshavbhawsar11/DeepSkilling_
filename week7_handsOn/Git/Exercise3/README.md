# Git Exercise 3 - Branching and Merging

## Objective

- Learn how to create a new branch.
- Switch between branches.
- Commit changes in a branch.
- Merge a branch into the main branch.
- Delete the merged branch.

---

## Commands

### Check Current Branch

```bash
git branch
```

### Create a New Branch

```bash
git branch GitNewBranch
```

### Switch to the New Branch

```bash
git switch GitNewBranch
```

### Check Git Status

```bash
git status
```

### Add Changes

```bash
git add .
```

### Commit Changes

```bash
git commit -m "Added changes in GitNewBranch"
```

### Switch Back to Main Branch

```bash
git switch main
```

### Compare Branches

```bash
git diff main GitNewBranch
```

### Merge Branch

```bash
git merge GitNewBranch
```

### View Commit History

```bash
git log --oneline --graph --decorate
```

### Delete Merged Branch

```bash
git branch -d GitNewBranch
```

### Check Branches

```bash
git branch
```

---

## Expected Outcome

- A new branch is created.
- Changes are committed in the new branch.
- The branch is merged into the main branch.
- Commit history shows the merge.
- The merged branch is deleted successfully.
