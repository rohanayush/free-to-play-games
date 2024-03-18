import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import {
  loadHomeData,
  loadHomeDataSuccess,
  loadHomeDataFailure,
} from '../actions/game-actions';
import { HomeState } from '../../state/appstate';

export const initialState: HomeState = {
  data: null,
  loading: true,
  error: null,
};

export const homeReducer = createReducer(
  initialState,
  on(loadHomeData, (state) => ({ ...state, loading: true })),
  on(loadHomeDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(loadHomeDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
