import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "68897190216-99pkc6kmedto3anqs8ht39s534bvj9c0.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClicked = () => {
    this.auth.signIn();
  };
  onSignOutClicked = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClicked}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignInClicked}
          className="ui green google button"
        >
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userId) => dispatch(signIn(userId)),
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
