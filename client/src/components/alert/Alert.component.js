import React from "react";

const Alert = ({ status }) => {
	return (
		<div className={`alert ${status ? "alert-success" : "alert-danger"}`}>
			Invalid credentials
		</div>
	);
};

export default Alert;
