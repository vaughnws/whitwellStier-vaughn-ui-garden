#!/bin/bash

echo "Component Library Booting up..."
echo "===================================="
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Docker is not running!"
    echo "Please start Docker Desktop and try again."
    exit 1
fi

echo "Docker is running"
echo ""

# Navigate to the project directory
cd "$(dirname "$0")"

echo "Building and starting container..."
echo ""

# Build and start with docker-compose
docker-compose up --build -d

# Check if successful
if [ $? -eq 0 ]; then
    echo ""
    echo "Success! Container is running"
    echo ""
    echo "Access your component library at:"
    echo "   http://localhost:8083"
    echo ""
    echo "View logs:"
    echo "   docker-compose logs -f"
    echo ""
    echo "Stop container:"
    echo "   docker-compose down"
    echo ""
else
    echo ""
    echo "Failed to start container"
    echo "Check the logs with: docker-compose logs"
    exit 1
fi
