import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToken } from "../redux/user/user.selectors";
import Axios from "axios";

export default (Component) => {
	class AuthenticatedComponent extends React.Component {
		shouldNavigateAway = async (token) => {
			if (this.props.match.url === "/login") {
				if (token) {
					this.props.history.push("/");
				}
			} else {
				if (!token) {
					this.props.history.push("/");
				}
			}
		};
		async componentDidMount() {
			this.shouldNavigateAway(this.props.token);
		}

		render() {
			return <Component {...this.props} />;
		}
	}

	const stateToProps = createStructuredSelector({
		token: selectToken,
	});

	return connect(stateToProps, null)(AuthenticatedComponent);
};
