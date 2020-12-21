import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Users } from './common/Users';

export enum UsersActionTypes {
  LoadUserss = '[Users] Load Userss',
  LoadUserssSuccess = '[Users] Load Userss Success',
  LoadUserssFailure = '[Users] Load Userss Failure',
  UpdateUser='[Uses] Update Users',
  UpdateUserSuccess='[Users] Update Users Success',
  UpdateUserFailure='[Users] Update Users Failure',
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

export class UpdateUser implements Action {
  readonly type = UsersActionTypes.UpdateUser;
  constructor(public payload:Users,public id:String){
    payload.id=id.toString();
  }
}

export class UpdateUserSuccess implements Action {
  readonly type = UsersActionTypes.UpdateUserSuccess;
  constructor(public payload:Update<Users>) { }
}

export class UpdateUserFailure implements Action {
  readonly type = UsersActionTypes.UpdateUserFailure;
  constructor(public payload: { error: string }) { }
}



export type UsersActions = 
LoadUserss | 
LoadUserssSuccess | 
LoadUserssFailure |
UpdateUser | 
UpdateUserSuccess |
UpdateUserFailure;


