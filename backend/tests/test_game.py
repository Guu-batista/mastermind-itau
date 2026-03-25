from tests.conftest import register_and_login, start_game

# Start

def test_start_game_success(client):
    headers = register_and_login(client, "startuser")
    r = client.post("/games/start", headers=headers)
    assert r.status_code == 200
    assert "game_code" in r.json()
    assert r.json()["game_code"]

def test_start_game_without_token(client):
    r = client.post("/games/start")
    assert r.status_code == 401

def test_start_multiple_games(client):
    headers = register_and_login(client, "multiuser")
    r1 = client.post("/games/start", headers=headers)
    r2 = client.post("/games/start", headers=headers)
    assert r1.status_code == 200
    assert r2.status_code == 200
    assert r1.json()["game_code"] != r2.json()["game_code"]


# Guess

def test_guess_returns_correct_structure(client):
    headers = register_and_login(client, "guessuser")
    game_code = start_game(client, headers)
    r = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
    assert r.status_code == 200
    data = r.json()
    assert "correct_positions" in data
    assert "correct_mask" in data
    assert "attempt_number" in data
    assert "remaining_attempts" in data
    assert "status" in data
    assert "score" in data

def test_guess_correct_positions_range(client):
    headers = register_and_login(client, "rangeuser")
    game_code = start_game(client, headers)
    r = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
    assert 0 <= r.json()["correct_positions"] <= 4

def test_guess_correct_mask_length(client):
    headers = register_and_login(client, "maskuser")
    game_code = start_game(client, headers)
    r = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
    assert len(r.json()["correct_mask"]) == 4

def test_guess_attempt_number_increments(client):
    headers = register_and_login(client, "incrementuser")
    game_code = start_game(client, headers)
    r1 = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
    r2 = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["B", "B", "B", "B"]})
    assert r1.json()["attempt_number"] == 1
    assert r2.json()["attempt_number"] == 2

def test_guess_remaining_attempts_decrements(client):
    headers = register_and_login(client, "remainuser")
    game_code = start_game(client, headers)
    r1 = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
    r2 = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
    assert r2.json()["remaining_attempts"] == r1.json()["remaining_attempts"] - 1

def test_guess_status_is_valid(client):
    headers = register_and_login(client, "statususer")
    game_code = start_game(client, headers)
    r = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
    assert r.json()["status"] in {"IN_PROGRESS", "WON", "LOST"}

def test_guess_invalid_letter(client):
    headers = register_and_login(client, "invaliduser")
    game_code = start_game(client, headers)
    r = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["Z", "Z", "Z", "Z"]})
    assert r.status_code == 400

def test_guess_wrong_length(client):
    headers = register_and_login(client, "lengthuser")
    game_code = start_game(client, headers)
    r = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A"]})
    assert r.status_code == 400

def test_guess_nonexistent_game(client):
    headers = register_and_login(client, "notfounduser")
    r = client.post("/games/codigo-invalido/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
    assert r.status_code == 404

def test_guess_other_users_game(client):
    headers1 = register_and_login(client, "owner")
    headers2 = register_and_login(client, "intruder")
    game_code = start_game(client, headers1)
    r = client.post(f"/games/{game_code}/guess", headers=headers2, json={"guess": ["A", "A", "A", "A"]})
    assert r.status_code == 404

def test_guess_without_token(client):
    headers = register_and_login(client, "notokenguess")
    game_code = start_game(client, headers)
    r = client.post(f"/games/{game_code}/guess", json={"guess": ["A", "A", "A", "A"]})
    assert r.status_code == 401

def test_guess_after_game_finished(client):
    headers = register_and_login(client, "finisheduser")
    game_code = start_game(client, headers)
    for _ in range(10):
        r = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
        if r.json()["status"] != "IN_PROGRESS":
            break
    r = client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
    assert r.status_code == 400