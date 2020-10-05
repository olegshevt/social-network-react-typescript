import { createSelector } from 'reselect';
import { TweetsState, LoadingState, AddFormState } from './contracts/state';
import { RootState } from '../../store';

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState;
export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);

export const selectAddFormState = (state: RootState): AddFormState =>
  selectTweets(state).addFormState;
