# Project Overview

This project is a simple full-stack web application structured with a frontend built in React and a backend using FastAPI.

## Project Structure

```
.
├── frontend/       # Contains the React frontend code
│   └── src/        # Source files for the frontend
│   └── public/     # Public assets
│   └── package.json
│   └── README.md
├── backend/        # Contains the FastAPI backend code
│   └── main.py     # FastAPI server file with a basic 'Hello World' endpoint
└── README.md       # Project instructions and setup guide
```

## Frontend

The frontend is built with:
- **React.js** (latest version)
- **Styled-components** for styling

### How to Run the Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The React app should now be running at `http://localhost:3000`.

## Backend

The backend is built with:
- **FastAPI**

### How to Run the Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Initiate a virtual environment:
   ```bash
   python -m venv venv
   ```
   
3. Activate the virtual environment (below the command for Mac/Linux):
   ```bash
   source venv/bin/activate
   ```
   
4. Install the required dependencies (make sure you have `pip` installed):
   ```bash
   pip install -r requirements.txt
   ```

5. Run the FastAPI server:
   ```bash
   python main.py
   ```

The FastAPI server should now be running at `http://0.0.0.0:3101`.
