import { UsersActions, LoadUserss, UsersActionTypes } from './users.actions';
import { Users } from './common/Users';
import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';


export const usersFeatureKey = 'userState';

export interface State extends EntityState<Users> {

  users: Users[],
  error: string

}



export const customerAdapter: EntityAdapter<Users> = createEntityAdapter<
  Users
>();


export const defaultCustomer = {
  users: [],
  error: ''
};

export const initialState=customerAdapter.getInitialState(defaultCustomer);

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

    case UsersActionTypes.UpdateUserSuccess:
      {
    return customerAdapter.updateOne(action.payload, state)
      }

    case UsersActionTypes.UpdateUserFailure:
      return {
        ...state,
        users: [],
        error: action.payload.error

      }

      

    default:
    return state;
    
  }
}
