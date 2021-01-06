import { createSelector } from '@ngrx/store';

export const selectFeature = (state) => state.clickupState;

export const selectUsers = createSelector(
  selectFeature,
  (state) => state.users
);