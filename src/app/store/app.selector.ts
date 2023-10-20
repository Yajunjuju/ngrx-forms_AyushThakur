import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataInterface } from './app.reducer';

export const selectChildMessage = createFeatureSelector<DataInterface>('childMessage');

export const messageContainerSelector = createSelector(selectChildMessage, (state) =>
  state.message_container
);

export const messageSelector = createSelector(messageContainerSelector, (state) =>{
  return state.message
});

export const formSelector = createSelector(selectChildMessage, (s) => s.formState);
