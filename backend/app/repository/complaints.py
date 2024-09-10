import json
import os
from typing import List, Dict

class ComplaintsRepository:
    def __init__(self):
        self.mock_file_path = os.path.join(os.getcwd().split("app")[0], 'mock', 'complaints.json')

    def _load_data(self) -> List[Dict]:
        print(f"Mock file path: {self.mock_file_path}")

        if not os.path.exists(self.mock_file_path):
            raise FileNotFoundError(f"Mock file not found: {self.mock_file_path}")

        try:
            with open(self.mock_file_path, 'r') as file:
                data = json.load(file)
                if not isinstance(data, list):
                    raise ValueError("JSON data is not a list")
                return data
        except json.JSONDecodeError as e:
            raise ValueError(f"Error decoding JSON: {e}")
        except Exception as e:
            raise RuntimeError(f"Unexpected error: {e}")

    def get_complaints(self) -> List[Dict]:
        return self._load_data()