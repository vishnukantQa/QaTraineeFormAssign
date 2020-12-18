import { PspaService } from './services/pspa.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userAction from './users.actions';
import { catchError, concatMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Users } from './common/Users';

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

  @Effect()
  updateUsers$:Observable<Action>= this.actions$.pipe(
    ofType(userAction.UsersActionTypes.UpdateUser),
    map((action:userAction.UpdateUser)=>action.payload),
    mergeMap(
      (user:Users)=>this.pspaService.update(user.id,user).pipe(
        map(
          (updateUser:Users)=>
            new userAction.UpdateUserSuccess({
              id:updateUser.id,
              changes:updateUser
            })
        ),
        catchError(err=>of(new userAction.LoadUserssFailure({error:err})))
      )
    )
  )
}
