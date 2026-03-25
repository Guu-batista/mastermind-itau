from tests.conftest import register_and_login, start_game

def test_ranking_returns_list(client):
    r = client.get("/ranking")
    assert r.status_code == 200
    assert isinstance(r.json(), list)

def test_ranking_has_correct_fields(client):
    headers = register_and_login(client, "rankuser")
    game_code = start_game(client, headers)
    client.post(f"/games/{game_code}/guess", headers=headers, json={"guess": ["A", "A", "A", "A"]})
    r = client.get("/ranking")
    assert r.status_code == 200
    if r.json():
        item = r.json()[0]
        assert "username" in item
        assert "best_score" in item

def test_ranking_is_ordered_by_score(client):
    r = client.get("/ranking")
    scores = [item["best_score"] for item in r.json()]
    assert scores == sorted(scores, reverse=True)