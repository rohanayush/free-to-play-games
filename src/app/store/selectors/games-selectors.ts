import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from '../../state/appstate';

export const selectHomeFeatureState = createFeatureSelector<HomeState>('home');
export const selectHomeData = createSelector(
  selectHomeFeatureState,
  (state) => {
    console.log('Here',state.data);
    return state;
  }
);

export const selectHomeLoading = createSelector(
  selectHomeFeatureState,
  (state) => state.loading
);

export const selectHomeError = createSelector(
  selectHomeFeatureState,
  (state) => state.error
);
