from tests.conftest import register_and_login

# Register

def test_register_success(client):
    r = client.post("/auth/register", json={"username": "bob", "password": "secret123"})
    assert r.status_code == 201

def test_register_with_email(client):
    r = client.post("/auth/register", json={"username": "carol", "email": "carol@example.com", "password": "secret123"})
    assert r.status_code == 201

def test_register_without_email(client):
    r = client.post("/auth/register", json={"username": "dave", "password": "secret123"})
    assert r.status_code == 201

def test_register_duplicate_username(client):
    client.post("/auth/register", json={"username": "dupuser", "password": "secret123"})
    r = client.post("/auth/register", json={"username": "dupuser", "password": "secret123"})
    assert r.status_code == 400
    assert "detail" in r.json()

def test_register_missing_username(client):
    r = client.post("/auth/register", json={"password": "secret123"})
    assert r.status_code == 400

def test_register_missing_password(client):
    r = client.post("/auth/register", json={"username": "nopass"})
    assert r.status_code == 400


# Login

def test_login_with_username(client):
    client.post("/auth/register", json={"username": "loginuser", "password": "secret123"})
    r = client.post("/auth/login", json={"username_or_email": "loginuser", "password": "secret123"})
    assert r.status_code == 200
    assert "access_token" in r.json()

def test_login_with_email(client):
    client.post("/auth/register", json={"username": "emailuser", "email": "emailuser@example.com", "password": "secret123"})
    r = client.post("/auth/login", json={"username_or_email": "emailuser@example.com", "password": "secret123"})
    assert r.status_code == 200
    assert "access_token" in r.json()

def test_login_wrong_password(client):
    client.post("/auth/register", json={"username": "wrongpass", "password": "secret123"})
    r = client.post("/auth/login", json={"username_or_email": "wrongpass", "password": "errada"})
    assert r.status_code == 401

def test_login_nonexistent_user(client):
    r = client.post("/auth/login", json={"username_or_email": "naoexiste", "password": "secret123"})
    assert r.status_code == 401

def test_login_returns_token_type(client):
    client.post("/auth/register", json={"username": "tokenuser", "password": "secret123"})
    r = client.post("/auth/login", json={"username_or_email": "tokenuser", "password": "secret123"})
    assert r.json().get("token_type", "bearer").lower() == "bearer"


# Me 

def test_me_returns_user_data(client):
    headers = register_and_login(client, "meuser")
    r = client.get("/auth/me", headers=headers)
    assert r.status_code == 200
    data = r.json()
    assert data["username"] == "meuser"
    assert "id" in data
    assert "best_score" in data

def test_me_without_token(client):
    r = client.get("/auth/me")
    assert r.status_code == 401

def test_me_with_invalid_token(client):
    r = client.get("/auth/me", headers={"Authorization": "Bearer token_invalido"})
    assert r.status_code == 401