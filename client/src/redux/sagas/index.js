import { SET_ALERT, REMOVE_ALERT } from "../alert/alert.types";
import { selectAlertSaga } from "../alert/alert.selectors";
import {
	selectUserTempDataSaga,
	selectErrorMessageSaga,
	selectLoginDataSaga,
} from "../auth/auth.selectors";
import axios from "axios";
import {
	REGISTRATION_SUCCESS,
	REGISTRATION_FAILED,
	REGISTRATION_PENDING,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGIN_PENDING,
} from "../auth/auth.types";
import { v4 as uuid } from "uuid";

import { put, select, all, takeEvery, delay } from "redux-saga/effects";

// ALERTS START

function* removeAlertSaga() {
	yield delay(3000);
	let alert = yield select(selectAlertSaga);
	console.log(alert);
	yield put({ type: REMOVE_ALERT, payload: alert[0].id });
}

function* watchRemoveAlertSaga() {
	yield takeEvery(SET_ALERT, removeAlertSaga);
}

// END ALERTS

// AUTH START

// REGISTRATION START
const register = async (user) => {
	try {
		const config = {
			headers: { "Content-Type": "application/json" },
		};
		const res = await axios.post("/api/users", user, config);
		const data = await res.data;

		return data;
	} catch (error) {
		return error.response.data.errors[0].msg;
	}
};

function* registrationPendingSaga() {
	try {
		let user = yield select(selectUserTempDataSaga);
		let userString = JSON.stringify(user);
		console.log(userString);

		const res = yield register(userString);
		if (typeof res === "object") {
			yield put({ type: REGISTRATION_SUCCESS, payload: res });
			yield put({
				type: SET_ALERT,
				payload: {
					id: uuid(),
					msg: "Registration was successful",
					alertType: "success",
				},
			});
		} else {
			yield put({
				type: REGISTRATION_FAILED,
				payload: res,
			});
			const error = yield select(selectErrorMessageSaga);
			yield put({
				type: SET_ALERT,
				payload: { id: uuid(), msg: error, alertType: "danger" },
			});
		}
	} catch (error) {
		console.log(error);
	}
}

function* watchRegistrationSaga() {
	yield takeEvery(REGISTRATION_PENDING, registrationPendingSaga);
}

// REGISTRATION ENDS

// LOGIN STARTS

const requestLogin = async (loginData) => {
	try {
		const url = "/api/auth";

		const config = {
			headers: { "Content-type": "application/json" },
		};

		const res = await axios.post(url, loginData, config);
		const data = await res.data;
		console.log(res);
		return data;
	} catch (error) {
		console.error(error);
	}
};

function* pendingLoginSaga() {
	try {
		const loginData = yield select(selectLoginDataSaga);
		const loginDataString = JSON.stringify(loginData);
		const data = yield requestLogin(loginDataString);

		console.log(data);
		if (typeof data === "object") {
			yield put({ type: LOGIN_SUCCESS, payload: data.token });
			yield put({
				type: SET_ALERT,
				payload: {
					id: uuid(),
					msg: "Login successful",
					alertType: "success",
				},
			});
		} else {
			yield put({ type: LOGIN_FAILED, payload: "Error" });
			yield put({
				type: SET_ALERT,
				payload: {
					id: uuid(),
					msg: "error",
					alertType: "danger",
				},
			});
		}
	} catch (error) {}
}

function* watchLoginSaga() {
	yield takeEvery(LOGIN_PENDING, pendingLoginSaga);
}

// LOGIN ENDS

// END AUTH

export default function* rootSaga() {
	yield all([
		watchRemoveAlertSaga(),
		watchRegistrationSaga(),
		watchLoginSaga(),
	]);
}
