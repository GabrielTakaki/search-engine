# Project Overview

This project is a simple full-stack web application structured with a frontend built in React and a backend using FastAPI.
Your goal is to implement a single-page search engine as shown in the Figma design.

**The backend task is optional** and accounts for ~5-10% of the final score, so please focus on the frontend.

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

feel free to add any package, but please focus on using styled-components for css.

**You should focus on implementing the frontend as per the design provided above, please focus on the search engine 
functionalities. The sidebar, header and footer can simply be a placeholder with icons that does not do anything.**

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

## Backend (OPTIONAL)

The backend is built with:
- **FastAPI**


There's an *hello world* endpoint initiated, as an optional task you can create another
endpoint and retrieve a **hardcoded list of search results. Please implement the code as production-ready!**

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

The FastAPI server should now be running at `http://0.0.0.0:3101`, and you can access the "Hello World" endpoint at `http://0.0.0.0:3101`.

## Additional Notes

Feel free to reach out if you encounter any issues or have questions!
