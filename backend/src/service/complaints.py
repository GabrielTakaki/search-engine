from http.client import HTTPException
from typing import List, Dict, Optional, Union
from backend.src.repository.complaints import ComplaintsRepository

class ComplaintsService:
    def __init__(self, repository: ComplaintsRepository):
        self.repository = repository

    def paginate_complaints(
        self,
        page: int = 1,
        per_page: int = 10,
        title: Optional[str] = None,
        company: Optional[str] = None,
        decision: Optional[str] = None,
        date: Optional[str] = None,
        category: Optional[str] = None
    ) -> dict[str, Union[list[dict], int]]:
        complaints = self.repository.get_complaints()

        if title:
            complaints = [c for c in complaints if title.lower() in c.get('title', '').lower()]
        if company:
            complaints = [c for c in complaints if company.lower() in c.get('company', '').lower()]
        if decision:
            complaints = [c for c in complaints if decision.lower() in c.get('decision', '').lower()]
        if date:
            complaints = [c for c in complaints if date in c.get('date', '')]
        if category:
            complaints = [c for c in complaints if category.lower() in c.get('category', '').lower()]

        total_items = len(complaints)

        start = (page - 1) * per_page
        end = start + per_page

        paginated_data = complaints[start:end]

        if start >= total_items:
            raise HTTPException(status_code=404, detail="Page not found")

        return {
            "data": paginated_data,
            "total": total_items,
        }