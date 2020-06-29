import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToken } from "../../redux/auth/auth.selectors";
import { LogOut } from "../../redux/auth/auth.actions";
import { setAlert } from "../../redux/alert/alert.actions";

const Navbar = ({ token, logOut, setAlert }) => {
	const handleClick = () => {
		logOut();
		setAlert("Logged out successfully", "success");
	};

	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">
					<i className="fas fa-code"></i> DevConnector
				</Link>
			</h1>
			<ul>
				<li>
					<Link to="/">Developers</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					{token ? (
						<div className="log-out" onClick={handleClick}>
							Logout
						</div>
					) : (
						<Link to="/login">Login</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

const dispatchToProps = (dispatch) => ({
	logOut: () => dispatch(LogOut()),
	setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType)),
});

const stateToProps = createStructuredSelector({
	token: selectToken,
});

export default connect(stateToProps, dispatchToProps)(Navbar);
