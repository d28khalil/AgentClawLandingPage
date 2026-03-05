# Use an official Node runtime as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# We don't necessarily need npm install if we use npx for a static site, 
# but copying files is required.
COPY . .

# Install 'serve' to ensure it's available
RUN npm install -g serve

# Cloud Run sets the PORT environment variable, usually 8080.
# We force serve to listen on 8080 to match Cloud Run's default.
EXPOSE 8080

# Use the -l (listen) flag which is more reliable in Docker environments
CMD ["serve", "-s", ".", "-l", "8080"]
