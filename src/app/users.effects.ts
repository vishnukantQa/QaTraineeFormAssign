import { PspaService } from './services/pspa.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userAction from './users.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';




@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private pspaService: PspaService
  ) { }

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userAction.UsersActionTypes.LoadUserss),
    mergeMap(
      action => this.pspaService.getAll().pipe(
        map(users => (
          new userAction.LoadUserssSuccess({ data: users })
        )),
        catchError(err => of(new userAction.LoadUserssFailure({ error: err })))
      )
    )
  )
}
