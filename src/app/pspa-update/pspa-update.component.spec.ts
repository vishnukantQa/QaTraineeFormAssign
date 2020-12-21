import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { PspaService } from './../services/pspa.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PspaUpdateComponent } from './pspa-update.component';

describe('PspaUpdateComponent', () => {
  let component: PspaUpdateComponent;
  let fixture: ComponentFixture<PspaUpdateComponent>;

  beforeEach(() => {
    const storeStub = () => ({
      dispatch: arg => ({}),
      pipe: arg => ({ subscribe: f => f({}) })
    });
    const pspaServiceStub = () => ({
      getById: id => ({ subscribe: f => f({}) })
    });
    const formBuilderStub = () => ({ group: object => ({}) });
    const activatedRouteStub = () => ({ params: { subscribe: f => f({}) } });
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PspaUpdateComponent],
      imports:[ReactiveFormsModule],
      providers: [
        { provide: Store, useFactory: storeStub },
        { provide: PspaService, useFactory: pspaServiceStub },
        // { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(PspaUpdateComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const pspaServiceStub: PspaService = fixture.debugElement.injector.get(
        PspaService
      );
      spyOn(pspaServiceStub, 'getById').and.callThrough();
      component.ngOnInit();
      expect(pspaServiceStub.getById).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('makes expected calls', () => {
      const storeStub: Store = fixture.debugElement.injector.get(Store);
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(storeStub, 'dispatch').and.callThrough();
      spyOn(storeStub, 'pipe').and.callThrough();
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.onSubmit();
      expect(storeStub.dispatch).toHaveBeenCalled();
      expect(storeStub.pipe).toHaveBeenCalled();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
});
