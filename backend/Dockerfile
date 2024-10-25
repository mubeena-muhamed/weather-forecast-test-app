# Use an official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn

# Copy the rest of the application code
COPY . .

# Install ts-node globally
# RUN yarn global add ts-node typescript

# Expose the application's port
EXPOSE $VUE_APP_BACKEND_API_PORT

# Start the application using ts-node
CMD ["yarn", "serve"]
