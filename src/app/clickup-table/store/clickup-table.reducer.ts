import { Action, createReducer, on } from '@ngrx/store';
import * as ClickupTableActions from './clickup-table.actions';
import { User } from '../interface/user.interface';

export interface State {
  users: Array<User>;
  allUsers: Array<User>;
}

export const initialState: State = {
  users: [],
  allUsers: []
};

const clickupTableReducer = createReducer(
  initialState,
   on(ClickupTableActions.getUserListSuccess, (state, {users}) => ({ ...state, users, allUsers: users })),
   on(ClickupTableActions.searchUser, 
    (state, { searchText, column }) => {
      const updUserList = searchText ? state.allUsers.filter((item) => !!item[column].toUpperCase().includes(searchText.toUpperCase())) : state.allUsers;
      return { 
        ...state, 
        users: updUserList
      }
    })
);

export function reducer(state: State | undefined, action: Action) {
  return clickupTableReducer(state, action);
}