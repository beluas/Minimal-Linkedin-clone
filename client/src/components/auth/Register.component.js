import React, { useState } from "react";
import { connect } from "react-redux";
import { registrationPending } from "../../redux/auth/auth.actions";
import { setAlert } from "../../redux/alert/alert.actions";
import PropTypes from "prop-types";

const Register = ({ registrationPending, setAlert }) => {
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
		e.preventDefault();
		if (password !== password2) {
			setAlert("Passwords don't match", "danger");
		} else {
		}

		const newUser = {
			name,
			email,
			password,
		};

		try {
			registrationPending(newUser);
		} catch (error) {
			setAlert(error.response.data.errors[0].msg, "danger");
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

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	registrationPending: PropTypes.func.isRequired,
};

const dispatchToProps = (dispatch) => ({
	registrationPending: (user) => dispatch(registrationPending(user)),
	setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType)),
});

export default connect(null, dispatchToProps)(Register);
