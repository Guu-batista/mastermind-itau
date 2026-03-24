import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { GameService, StartGameResponse, GuessResponse } from './game.service';
import { API_BASE_URL } from '../api/api.tokens';

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

describe('GameService', () => {
  let service: GameService;
  let httpMock: { post: jasmine.Spy };

  beforeEach(() => {
    httpMock = { post: jasmine.createSpy() };

    TestBed.configureTestingModule({
      providers: [
        GameService,
        { provide: HttpClient, useValue: httpMock },
        { provide: API_BASE_URL, useValue: 'http://localhost:8000' },
      ],
    });

    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // start()
  describe('start', () => {
    it('should call POST /games/start', () => {
      httpMock.post.and.returnValue(of(mockStartResponse));
      service.start().subscribe();
      expect(httpMock.post).toHaveBeenCalledWith('http://localhost:8000/games/start', {});
    });

    it('should return StartGameResponse', () => {
      httpMock.post.and.returnValue(of(mockStartResponse));
      let result: StartGameResponse | undefined;
      service.start().subscribe((res) => (result = res));
      expect(result).toEqual(mockStartResponse);
    });
  });

  // guess()
  describe('guess', () => {
    it('should call POST /games/:code/guess with correct body', () => {
      httpMock.post.and.returnValue(of(mockGuessResponse));
      service.guess('ABC123', ['A', 'B', 'C', 'D']).subscribe();
      expect(httpMock.post).toHaveBeenCalledWith(
        'http://localhost:8000/games/ABC123/guess',
        { guess: ['A', 'B', 'C', 'D'] }
      );
    });

    it('should return GuessResponse', () => {
      httpMock.post.and.returnValue(of(mockGuessResponse));
      let result: GuessResponse | undefined;
      service.guess('ABC123', ['A', 'B', 'C', 'D']).subscribe((res) => (result = res));
      expect(result).toEqual(mockGuessResponse);
    });

    it('should use the correct game code in the URL', () => {
      httpMock.post.and.returnValue(of(mockGuessResponse));
      service.guess('XYZ999', ['A', 'A', 'A', 'A']).subscribe();
      expect(httpMock.post).toHaveBeenCalledWith(
        'http://localhost:8000/games/XYZ999/guess',
        jasmine.any(Object)
      );
    });
  });
});