from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.api.routes.auth import router as auth_router
from app.api.routes.game import router as game_router
from app.api.routes.ranking import router as ranking_router
from app.core.config import settings
from app.core.db import Base, engine
from app import models


def create_app() -> FastAPI:
    app = FastAPI(title="Mastermind API", version="0.1.0")

    origins = [o.strip() for o in settings.cors_origins.split(",") if o.strip()]
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins or ["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(_request: Request, exc: RequestValidationError):
        return JSONResponse(
            status_code=400,
            content={
                "detail": "Dados inválidos.",
                "errors": exc.errors(),
            },
        )

    @app.exception_handler(Exception)
    async def unhandled_exception_handler(_request: Request, _exc: Exception):
        return JSONResponse(
            status_code=500,
            content={"detail": "Erro"},
        )

    app.include_router(auth_router)
    app.include_router(game_router)
    app.include_router(ranking_router)

    @app.get("/health", tags=["health"])
    def health():
        return {"status": "ok"}

    @app.on_event("startup")
    def _startup():
        Base.metadata.create_all(bind=engine)

    return app


app = create_app()

