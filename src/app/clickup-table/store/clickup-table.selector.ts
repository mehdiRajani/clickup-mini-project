import { createSelector } from '@ngrx/store';
import { arraysAreNotAllowedMsg } from '@ngrx/store/src/models';
import { User } from '../interface/user.interface';

export const selectFeature = (state) => state.clickupState;

export const selectUsers = createSelector(
  selectFeature,
  (state) => state.users
);
