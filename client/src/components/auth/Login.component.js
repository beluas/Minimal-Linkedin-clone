import React, { useState } from "react";
import { connect } from "react-redux";
import { loginPending } from "../../redux/auth/auth.actions";
import { Link } from "react-router-dom";
import Auth from "../Auth.HOComponent";
import PropTypes from "prop-types";

const Login = ({ loginPending }) => {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = loginData;

	const handleChange = (e) => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const loginData = { email, password };

		loginPending(loginData);
	};

	return (
		<>
			<h1 className="large text-primary">Sign In</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Sign into Your Account
			</p>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						required
						value={email}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={password}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<input
					type="submit"
					className="btn btn-primary"
					value="Login"
				/>
			</form>
			<p className="my-1">
				Don't have an account? <Link to="/register">Sign Up</Link>
			</p>
		</>
	);
};

Login.propTypes = {
	loginPending: PropTypes.func.isRequired,
};

const dispatchToProps = (dispatch) => ({
	loginPending: (loginData) => dispatch(loginPending(loginData)),
});

export default connect(null, dispatchToProps)(Auth(Login));
