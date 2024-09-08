from fastapi import APIRouter
from fastapi.params import Query
from backend.src.repository.complaints import ComplaintsRepository
from backend.src.service.complaints import ComplaintsService

repository = ComplaintsRepository()
service = ComplaintsService(repository)

router = APIRouter()

@router.get("/complaints")
def get_complaints(page: int = Query(1, ge=1), per_page: int = Query(10, ge=1), category: str = None, company: str = None, decision: str = None, title: str = None, date: str = None):
    complaints = service.paginate_complaints(page, per_page, title, company, decision, date, category)

    return complaints
