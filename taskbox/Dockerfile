# Use Node.js 20 for build
FROM node:20-alpine AS build

# Set working directory to required name
WORKDIR /whitwellStier_vaughn_ui_garden_build_checks

# Copy package files
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all project files
COPY . .

# Build production React app
RUN yarn build

# Production stage - serve static files with nginx
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /whitwellStier_vaughn_ui_garden_build_checks/dist /usr/share/nginx/html

# Create nginx configuration for port 8018
RUN echo 'server { \
    listen 8018; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    # Cache static assets \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 8018
EXPOSE 8018

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
