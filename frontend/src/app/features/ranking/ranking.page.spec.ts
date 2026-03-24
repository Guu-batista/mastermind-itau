import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { RankingPage } from './ranking.page';
import { API_BASE_URL } from '../../core/api/api.tokens';

const mockRanking = [
  { username: 'usuario1', best_score: 300 },
  { username: 'usuario2', best_score: 200 },
  { username: 'usuario3', best_score: 100 },
];

describe('RankingPage', () => {
  let fixture: ComponentFixture<RankingPage>;
  let component: RankingPage;
  let httpMock: { get: jasmine.Spy };

  beforeEach(async () => {
    httpMock = { get: jasmine.createSpy() };
    httpMock.get.and.returnValue(of(mockRanking)); // padrão: sucesso

    await TestBed.configureTestingModule({
      imports: [RankingPage],
      providers: [
        { provide: HttpClient, useValue: httpMock },
        { provide: API_BASE_URL, useValue: 'http://localhost:8000' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Criação
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Carregamento automático
  describe('load on init', () => {
    it('should call http.get on construction', () => {
      expect(httpMock.get).toHaveBeenCalledWith('http://localhost:8000/ranking');
    });

    it('should populate rows after load', () => {
      expect(component.rows()).toEqual(mockRanking);
    });

    it('should stop loading after success', () => {
      expect(component.loading()).toBe(false);
    });

    it('should have no error after success', () => {
      expect(component.error()).toBeNull();
    });
  });

  // Estado de loading
  describe('loading state', () => {
    it('should start loading when load is called', () => {
      httpMock.get.and.returnValue(of(mockRanking));
      component.load();
      expect(component.loading()).toBe(false); // já completou pois of() é síncrono
    });
  });

  // Erros
  describe('load with error', () => {
    it('should set error message from API', () => {
      httpMock.get.and.returnValue(
        throwError(() => ({ error: { detail: 'Erro no servidor.' } }))
      );
      component.load();
      expect(component.error()).toBe('Erro no servidor.');
    });

    it('should set fallback error when API has no detail', () => {
      httpMock.get.and.returnValue(throwError(() => ({})));
      component.load();
      expect(component.error()).toBe('Não foi possível carregar o ranking.');
    });

    it('should stop loading on error', () => {
      httpMock.get.and.returnValue(throwError(() => ({})));
      component.load();
      expect(component.loading()).toBe(false);
    });

    it('should clear previous error on new load', () => {
      httpMock.get.and.returnValue(throwError(() => ({})));
      component.load();
      expect(component.error()).toBeTruthy();

      httpMock.get.and.returnValue(of(mockRanking));
      component.load();
      expect(component.error()).toBeNull();
    });
  });

  // Dados
  describe('rows data', () => {
    it('should display rows in correct order', () => {
      expect(component.rows()[0].username).toBe('usuario1');
      expect(component.rows()[0].best_score).toBe(300);
    });

    it('should handle empty ranking list', () => {
      httpMock.get.and.returnValue(of([]));
      component.load();
      expect(component.rows()).toEqual([]);
    });
  });
});