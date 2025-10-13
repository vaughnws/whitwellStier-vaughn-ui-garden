# Component Library

React component library built with Storybook, TypeScript, and Styled Components.

Run it with  

```bash
cd /Users/admin/Component_Library/taskbox
./start-docker.sh
```

# Setup Instructions

I've saved all the commands I used to make it work
For Detailed instructions, view the DOCKER_README or the YARN_README for specific instructions. 

## Requirements

- Node.js 20 or higher
- Yarn 4.9.2
- Docker (for containerized deployment)

## Installation

```bash
yarn install
```

## Development

Start Storybook development server:

```bash
yarn storybook
```

Access at http://localhost:8083

## Testing

Run tests:

```bash
yarn test
```

Run tests with UI:

```bash
yarn test:ui
```

Run tests with coverage:

```bash
yarn test:coverage
```

## Build

Build static Storybook:

```bash
yarn build-storybook
```

Output directory: `storybook-static/`

## Docker

### Build and Run

```bash
docker-compose up --build
```

### Stop

```bash
docker-compose down
```

### Container Details

- Container name: WhitwellStier_Vaughn_coding_assignment12
- Working directory: /WhitwellStier_Vaughn_ui_garden
- Port: 8083

Access at http://localhost:8083

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
src/
├── components/
│   ├── ComponentName/
│   │   ├── ComponentName.tsx
│   │   ├── ComponentName.types.ts
│   │   ├── ComponentName.stories.tsx
│   │   ├── ComponentName.test.tsx
│   │   └── index.ts
│   └── index.ts
└── ...
```
