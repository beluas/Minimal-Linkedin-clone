import { createSelector } from "reselect";

export const selectUserTempDataSaga = (state) => state.auth.userTempData;
export const selectErrorMessageSaga = (state) => state.auth.error;

export const selectLoginDataSaga = (state) => state.auth.loginData;

const selectAuth = (state) => state.auth;

export const selectToken = createSelector([selectAuth], (auth) => auth.token);
