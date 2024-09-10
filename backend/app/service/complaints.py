from http.client import HTTPException
from typing import Optional, Union
from backend.app.repository.complaints import ComplaintsRepository
from datetime import datetime

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
            complaints = [c for c in complaints if c.get('company', '').lower() == company.lower()]
        if decision:
            complaints = [c for c in complaints if c.get('decision', '').lower() == decision.lower()]
        if date:
            date_obj = datetime.fromisoformat(date)
            complaints = [c for c in complaints if datetime.fromisoformat(c.get('date', '')) == date_obj]
        if category:
            complaints = [c for c in complaints if c.get('category', '').lower() == category.lower()]

        total_items = len(complaints)

        start = (page - 1) * per_page
        end = start + per_page

        paginated_data = complaints[start:end]

        return {
            "data": paginated_data,
            "total": total_items,
        }