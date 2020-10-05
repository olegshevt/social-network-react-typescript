import { createSelector } from 'reselect';
import { TweetsState, LoadingState } from './contracts/state';
import { RootState } from '../../store';

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState;
export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);
