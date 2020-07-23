import React from "react";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

const TweetPage = ({ match }) => {
  const users = useSelector(state => state.users);
  const tweets = useSelector(state => state.tweets);
  const authedUser = useSelector(state => state.authedUser);
  const { id } = match.params;
  const replies = !tweets[id]
    ? []
    : tweets[id].replies.sort(
        (a, b) => tweets[b].timestamp - tweets[a].timestamp
      );

  return (
    <div>
      <Tweet id={id} />
      <NewTweet id={id} />
      {replies.length !== 0 && <h3 className="center">Replies</h3>}
      <ul>
        {replies.map(replyId => (
          <li key={replyId}>
            <Tweet id={replyId} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetPage;
