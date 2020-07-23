import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTEHD_ID = "sarah_edo";
export const handleInitialData = () => {
  return async dispatch => {
    dispatch(showLoading());
    const { tweets, users } = await getInitialData();
    dispatch(receiveTweets(tweets));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTEHD_ID));
    dispatch(hideLoading());
  };
};
