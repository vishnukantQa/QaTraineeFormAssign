import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from './../../services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const crudServiceStub = () => ({
      getById: id => ({ subscribe: f => f({id:1}) }),
      update: (id, arg1) => ({ subscribe: f => f({
        id:1,
        arg1:{
          id: "1",
          name: "bj",
          salary:"45",
          age:"52",
          profile:"",
        }
      }) })
    });
    const activatedRouteStub = () => ({ params: { subscribe: f => f({}) } });
    const routerStub = () => ({ navigateByUrl: string => ("/main/crud") });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UpdateComponent],
      imports:[ReactiveFormsModule],
      providers: [
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
    it('makes calls to getby id ', () => {
      const crudServiceStub: CrudService = fixture.debugElement.injector.get(
        CrudService
      );
      spyOn(crudServiceStub, 'getById').and.callThrough()
      component.ngOnInit();
      expect(crudServiceStub.getById).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('makes call to navigate by url and update function', () => {
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
