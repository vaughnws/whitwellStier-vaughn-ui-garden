# Component Library

React component library built with Storybook, TypeScript, and Styled Components.

Hello Maninder!


### Run the Docker Container
```bash
cd taskbox
docker build -t whitwellstier_vaughn_coding_assignment13 .
docker run -p 8018:8018 whitwellstier_vaughn_coding_assignment13
```

Access at **http://localhost:8018**

### Full Documentation
See [taskbox/README.md](./taskbox/README.md) for complete setup and usage instructions.

---

## Assignment 13 Features

**Docker Container**
- Production build of React app
- Container name: `whitwellstier_vaughn_coding_assignment13`
- Working directory: `/whitwellstier_vaughn_ui_garden_build_checks`
- Port: 8018

**Pre-commit Hooks**
- Prettier code formatting
- ESLint code quality checks
- Automated test execution
- Commits blocked on failure

**CI/CD Pipeline**
- GitHub Actions workflow
- Runs same checks as pre-commit hooks
- Build failure notifications
- Prevents bypassing local checks

---

## Requirements

- Node.js 20 or higher
- Yarn 4.9.2
- Docker (for containerized deployment)

## Installation

```bash
cd taskbox
yarn install
```

## Development

Start development server:

```bash
cd taskbox
yarn dev
```

Start Storybook:

```bash
cd taskbox
yarn storybook
```

Access at http://localhost:8083

## Testing

Run tests:

```bash
cd taskbox
yarn test
```

Run tests with coverage (CI mode):

```bash
cd taskbox
yarn test:ci
```

## Linting & Formatting

Check code:
```bash
cd taskbox
yarn lint
yarn format:check
```

Fix issues:
```bash
cd taskbox
yarn lint:fix
yarn format
```

## Build

Build production app:

```bash
cd taskbox
yarn build
```

Build Storybook:

```bash
cd taskbox
yarn build-storybook
```

## Docker Commands

See [taskbox/README.md](./taskbox/README.md) for detailed Docker commands.

Quick reference:
```bash
cd taskbox
yarn docker:build    # Build container
yarn docker:run      # Run container
yarn docker:stop     # Stop container
yarn docker:logs     # View logs
```

## Components

The library includes 18 components:

- Button
- Label
- Text
- Table
- Dropdown
- RadioButton
- Img
- HeroImage
- Card
- Status
- Resources
- MessageBoard
- Calendar
- ServiceCard
- LogsViewer
- NetworkStats
- ContainerManager
- NewsTicker

## Project Structure

```
.
├── taskbox/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   └── ...
│   │   └── ...
│   ├── Dockerfile
│   ├── package.json
│   ├── .prettierrc
│   ├── .eslintrc.cjs
│   ├── .husky/
│   │   └── pre-commit
│   ├── .github/
│   │   └── workflows/
│   │       └── ci.yml
│   └── README.md
└── .git/
    └── hooks/
        └── pre-commit
```
