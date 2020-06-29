import { createSelector } from "reselect";

export const selectAlertSaga = (state) => state.alert;

const selectAlertState = (state) => state.alert;

export const selectAlert = createSelector([selectAlertState], (alert) => alert);
