# Clone To Run Commands

### Clone the repository
```bash
git clone https://github.com/vaughnws/whitwellStier-vaughn-ui-garden.git
cd whitwellStier-vaughn-ui-garden/taskbox
```
### Install dependencies
```bash
/opt/homebrew/bin/node .yarn/releases/yarn-4.9.2.cjs install
```
### Install Playwright browsers for tests
```bash
/opt/homebrew/bin/node .yarn/releases/yarn-4.9.2.cjs playwright install chromium
```
### Build the Docker image
```bash
docker build -t whitwellstier_vaughn_coding_assignment13 .
```
### Run the Docker container
```bash
docker run -d --name whitwellstier_vaughn_coding_assignment13 -p 8018:8018 whitwellstier_vaughn_coding_assignment13
```
### Access the application
open http://localhost:8018

### Stop and remove container when done
```bash
docker stop whitwellstier_vaughn_coding_assignment13
docker rm whitwellstier_vaughn_coding_assignment13
```

## Quick Test Commands

Run these commands:

### 1. Navigate to project
```bash
cd '/Users/admin/Desktop/School/Cloned Repos/whitwellStier-vaughn-ui-garden/taskbox'
```

### 2. Test Prettier
```bash
/opt/homebrew/bin/node .yarn/releases/yarn-4.9.2.cjs format:check
```
Should show "All matched files use Prettier code style!"

### 3. Test ESLint
```bash
/opt/homebrew/bin/node .yarn/releases/yarn-4.9.2.cjs lint
```
Should complete without errors (warnings are OK)

### 4. Test Tests
```bash
/opt/homebrew/bin/node .yarn/releases/yarn-4.9.2.cjs test:ci
```
All tests should pass