# Docker Setup

## Docker Desktop

### Docker Compose

1. **Open Docker Desktop** 

2. **Navigate to the project:**
   ```bash
   cd /Users/admin/Component_Library/taskbox
   ```

3. **Build and run**
   ```bash
   docker-compose up --build
   ```

4. **Access the component library:**
   ```
   http://localhost:8083
   ```

5. **Stop the container:**
   ```bash
   docker-compose down
   ```

## Docker Commands

### Start/Stop
```bash
# Start with docker-compose
docker-compose up -d

# Stop with docker-compose
docker-compose down

# Start existing container
docker start component-library-storybook

# Stop existing container
docker stop component-library-storybook
```

### View Logs
```bash
# View logs with docker-compose
docker-compose logs -f

# View logs directly
docker logs -f component-library-storybook
```

### Rebuild
```bash
# Rebuild with docker-compose
docker-compose up --build

# Rebuild image directly
docker build -t component-library . --no-cache
```

### Remove
```bash
# Remove with docker-compose (keeps images)
docker-compose down

# Remove container and volumes
docker-compose down -v

# Remove container directly
docker rm -f component-library-storybook

# Remove image
docker rmi component-library
```
