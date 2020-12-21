import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { UserDetailsService } from './user-details.service';

describe('UserDetailsService', () => {
  let service: UserDetailsService;

  beforeEach(() => {
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    const ngZoneStub = () => ({ run: function0 => ({}) });
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserDetailsService,
        { provide: Router, useFactory: routerStub },
        { provide: NgZone, useFactory: ngZoneStub },
        UserDetailsService
      ]
    });
    service = TestBed.inject(UserDetailsService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const routerStub: Router = TestBed.inject(Router);
      const ngZoneStub: NgZone = TestBed.inject(NgZone);
      spyOn(service, 'clearLocalStorage').and.callThrough();
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      spyOn(ngZoneStub, 'run').and.callThrough();
      service.logout();
      expect(service.clearLocalStorage).toHaveBeenCalled();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
      expect(ngZoneStub.run).toHaveBeenCalled();
    });
  });

  describe('signUp', () => {
    it('makes expected calls', () => {
      const routerStub: Router = TestBed.inject(Router);
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      service.signUp();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
});
