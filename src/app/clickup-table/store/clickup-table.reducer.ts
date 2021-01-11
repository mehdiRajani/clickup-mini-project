import { Action, createReducer, on } from '@ngrx/store';
import * as ClickupTableActions from './clickup-table.actions';
import { User } from '../interface/user.interface';

export interface State {
  users: Array<User>;
}

export const initialState: State = {
  users: [],
};

const clickupTableReducer = createReducer(
  initialState,
  on(ClickupTableActions.getUserListSuccess, (state, {users}) => ({ ...state, users})),
);

export function reducer(state: State | undefined, action: Action) {
  return clickupTableReducer(state, action);
}