import { SUCCESS, WARNING, HIDE } from "./alert.types";

export const successMessage = () => ({
	type: SUCCESS,
});

export const warningMessage = () => ({
	type: WARNING,
});

export const successMessage = () => ({
	type: HIDE,
});
