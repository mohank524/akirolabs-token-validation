# Token Validator App
This repository contains the Token Validator App, which consists of a validator service and a frontend user interface.

# Usage
1. Clone the repository to your local machine:

```
git clone git@github.com:mohank524/akirolabs-token-validation.git

```

2. Navigate to the project directory:

```
cd akirolabs-token-validation
```

3. Make sure you have Node.js installed on your machine.

4. Open a terminal and run the start.sh script to start the services:

```
./start.sh
```

5.To stop all services and exit, press any key in the terminal.

This script will start the validator service and the frontend user interface. The frontend will be available at http://localhost:8080.

To stop all services and exit, press any key in the terminal.

# Project Structure

```
token-validator/
├── frontend/
│    ├── src/
│    │   └── ... (frontend source files)
│    └── package.json
├── validator/
│   ├── app.js
├── start.sh
├── README.md

```

* frontend/: Contains the frontend source files for the user interface.
* validator/: Contains the validator service implementation.
* start.sh: Shell script to start all services and make the frontend available on http://localhost:8080.
* README.md: This file, providing information about the project and its usage.


# Cleaning Up
When you are finished using the application, make sure to stop the services properly. You can do this by following these steps:

* Press any key in the terminal where the services are running to stop all services.

