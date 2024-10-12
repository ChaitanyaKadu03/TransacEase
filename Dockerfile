# Use the appropriate base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the entire project (adjust if necessary)
COPY . .

# Navigate to the frontend app directory
WORKDIR /app/apps/frontend

# Install dependencies
RUN ["npm", "install"]

# Build the Next.js application
RUN ["npm", "run", "build"]

# Expose the port (if your application listens on a specific port)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
