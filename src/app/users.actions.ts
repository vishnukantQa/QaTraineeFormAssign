import { Action } from '@ngrx/store';
import { Users } from './common/Users';

export enum UsersActionTypes {
  LoadUserss = '[Users] Load Userss',
  LoadUserssSuccess = '[Users] Load Userss Success',
  LoadUserssFailure = '[Users] Load Userss Failure',
}

export class LoadUserss implements Action {
  readonly type = UsersActionTypes.LoadUserss;
}

export class LoadUserssSuccess implements Action {
  readonly type = UsersActionTypes.LoadUserssSuccess;
  constructor(public payload: { data: Users[] }) { }
}

export class LoadUserssFailure implements Action {
  readonly type = UsersActionTypes.LoadUserssFailure;
  constructor(public payload: { error: string }) { }
}

export type UsersActions = LoadUserss | LoadUserssSuccess | LoadUserssFailure;

