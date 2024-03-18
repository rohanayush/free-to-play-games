import { createAction, props } from '@ngrx/store';

// Example actions for the home section
export const loadHomeData = createAction('[Home] Load Data');
export const loadHomeDataSuccess = createAction(
  '[Home] Load Data Success',
  props<{ data: any }>()
);
export const loadHomeDataFailure = createAction(
  '[Home] Load Data Failure',
  props<{ error: any }>()
);

export const BoringActions = {
  loadHomeData,
  loadHomeDataSuccess,
  loadHomeDataFailure,
};
