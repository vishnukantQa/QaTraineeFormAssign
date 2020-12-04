import { State } from './users.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getUserFeatureState=createFeatureSelector<State>('userState');

export const getUsers=createSelector(
    getUserFeatureState,
    state=>state.users
)

export const getError=createSelector(
    getUserFeatureState,
    state=>state.error
)


