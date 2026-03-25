import os
import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient


@pytest.fixture(scope="session")
def client() -> TestClient:
    repo_root = Path(__file__).resolve().parents[1]
    if str(repo_root) not in sys.path:
        sys.path.insert(0, str(repo_root))

    os.environ["DATABASE_URL"] = "sqlite+pysqlite:////tmp/mastermind_test.db"
    os.environ["JWT_SECRET"] = "test_secret"
    os.environ["JWT_ALG"] = "HS256"
    os.environ["ACCESS_TOKEN_EXPIRE_MINUTES"] = "120"

    db_path = Path("/tmp/mastermind_test.db")
    if db_path.exists():
        db_path.unlink()

    from app.main import create_app

    app = create_app()
    with TestClient(app) as c:
        yield c


def register_and_login(client, username="alice", password="secret123", email=None):
    email = email or f"{username}@example.com"
    client.post("/auth/register", json={"username": username, "email": email, "password": password})
    r = client.post("/auth/login", json={"username_or_email": username, "password": password})
    token = r.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}


def start_game(client, headers):
    r = client.post("/games/start", headers=headers)
    assert r.status_code == 200
    return r.json()["game_code"]