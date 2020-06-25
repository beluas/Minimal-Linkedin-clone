import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getToken } from "../../redux/user/user.actions";
import { Link } from "react-router-dom";
import Auth from "../Auth.HOcomponent";

const Login = ({ login, history }) => {
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

		try {
			const url = "/api/auth";

			const config = {
				headers: { "Content-type": "application/json" },
			};

			const body = {
				email,
				password,
			};

			const res = await axios.post(url, body, config);

			login(res.data.token);
			history.push("/");
		} catch (error) {
			console.error(error);
		}
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

const dispatchToProps = (dispatch) => ({
	login: (token) => dispatch(getToken(token)),
});

export default connect(null, dispatchToProps)(Auth(Login));
