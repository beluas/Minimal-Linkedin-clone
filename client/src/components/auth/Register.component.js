import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getToken } from "../../redux/user/user.actions";

const Register = ({ getToken }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const { name, email, password, password2 } = formData;

	const handleSubmit = async (e) => {
		if (password !== password2) {
			console.log("Not Match");
		} else {
			console.log(formData);
		}

		e.preventDefault();

		const newUser = {
			name,
			email,
			password,
		};

		try {
			const config = {
				headers: { "Content-Type": "application/json" },
			};

			const body = JSON.stringify(newUser);

			const res = await axios.post("/api/users", body, config);

			getToken(res.data);
		} catch (error) {
			console.log(error.response.data);
		}
	};
	return (
		<>
			<h1 className="large text-primary">Sign Up</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account
			</p>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						required
						value={name}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => handleChange(e)}
					/>
					<small className="form-text">
						This site uses Gravatar so if you want a profile image,
						use a Gravatar email
					</small>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
						value={password}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Confirm Password"
						name="password2"
						minLength="6"
						value={password2}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<input
					type="submit"
					className="btn btn-primary"
					value="Register"
				/>
			</form>
			<p className="my-1">
				Already have an account? <a href="login.html">Sign In</a>
			</p>
		</>
	);
};

const dispatchToProps = (dispatch) => ({
	registerUser: (user) => dispatch(getToken(user)),
});

export default connect(null, dispatchToProps)(Register);
