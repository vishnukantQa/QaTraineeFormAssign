import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpectedConditions } from 'protractor';
import {} from 'jasmine';
import {MainComponent} from './main.component'


describe('MainComponent', () => {
  let component= new MainComponent(null);
  let fixture: ComponentFixture<MainComponent>;

  it('on calling open nav, isClicked should be true',() =>{
   
    component.openNav();
    expect(component.isClicked).toBeTrue();
  })

  it('on calling close nav, isClicked should be false',() =>{
    component.closeNav();
    expect(component.isClicked).toBeFalse();
  })




  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
