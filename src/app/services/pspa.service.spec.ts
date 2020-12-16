import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { PspaService } from './pspa.service';


describe('PspaService', () => {
  let service: PspaService;
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PspaService]
    });
    service = TestBed.inject(PspaService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`page has default value`, () => {
    expect(service.page).toEqual(1);
  });

  it(`limit has default value`, () => {
    expect(service.limit).toEqual(5);
  });

  describe('getAll', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getAll().subscribe(res => {
        expect(res).toEqual(res);
      });
      const req = httpTestingController.expectOne(`${service.apiServer}?page=${service.page}&limit=${service.limit}`);
      expect(req.request.method).toEqual('GET');
      req.flush({
        status: 400, 
        statusText: 'Bad Request'
      });
      httpTestingController.verify();
    });
  });
});
