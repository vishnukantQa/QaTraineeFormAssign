import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudService } from './../../services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const crudServiceStub = () => ({
      getById: id => ({ subscribe: f => f({}) }),
      update: (id, arg1) => ({ subscribe: f => f({}) })
    });
    const activatedRouteStub = () => ({ params: { subscribe: f => f({}) } });
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UpdateComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: CrudService, useFactory: crudServiceStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const crudServiceStub: CrudService = fixture.debugElement.injector.get(
        CrudService
      );
      spyOn(crudServiceStub, 'getById').and.callThrough();
      component.ngOnInit();
      expect(crudServiceStub.getById).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('makes expected calls', () => {
      const crudServiceStub: CrudService = fixture.debugElement.injector.get(
        CrudService
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(crudServiceStub, 'update').and.callThrough();
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.onSubmit();
      expect(crudServiceStub.update).toHaveBeenCalled();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
});
