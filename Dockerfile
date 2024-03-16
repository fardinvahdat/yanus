# Use an official Node runtime as the parent image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

RUN npm cache clean --force

# Install project dependencies
RUN npm install --legacy-peer-deps

# Copy the current directory contents into the container at /app
COPY . .

# Build the app for production
RUN npm run build

# The build output will be in the /app/dist directory
