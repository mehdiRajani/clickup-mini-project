import { createAction, props } from '@ngrx/store';
import { User } from '../interface/user.interface';

export const getUserList = createAction(
  '[Clickup table] GetUserList',
);

export const getUserListSuccess = createAction(
  '[Clickup table] GetUserListSuccess',
  props<{ users: Array<User> }>()
);