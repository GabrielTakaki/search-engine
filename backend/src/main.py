from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware

from backend.src.endpoints.routes import app as api_router

class AppCreator:
    def __init__(self):
        # set app default
        self.app = FastAPI(
            title="Complaints API",
            openapi_url=f"/api/openapi.json",
            version="0.0.1",
        )

        # set cors
        self.app.add_middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

        @self.app.get("/")
        def root():
            return "service is working"

        self.app.include_router(api_router)

if __name__ == "__main__":
    app_creator = AppCreator()
    app = app_creator.app
    uvicorn.run(app, host="0.0.0.0", port=3101)
