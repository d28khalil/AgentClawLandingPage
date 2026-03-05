# Use an official Node runtime as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the 'serve' package globally or as a dependency
RUN npm install

# Copy the rest of the application code
COPY . .

# Cloud Run sets the PORT environment variable
ENV PORT 8080

# Expose the port the app runs on
EXPOSE 8080

# Start the app using the start script defined in package.json
CMD ["npm", "start"]
