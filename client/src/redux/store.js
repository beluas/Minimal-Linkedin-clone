import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

export const generateStore = () => {
	const middlewares = [logger];

	const store = createStore(rootReducer, applyMiddleware(...middlewares));

	return store;
};
