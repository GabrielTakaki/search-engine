from pydantic import BaseModel
from typing import Optional

class Complaints(BaseModel):
    title: Optional[str] = None
    company: Optional[str] = None
    decision: Optional[str] = None
    date: Optional[str] = None
    category: Optional[str] = None
