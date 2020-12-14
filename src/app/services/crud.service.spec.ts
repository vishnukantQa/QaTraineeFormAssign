import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(() => {
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CrudService, { provide: Router, useFactory: routerStub }]
    });
    service = TestBed.inject(CrudService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getAll().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
