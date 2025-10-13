# Use Node.js 20 for build (required by Storybook)
FROM node:20-alpine AS build

# Set working directory
WORKDIR /WhitwellStier_Vaughn_ui_garden

# Copy package files
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Install dependencies
RUN yarn install

# Copy all project files
COPY . .

# Build production Storybook (static files)
RUN npx storybook build

# Production stage - serve static files
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /WhitwellStier_Vaughn_ui_garden/storybook-static /usr/share/nginx/html

# Copy nginx config for SPA
RUN echo 'server { \
    listen 8083; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 8083
EXPOSE 8083

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
