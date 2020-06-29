import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const generateStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const persistConfig = {
		key: "root",
		storage,
		whitelist: ["auth"],
	};

	const persistedReducer = persistReducer(persistConfig, rootReducer);

	const middlewares = [logger, sagaMiddleware];
	const initialState = {};
	const store = createStore(
		persistedReducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middlewares))
	);

	sagaMiddleware.run(rootSaga);

	return store;
};
