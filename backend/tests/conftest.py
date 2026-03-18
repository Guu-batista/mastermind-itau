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

    # Criando variaveis ambiente de teste
    os.environ["DATABASE_URL"] = "sqlite+pysqlite:////tmp/mastermind_test.db"
    os.environ["JWT_SECRET"] = "test_secret"
    os.environ["JWT_ALG"] = "HS256"
    os.environ["ACCESS_TOKEN_EXPIRE_MINUTES"] = "120"

    from app.main import create_app  # noqa: WPS433

    app = create_app()
    with TestClient(app) as c:
        yield c

