import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { GamePage } from './game.page';
import { GameService, StartGameResponse, GuessResponse } from '../../core/game/game.service';

const mockStartResponse: StartGameResponse = {
  game_code: 'ABC123',
  max_attempts: 10,
  code_length: 4,
  alphabet: ['A', 'B', 'C', 'D'],
};

const mockGuessResponse: GuessResponse = {
  correct_positions: 2,
  correct_mask: [true, false, true, false],
  attempt_number: 1,
  remaining_attempts: 9,
  status: 'IN_PROGRESS',
  score: 0,
};

describe('GamePage', () => {
  let fixture: ComponentFixture<GamePage>;
  let component: GamePage;
  let gameServiceMock: { start: jasmine.Spy; guess: jasmine.Spy };

  beforeEach(async () => {
    gameServiceMock = {
      start: jasmine.createSpy(),
      guess: jasmine.createSpy(),
    };

    await TestBed.configureTestingModule({
      imports: [GamePage],
      providers: [
        { provide: GameService, useValue: gameServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //  Criação
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //  Estado inicial
  describe('initial state', () => {
    it('should start with default signals', () => {
      expect(component.loading()).toBe(false);
      expect(component.error()).toBeNull();
      expect(component.gameCode()).toBeNull();
      expect(component.showModal()).toBe(false);
      expect(component.status()).toBe('IN_PROGRESS');
      expect(component.score()).toBe(0);
    });

    it('should start with 10 attempts all unsubmitted', () => {
      expect(component.attempts().length).toBe(10);
      expect(component.attempts().every(a => !a.submitted)).toBe(true);
    });

    it('should start with default alphabet ABCD', () => {
      expect(component.alphabet()).toEqual(['A', 'B', 'C', 'D']);
    });

    it('should have currentIndex as 0 initially', () => {
      expect(component.currentIndex()).toBe(0);
    });

    it('should not be finished initially', () => {
      expect(component.isFinished()).toBe(false);
    });
  });

  //  newGame
  describe('newGame', () => {
    it('should call games.start', () => {
      gameServiceMock.start.and.returnValue(of(mockStartResponse));
      component.newGame();
      expect(gameServiceMock.start).toHaveBeenCalled();
    });

    it('should set gameCode after start', () => {
      gameServiceMock.start.and.returnValue(of(mockStartResponse));
      component.newGame();
      expect(component.gameCode()).toBe('ABC123');
    });

    it('should set attempts based on max_attempts and code_length', () => {
      gameServiceMock.start.and.returnValue(of(mockStartResponse));
      component.newGame();
      expect(component.attempts().length).toBe(10);
      expect(component.attempts()[0].guess.length).toBe(4);
    });

    it('should reset status and score', () => {
      gameServiceMock.start.and.returnValue(of(mockStartResponse));
      component.newGame();
      expect(component.status()).toBe('IN_PROGRESS');
      expect(component.score()).toBe(0);
    });

    it('should stop loading after start', () => {
      gameServiceMock.start.and.returnValue(of(mockStartResponse));
      component.newGame();
      expect(component.loading()).toBe(false);
    });

    it('should set error message on start failure', () => {
      gameServiceMock.start.and.returnValue(
        throwError(() => ({ error: { detail: 'Servidor indisponível.' } }))
      );
      component.newGame();
      expect(component.error()).toBe('Servidor indisponível.');
    });

    it('should set fallback error when API has no detail', () => {
      gameServiceMock.start.and.returnValue(throwError(() => ({})));
      component.newGame();
      expect(component.error()).toBe('Não foi possível iniciar a partida.');
    });

    it('should stop loading on start failure', () => {
      gameServiceMock.start.and.returnValue(throwError(() => ({})));
      component.newGame();
      expect(component.loading()).toBe(false);
    });
  });

  //  setCell
  describe('setCell', () => {
    it('should update cell value at given row and column', () => {
      component.setCell(0, 1, 'C');
      expect(component.attempts()[0].guess[1]).toBe('C');
    });

    it('should not affect other cells', () => {
      component.setCell(0, 1, 'C');
      expect(component.attempts()[0].guess[0]).toBe('A');
      expect(component.attempts()[0].guess[2]).toBe('A');
    });

    it('should do nothing if row does not exist', () => {
      const before = component.attempts().slice();
      component.setCell(99, 0, 'C');
      expect(component.attempts()).toEqual(before);
    });
  });

  //  submit
  describe('submit', () => {
    beforeEach(() => {
      gameServiceMock.start.and.returnValue(of(mockStartResponse));
      component.newGame();
    });

    it('should call games.guess with correct arguments', () => {
      gameServiceMock.guess.and.returnValue(of(mockGuessResponse));
      component.submit();
      expect(gameServiceMock.guess).toHaveBeenCalledWith(
        'ABC123',
        component.attempts()[0].guess
      );
    });

    it('should mark attempt as submitted', () => {
      gameServiceMock.guess.and.returnValue(of(mockGuessResponse));
      component.submit();
      expect(component.attempts()[0].submitted).toBe(true);
    });

    it('should update correct_positions and correct_mask', () => {
      gameServiceMock.guess.and.returnValue(of(mockGuessResponse));
      component.submit();
      expect(component.attempts()[0].correct_positions).toBe(2);
      expect(component.attempts()[0].correct_mask).toEqual([true, false, true, false]);
    });

    it('should advance currentIndex after submit', () => {
      gameServiceMock.guess.and.returnValue(of(mockGuessResponse));
      component.submit();
      expect(component.currentIndex()).toBe(1);
    });

    it('should show modal when game is finished', () => {
      gameServiceMock.guess.and.returnValue(of({ ...mockGuessResponse, status: 'WON' }));
      component.submit();
      expect(component.showModal()).toBe(true);
    });

    it('should not show modal when game is still in progress', () => {
      gameServiceMock.guess.and.returnValue(of(mockGuessResponse));
      component.submit();
      expect(component.showModal()).toBe(false);
    });

    it('should update status and score after guess', () => {
      gameServiceMock.guess.and.returnValue(of({ ...mockGuessResponse, status: 'WON', score: 150 }));
      component.submit();
      expect(component.status()).toBe('WON');
      expect(component.score()).toBe(150);
    });

    it('should set error on guess failure', () => {
      gameServiceMock.guess.and.returnValue(
        throwError(() => ({ error: { detail: 'Tentativa inválida.' } }))
      );
      component.submit();
      expect(component.error()).toBe('Tentativa inválida.');
    });

    it('should set fallback error on guess failure', () => {
      gameServiceMock.guess.and.returnValue(throwError(() => ({})));
      component.submit();
      expect(component.error()).toBe('Erro: Tentativa inválida');
    });

    it('should stop loading on guess failure', () => {
      gameServiceMock.guess.and.returnValue(throwError(() => ({})));
      component.submit();
      expect(component.loading()).toBe(false);
    });

    it('should do nothing if no gameCode', () => {
      component.gameCode.set(null);
      component.submit();
      expect(gameServiceMock.guess).not.toHaveBeenCalled();
    });
  });
});