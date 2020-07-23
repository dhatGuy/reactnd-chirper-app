import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export const receiveTweets = tweets => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
};

export const addTweet = tweet => {
  return {
    type: ADD_TWEET,
    tweet
  };
};

const toggleTweet = ({ authedUser, id, hasLiked }) => {
  return {
    type: TOGGLE_TWEET,
    authedUser,
    id,
    hasLiked
  };
};

export function handleToggleTweet(info) {
  return async dispatch => {
    dispatch(toggleTweet(info));

    try {
      return saveLikeToggle(info);
    } catch (error) {
      console.warn("There was error: ", error);
      dispatch(toggleTweet(info));
      alert("There was an error liking the tweet");
    }
  };
}

export function handleAddTweet(text, replyingTo) {
  return async (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    const tweet = await saveTweet({
      text,
      author: authedUser,
      replyingTo
    });
    dispatch(addTweet(tweet));
    return dispatch(hideLoading());
  };
}
