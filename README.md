# Mastermind Itaú

Implementação web do clássico jogo Mastermind, desenvolvida como case técnico para a vaga de Engenheiro Full-Stack Jr no Itaú.

O projeto é uma versão web funcional do Mastermind, onde o usuário tenta adivinhar uma combinação de letras gerada aleatoriamente pelo backend. A cada tentativa, o sistema retorna quantas posições estão corretas, sem revelar quais são.

- **Backend**: Python com FastAPI 
- **Frontend**: Angular 21 com standalone components 
- **Banco de dados**: PostgreSQL 
- **Autenticação**: JWT com interceptor HTTP 
- **Docker**:

---

## Estrutura do Projeto

```
mastermind-itau/
├── backend/          # API Python (FastAPI)
├── frontend/         # SPA Angular 21
├── .env.example      # Variáveis de ambiente necessárias
├── docker-compose.yml
└── README.md
```

---

## Pré-requisitos

### Para rodar com Docker
- [Docker](https://www.docker.com/) >= 24
- [Docker Compose](https://docs.docker.com/compose/) >= 2

### Para rodar manualmente
- **Backend**: Python >= 3.12, pip
- **Frontend**: Node.js >= 20, npm >= 10, Angular CLI >= 21
- **Banco**: PostgreSQL >= 15

---

## Variáveis de Ambiente

Copie o arquivo de exemplo e preencha com seus valores:

```bash
cp .env.example .env
```

| Variável | Descrição | Exemplo |
|---|---|---|
| `DATABASE_URL` | URL de conexão com o banco | `postgresql://user:pass@localhost:5432/mastermind` |
| `JWT_SECRET` | Chave secreta para JWT | `sua-chave-secreta-aqui` |
| `JWT_ALG` | Algoritmo do JWT | `HS256` |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | Expiração do token em minutos | `60` |
| `CORS_ORIGINS` | Origens permitidas pelo CORS | `http://localhost:4200` |

---

## Rodando com Docker 

```bash
# 1. Clone o repositório
git clone https://github.com/Guu-batista/mastermind-itau.git
cd mastermind-itau

# 2. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com seus valores

# 3. Suba todos os serviços
docker-compose up --build
```
- **Frontend**: http://localhost:4200
- **Backend/API**: http://localhost:8000
- **Documentação da API**: http://localhost:8000/docs

---

## Rodando o Backend Manualmente

```bash
# 1. Entre na pasta do backend
cd backend

# 2. Crie e ative o ambiente virtual
python -m venv venv
source venv/bin/activate      # Linux/Mac
venv\Scripts\activate         # Windows

# 3. Instale as dependências
pip install -r requirements.txt

# 4. Configure as variáveis de ambiente
cp ../.env.example .env
# Edite o .env com seus valores

# 5. Inicie o servidor
uvicorn app.main:app --reload --port 8000
```
A API estará disponível em: http://localhost:8000
Documentação Swagger: http://localhost:8000/docs

### Rodando os testes do backend

```bash
cd backend
python -m pytest tests/ -v
```
Ou via Docker:

```bash
docker-compose exec backend python -m pytest tests/ -v
```
---

## Rodando o Frontend Manualmente

```bash
# 1. Entre na pasta do frontend
cd frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
```
Disponível em: http://localhost:4200

### Rodando os testes do frontend

```bash
cd frontend
npm test
```
---

## Como Jogar

1. **Cadastre-se** ou faça login com suas credenciais
2. No **Dashboard**, clique em "Novo Jogo"
3. Uma combinação secreta de letras é gerada pelo backend (você não a vê)
4. **Selecione as letras** em cada célula da linha atual
5. Clique em **Submeter** para enviar sua tentativa
6. O feedback mostra **quantas posições estão corretas**
7. Você tem até **10 tentativas** para adivinhar a combinação
8. Ao terminar, sua pontuação é salva e aparece no **Ranking**

---

## Arquitetura

### Backend
```
backend/
├── app/
│   ├── api/
│   │   └── routes/    # Rotas e endpoints HTTP
│   ├── core/          # Configuração, banco e segurança
│   ├── models/        # Modelos do banco (SQLAlchemy)
│   ├── repositories/  # Acesso ao banco de dados
│   ├── schemas/       # Schemas de validação (Pydantic)
│   └── services/      # Regras de negócio
├── tests/             # Testes unitários
├── Dockerfile
├── main.py
└── requirements.txt
```

### Frontend
```
frontend/src/app/
├── core/
│   ├── auth/      # AuthService, AuthGuard, Interceptor
│   ├── game/      # GameService
│   └── api/       # Tokens de configuração da API
└── features/
    ├── login/     # Tela de login
    ├── register/  # Tela de cadastro
    ├── shell/     # Layout principal com navegação
    ├── dashboard/ # Menu principal
    ├── game/      # Tela do jogo
    └── ranking/   # Ranking de jogadores
```

---

## Requisitos Atendidos

### Funcionais
- [x] Tela de login com validação de formulário
- [x] Tela de cadastro
- [x] Redirecionamento após login bem-sucedido
- [x] Mensagem de erro amigável em credenciais inválidas
- [x] Logout com redirecionamento para login
- [x] Registro único por usuário com histórico de partidas
- [x] Dashboard com menu de navegação
- [x] Tela do jogo com matriz visual
- [x] Feedback visual a cada tentativa
- [x] Máximo de 10 tentativas por partida
- [x] Tela de ranking ordenado por desempenho

### Não Funcionais
- [x] Estrutura em camadas (Controller → Service → Repository)
- [x] Validação de inputs com mensagens padronizadas
- [x] Tratamento global de exceções
- [x] Documentação da API via Swagger
- [x] Componentização adequada no Angular
- [x] Services para comunicação com a API
- [x] Tratamento de erros com feedback visual
- [x] Testes unitários no frontend (Jasmine/Karma)
- [x] Testes unitários no backend (pytest)
- [x] Ambiente configurável com Docker
- [x] Guia de execução neste README

---

## Cobertura de Testes

### Backend (pytest) — 33 testes

| Arquivo | Testes |
|---|---|
| `test_health.py` | 1 |
| `test_auth.py` | 14 |
| `test_game.py` | 15 |
| `test_ranking.py` | 3 |
| **Total** | **33 testes** |

### Frontend (Jasmine/Karma) — 87 testes

| Arquivo | Testes |
|---|---|
| `app.spec.ts` | 2 |
| `auth.service.spec.ts` | 12 |
| `auth.guard.spec.ts` | 3 |
| `auth.interceptor.spec.ts` | 4 |
| `game.service.spec.ts` | 5 |
| `login.page.spec.ts` | 10 |
| `register.page.spec.ts` | 16 |
| `dashboard.page.spec.ts` | 5 |
| `game.page.spec.ts` | 18 |
| `ranking.page.spec.ts` | 8 |
| `shell.page.spec.ts` | 4 |
| **Total** | **87 testes** |

---

## Documentação da API

Com o backend rodando, acesse:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
