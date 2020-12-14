import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ChildComponent]
    });
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`phone has default value`, () => {
    expect(component.phone).toEqual(0);
  });

  it(`imageUrl has default value`, () => {
    expect(component.imageUrl).toEqual(
      `https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg`
    );
  });
});
