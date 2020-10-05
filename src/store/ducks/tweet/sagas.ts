import { call, put, takeLatest } from 'redux-saga/effects';
import { setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreators';
import { TweetsApi } from '../../../services/tweetsApi';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
