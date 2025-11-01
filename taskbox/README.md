# Component Library - Coding Assignment 13

## Prerequisites
- Docker installed on your machine
- Git installed
- Node.js 20+ (for local development)

## Getting Started

### 1. Build the Docker Container
```bash
cd taskbox
docker build -t whitwellStier_vaughn_coding_assignment13 .
```

### 2. Run the Container
```bash
docker run -p 8018:8018 whitwellStier_vaughn_coding_assignment13
```

Or use the npm script:
```bash
cd taskbox
yarn docker:build
yarn docker:run
```

### 3. Access the Application
Open your browser and navigate to:
```
http://localhost:8018
```

## Development Setup

### Install Dependencies
```bash
cd taskbox
yarn install
```

### Run Development Server
```bash
yarn dev
```

### Run Tests
```bash
yarn test
```

### Run Linting
```bash
yarn lint
```

### Format Code
```bash
yarn format
```

## Pre-commit Checks

Before each commit, the following checks will automatically run:
1. **Prettier** - Ensures code formatting is consistent
2. **ESLint** - Checks for code quality issues
3. **Tests** - Runs all test suites with coverage

If any check fails, the commit will be blocked. Fix the issues before committing.

### Manually Run Pre-commit Checks
```bash
cd taskbox
yarn lint-staged
yarn test:ci
```

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci.yml`) runs the same checks on every push and pull request:
- Prettier check
- ESLint check
- Test suite with coverage
- Production build

You'll receive notifications if the build fails.

## Docker Commands

### Build Container
```bash
docker build -t whitwellStier_vaughn_coding_assignment13 .
```

### Run Container
```bash
docker run -d --name whitwellStier_vaughn_coding_assignment13 -p 8018:8018 whitwellStier_vaughn_coding_assignment13
```

### Stop Container
```bash
docker stop whitwellStier_vaughn_coding_assignment13
```

### Remove Container
```bash
docker rm whitwellStier_vaughn_coding_assignment13
```

### View Logs
```bash
docker logs -f whitwellStier_vaughn_coding_assignment13
```

### Using Yarn Scripts
```bash
yarn docker:build    # Build the container
yarn docker:run      # Run the container
yarn docker:stop     # Stop the container
yarn docker:remove   # Remove the container
yarn docker:logs     # View container logs
```

## Project Structure
```
.
├── taskbox/
│   ├── Dockerfile
│   ├── README.md
│   ├── package.json
│   ├── .prettierrc
│   ├── .eslintrc.cjs
│   ├── .dockerignore
│   ├── .husky/
│   │   └── pre-commit
│   ├── .github/
│   │   └── workflows/
│   │       └── ci.yml
│   ├── src/
│   │   └── components/
│   └── ...
└── .git/
    └── hooks/
        └── pre-commit
```
