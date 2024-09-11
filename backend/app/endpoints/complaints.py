from fastapi import APIRouter
from fastapi.params import Query, Depends

from backend.app.model.complaints import Complaints as ComplaintsModel
from backend.app.repository.complaints import ComplaintsRepository
from backend.app.service.complaints import ComplaintsService

repository = ComplaintsRepository()
service = ComplaintsService(repository)

router = APIRouter()

@router.get("/complaints")
def get_complaints(
        page: int = Query(1, ge=1),
        per_page: int = Query(10, ge=1),
        sort_by: str = None,
        filters: ComplaintsModel = Depends()
):
    complaints = service.paginate(page, per_page, sort_by, filters)

    return complaints
