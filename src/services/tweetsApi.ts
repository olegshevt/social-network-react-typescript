import axios from 'axios';
import { TweetsState, Tweet } from '../store/ducks/tweets/contracts/state';

export const TweetsApi = {
  fetchTweets(): Promise<TweetsState['items']> {
    return axios.get('/tweets').then(({ data }) => data);
  },
  addTweet(payload: Tweet): Promise<Tweet> {
    return axios.post('/tweets', payload).then(({ data }) => data);
  },
};
