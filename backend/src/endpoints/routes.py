from fastapi import APIRouter
from backend.src.endpoints.complaints import router as complaints_router

app = APIRouter()
router_list = [complaints_router]

for router in router_list:
    app.include_router(router)