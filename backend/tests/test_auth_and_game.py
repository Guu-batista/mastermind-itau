def test_register_login_start_and_guess_flow(client):
    # registrar
    r = client.post(
        "/auth/register",
        json={"username": "alice", "email": "alice@example.com", "password": "secret123"},
    )
    assert r.status_code == 201, r.text

    # login
    r = client.post("/auth/login", json={"username_or_email": "alice", "password": "secret123"})
    assert r.status_code == 200, r.text
    token = r.json()["access_token"]
    assert token

    headers = {"Authorization": f"Bearer {token}"}

    # test user
    r = client.get("/auth/me", headers=headers)
    assert r.status_code == 200, r.text
    assert r.json()["username"] == "alice"

    # start game
    r = client.post("/games/start", headers=headers)
    assert r.status_code == 200, r.text
    game_code = r.json()["game_code"]
    assert game_code

    # Teste de 10 chutes
    status = "IN_PROGRESS"
    last = None
    for _ in range(10):
        r = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
        assert r.status_code == 200, r.text
        last = r.json()
        assert 0 <= last["correct_positions"] <= 4
        assert isinstance(last["correct_mask"], list)
        assert len(last["correct_mask"]) == 4
        status = last["status"]
        if status != "IN_PROGRESS":
            break

    # Tenta 10 rodadas, se nao jogo termina
    assert last is not None
    assert status in {"IN_PROGRESS", "WON", "LOST"}
    if last["attempt_number"] >= 10:
        assert status in {"WON", "LOST"}

