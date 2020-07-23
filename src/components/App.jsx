import React, { useEffect } from "react";
import "./../styles.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <>
      <LoadingBar />
      <div className="container">
        <Router>
          <Nav />
          {props.loading ? (
            <>
              <Route path="/" exact component={Dashboard} />
              <Route path="/tweet/:id" component={TweetPage} />
              <Route path="/new" component={NewTweet} />
            </>
          ) : null}
        </Router>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.authedUser !== null
  };
}

export default connect(mapStateToProps)(App);
