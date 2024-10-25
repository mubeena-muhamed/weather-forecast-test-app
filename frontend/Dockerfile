# Use the official Node.js image to build the application
FROM node:18 AS builder

# Create app directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn

# Copy the rest of the application code
COPY . .

# Build the Vue application
RUN yarn build

# Use an official Nginx image to serve the application
FROM nginx:alpine

# Copy built application from the builder stage to the Nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx is running on
EXPOSE 80
