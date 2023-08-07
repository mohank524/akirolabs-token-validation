#!/bin/bash

cd validator
npm install
node app.js &
echo "Validator service started."

cd ../
cd frontend
npm install
export PORT=8080
npm start &
echo "Frontend service started."

cleanup() {
    kill -9 $(lsof -t -i :8080)
    kill -9 $(lsof -t -i :3001)

    echo "All services have been stopped."
}
trap cleanup EXIT
echo "All services are up and running. The frontend is available on http://localhost:8080"

read -rp "Press any key to stop all services and exit..."

