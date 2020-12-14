import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    const authServiceStub = () => ({ isAuthenticated: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        { provide: Router, useFactory: routerStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    it('makes expected calls', () => {
      const routerStub: Router = TestBed.inject(Router);
      const authServiceStub: AuthService = TestBed.inject(AuthService);
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(authServiceStub, 'isAuthenticated').and.callThrough();
      service.canActivate();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(authServiceStub.isAuthenticated).toHaveBeenCalled();
    });
  });
});
