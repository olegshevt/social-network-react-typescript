import { all } from 'redux-saga/effects';
import { tagsSaga } from './ducks/tag/sagas';
import { tweetsSaga } from './ducks/tweets/sagas';

export default function* rootSaga() {
  yield all([tweetsSaga(), tagsSaga()]);
}
