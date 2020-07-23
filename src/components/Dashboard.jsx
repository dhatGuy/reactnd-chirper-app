import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

const Dashboard = props => {
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {props.tweetIds.map(id => (
          <li key={id}>
            <div><Tweet id={id}/></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    tweetIds: Object.keys(state.tweets).sort(
      (a, b) => state.tweets[b].timestamp - state.tweets[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
