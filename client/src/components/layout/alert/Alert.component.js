import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAlert } from "../../../redux/alert/alert.selectors";
import PropTypes from "prop-types";

const Alert = ({ alerts }) => {
	return alerts !== null && alerts.length > 0
		? alerts.map((alert) => (
				<div
					key={alert.id}
					className={`alert alert-${alert.alertType}`}
				>
					{alert.msg}
				</div>
		  ))
		: null;
};

Alert.propTypes = {
	alerts: PropTypes.array.isRequired,
};

const stateToProps = createStructuredSelector({
	alerts: selectAlert,
});
export default connect(stateToProps, null)(Alert);
