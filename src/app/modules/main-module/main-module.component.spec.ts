import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MainModuleComponent } from './main-module.component';

describe('MainModuleComponent', () => {
  let component: MainModuleComponent;
  let fixture: ComponentFixture<MainModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MainModuleComponent]
    });
    fixture = TestBed.createComponent(MainModuleComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
