# Crewzy Employee Directory
A containerized full-stack application featuring a FastAPI backend, React frontend, and PostgreSQL 17 database.

## 1. Prerequisites
Before starting, ensure you have the following installed on your machine:

Docker Desktop (or Docker Engine on Linux)

Docker Compose (included with Docker Desktop)

Git (to clone the repository)

## 2. Setup & Run Instructions
Follow these steps to get the environment up and running:

Step 1: Clone the Repository
git clone https://github.com/Mahamadtohid/Employee-Directory.git
cd Crewzy-Employee-Directory

Step 2: Build and Start the Containers
Since we are using Docker Compose, you only need one command to build the images and start the services:

Command: docker compose up --build

## Step 3: Access the Application
Frontend: http://localhost:3000


PostgreSQL: Accessible on localhost:5432 (User: admin, Password: admin)

## Step 4: Stopping the Application
To stop the containers:

Command: docker compose down
To stop and delete all data (reset database):

docker compose down -v


## 3. Design Decisions
A. Architecture (Docker Compose)
We utilized Docker Compose to orchestrate three separate services. This ensures that the development environment is identical for all contributors and avoids "it works on my machine" issues.

B. Database: PostgreSQL 17
Choice: We chose PostgreSQL 17 for its robust handling of relational data and performance.

Volume Persistence: A Docker volume (postgres_data) is used to ensure employee data is not lost when the container is stopped.

Healthchecks: We implemented a pg_isready healthcheck. The backend service is configured to wait for the database to be "Healthy" before starting, preventing connection-retry crashes.

C. Backend: FastAPI + SQLAlchemy
Efficiency: FastAPI was chosen for its high performance and automatic Swagger documentation.

Environment Variables: All sensitive data (DB credentials) are handled via environment variables inside the docker-compose.yml, making it easy to swap for production values.

D. Networking
Custom Bridge Network: All containers communicate over a private bridge network called employee-network. This isolates the application traffic and allows the backend to refer to the database using the internal DNS name db.
