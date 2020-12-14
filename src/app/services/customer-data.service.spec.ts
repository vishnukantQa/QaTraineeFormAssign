import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { CustomerDataService } from './customer-data.service';

describe('CustomerDataService', () => {
  let service: CustomerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerDataService]
    });
    service = TestBed.inject(CustomerDataService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getPostData', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getPostData().subscribe(res => {
        expect(res).toEqual(res);
      });
      const req = httpTestingController.expectOne(
        'https://jsonplaceholder.typicode.com/posts'
      );
      expect(req.request.method).toEqual('GET');
      req.flush('get');
      httpTestingController.verify();
    });
  });
});
