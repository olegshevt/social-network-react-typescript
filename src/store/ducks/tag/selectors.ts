import { createSelector } from 'reselect';
import { TagsState, LoadingState } from './contracts/state';
import { RootState } from '../../store';

export const selectTags = (state: RootState): TagsState => state.tags;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTags(state).loadingState;
export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);
