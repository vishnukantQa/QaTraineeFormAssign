import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PspaService } from './../services/pspa.service';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { PSPAComponent } from './pspa.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('PSPAComponent', () => {
  let component: PSPAComponent;
  let fixture: ComponentFixture<PSPAComponent>;

  beforeEach(() => {
    const pspaServiceStub = () => ({
      searchById: id => ({ subscribe: f => f() }),
      searchByName: name => ({ subscribe: f => f() }),
      searchByEmail: email => ({ subscribe: f => f() }),
      limit: {},
      page: {}
    });
    const storeStub = () => ({
      dispatch: arg => ({}),
      pipe: arg => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule,NgxPaginationModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PSPAComponent],
      providers: [
        { provide: PspaService, useFactory: pspaServiceStub },
        { provide: Store, useFactory: storeStub }
      ]
    });
    fixture = TestBed.createComponent(PSPAComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`total has default value`, () => {
    expect(component.total).toEqual(50);
  });

  it(`itemPerPage has default value`, () => {
    expect(component.itemPerPage).toEqual(5);
  });

  it(`pageSizes has default value`, () => {
    expect(component.pageSizes).toEqual([5, 10, 15]);
  });

  it(`currentPage has default value`, () => {
    expect(component.currentPage).toEqual(1);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const storeStub: Store = fixture.debugElement.injector.get(Store);
      spyOn(storeStub, 'dispatch').and.callThrough();
      spyOn(storeStub, 'pipe').and.callThrough();
      component.ngOnInit();
      expect(storeStub.dispatch).toHaveBeenCalled();
      expect(storeStub.pipe).toHaveBeenCalled();
    });
  });

  describe('searchById', () => {
    it('makes expected calls', () => {
      const pspaServiceStub: PspaService = fixture.debugElement.injector.get(
        PspaService
      );
      spyOn(pspaServiceStub, 'searchById').and.callThrough();
      component.searchById();
      expect(pspaServiceStub.searchById).toHaveBeenCalled();
    });
  });

  describe('searchByName', () => {
    it('makes expected calls', () => {
      const pspaServiceStub: PspaService = fixture.debugElement.injector.get(
        PspaService
      );
      spyOn(pspaServiceStub, 'searchByName').and.callThrough();
      component.searchByName();
      expect(pspaServiceStub.searchByName).toHaveBeenCalled();
    });
  });

  describe('searchByEmail', () => {
    it('makes expected calls', () => {
      const pspaServiceStub: PspaService = fixture.debugElement.injector.get(
        PspaService
      );
      spyOn(pspaServiceStub, 'searchByEmail').and.callThrough();
      component.searchByEmail();
      expect(pspaServiceStub.searchByEmail).toHaveBeenCalled();
    });
  });
});
