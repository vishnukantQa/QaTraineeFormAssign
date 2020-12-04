import { UsersActions, LoadUserss, UsersActionTypes } from './users.actions';
import { Users } from './common/Users';
import { Action } from '@ngrx/store';


export const usersFeatureKey = 'userState';

export interface State {

  users: Users[],
  error: string

}

export const initialState: State = {

  users: [],
  error: ''

};

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {

    case UsersActionTypes.LoadUserss:
      return {
        ...state
      }

    case UsersActionTypes.LoadUserssSuccess:
      return {
        ...state,
        users: action.payload.data,
        error: ''

      }

    case UsersActionTypes.LoadUserssFailure:
      return {
        ...state,
        users: [],
        error: action.payload.error

      }

    default:
      return state;
  }
}
