# Quick Test Commands

Run these commands in order to verify everything works:

## 1. Navigate to project
```bash
cd '/Users/admin/Desktop/School/Cloned Repos/whitwellStier-vaughn-ui-garden/taskbox'
```

## 2. Test Prettier
```bash
/opt/homebrew/bin/node .yarn/releases/yarn-4.9.2.cjs format:check
```
Should show "All matched files use Prettier code style!"

## 3. Test ESLint
```bash
/opt/homebrew/bin/node .yarn/releases/yarn-4.9.2.cjs lint
```
Should complete without errors (warnings are OK)

## 4. Test Tests
```bash
/opt/homebrew/bin/node .yarn/releases/yarn-4.9.2.cjs test:ci
```
All tests should pass

## 5. Build Docker Image
```bash
docker build -t whitwellStier_vaughn_coding_assignment13 .
```
Should build successfully

## 6. Run Docker Container
```bash
docker run -d --name whitwellStier_vaughn_coding_assignment13 -p 8018:8018 whitwellStier_vaughn_coding_assignment13
```
Container should start

## 7. Test in Browser
Open: http://localhost:8018
Application should load

## 8. Check Container Logs
```bash
docker logs whitwellStier_vaughn_coding_assignment13
```
Should show nginx started

## 9. Stop Container
```bash
docker stop whitwellStier_vaughn_coding_assignment13
docker rm whitwellStier_vaughn_coding_assignment13
```

## 10. Test Pre-commit Hook
```bash
cd '/Users/admin/Desktop/School/Cloned Repos/whitwellStier-vaughn-ui-garden'
# Make a small change to test
echo "// test" >> taskbox/src/App.tsx
git add taskbox/src/App.tsx
git commit -m "test pre-commit hooks"
```
Pre-commit checks should run

## If any check fails, revert:
```bash
git reset HEAD~1
git checkout taskbox/src/App.tsx
```
