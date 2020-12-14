import { TestBed } from '@angular/core/testing';
import { PspaService } from './services/pspa.service';
import { Actions } from '@ngrx/effects';
import { UsersEffects } from './users.effects';

describe('UsersEffects', () => {
  let service: UsersEffects;

  beforeEach(() => {
    const pspaServiceStub = () => ({});
    const actionsStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        UsersEffects,
        { provide: PspaService, useFactory: pspaServiceStub },
        { provide: Actions, useFactory: actionsStub }
      ]
    });
    service = TestBed.inject(UsersEffects);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
