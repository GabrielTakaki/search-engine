from typing import Optional, Union

from backend.app.model.complaints import Complaints as ComplaintsModel
from backend.app.repository.complaints import ComplaintsRepository
from datetime import datetime

class ComplaintsService:
    def __init__(self, repository: ComplaintsRepository):
        self.repository = repository

    def paginate(
        self,
        page: int = 1,
        per_page: int = 10,
        sort_by: Optional[str] = None,
        filters: ComplaintsModel = ComplaintsModel()
    ) -> dict[str, Union[list[dict], int]]:
        complaints = self.repository.get_complaints()

        if filters.title:
            complaints = [c for c in complaints if filters.title.lower() in c.get('title', '').lower()]
        if filters.company:
            complaints = [c for c in complaints if c.get('company', '').lower() == filters.company.lower()]
        if filters.decision:
            complaints = [c for c in complaints if c.get('decision', '').lower() == filters.decision.lower()]
        if filters.date:
            date_obj = datetime.fromisoformat(filters.date)
            complaints = [c for c in complaints if datetime.fromisoformat(c.get('date', '')) == date_obj]
        if filters.category:
            complaints = [c for c in complaints if c.get('category', '').lower() == filters.category.lower()]

        if sort_by:
            if sort_by in ['title', 'company', 'decision', 'category']:
                complaints.sort(key=lambda c: c.get(sort_by, '').lower())
            elif sort_by == 'date':
                complaints.sort(key=lambda c: datetime.fromisoformat(c.get('date', '')), reverse=True)

        total_items = len(complaints)

        start = (page - 1) * per_page
        end = start + per_page

        paginated_data = complaints[start:end]

        return {
            "data": paginated_data,
            "total": total_items,
        }