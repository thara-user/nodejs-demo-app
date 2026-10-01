# Node.js CI/CD Demo

## Project Overview

This project demonstrates an automated CI/CD pipeline for a Node.js web application using GitHub Actions and Docker.

The pipeline automatically tests the application, builds a Docker image, and pushes the Docker image to Docker Hub whenever code is pushed to the `main` branch.

## Objective

The objective of this project is to automate the build, test, and Docker image deployment process using GitHub Actions.

## Technologies Used

- Node.js
- Express.js
- GitHub
- GitHub Actions
- Docker
- Docker Hub

## Application

The application is a simple Node.js web application with a health-check endpoint.

### Health Check Endpoint

GET /health

Expected response:

{
  "status": "healthy"
}

## Project Structure

nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── .dockerignore
├── .gitignore
├── Dockerfile
├── app.js
├── package.json
├── package-lock.json
├── test.js
└── README.md

## CI/CD Pipeline

The GitHub Actions workflow is triggered whenever code is pushed to the `main` branch.

### Pipeline Flow

Developer pushes code
        ↓
GitHub Repository
        ↓
GitHub Actions
        ↓
Install Dependencies
        ↓
Start Application
        ↓
Run Automated Tests
        ↓
Build Docker Image
        ↓
Login to Docker Hub
        ↓
Push Docker Image
        ↓
Docker Hub

## GitHub Actions Workflow

The CI/CD workflow is located at:

.github/workflows/main.yml

The workflow contains two jobs:

### 1. Test Job

The test job:

- Checks out the source code
- Sets up Node.js
- Installs dependencies
- Starts the application
- Waits for the application to start
- Runs the automated tests

### 2. Docker Job

The Docker job runs after the test job succeeds.

It:

- Checks out the source code
- Logs in to Docker Hub
- Builds the Docker image
- Pushes the Docker image to Docker Hub

## Docker Image

Docker Hub repository:

awss3user/nodejs-demo-app

Docker image:

awss3user/nodejs-demo-app:latest

## Dockerfile

The application is containerized using Docker.

The Docker image uses:

node:22-alpine

The application runs on port:

3001

## Local Testing

### Install Dependencies

npm ci

### Run the Application

npm start

The application runs on:

http://localhost:3001

### Run Tests

npm test

### Test Health Endpoint

curl http://localhost:3001/health

Expected response:

{
  "status": "healthy"
}

## Docker Testing

### Build Docker Image

docker build -t nodejs-demo-app .

### Run Docker Container

docker run -p 3001:3001 nodejs-demo-app

### Test Docker Application

curl http://localhost:3001/health

## CI/CD Result

The GitHub Actions CI/CD pipeline was successfully executed.

The pipeline successfully:

- Passed automated application tests
- Built the Docker image
- Logged in to Docker Hub
- Pushed the Docker image to Docker Hub

## Repository

GitHub Repository:

https://github.com/thara-user/nodejs-demo-app

## Docker Hub

Docker Hub Repository:

https://hub.docker.com/r/awss3user/nodejs-demo-app

## Conclusion

This project demonstrates a basic CI/CD pipeline using GitHub Actions for a Node.js application.

The pipeline automates testing, Docker image building, and Docker image pushing to Docker Hub whenever changes are pushed to the main branch.
