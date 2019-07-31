import ActionTypes from "./ActionTypes";
import axios from "axios";
import { apiRoot } from "../config/AxiosConfig";

// Users SHOW ALL
export const usersAll_REQ = () => ({
	type: ActionTypes.USERS_ALL_REQ,
});
export const usersAll_OK = userList => ({
	type: ActionTypes.USERS_ALL_OK,
	userList: userList,
});
export const usersAll_X = () => ({
	type: ActionTypes.USERS_ALL_X,
});

export const fetchAllUsers = () => {
	return async (dispatch, getState) => {
		dispatch(usersAll_REQ());

		const ajaxRequest = {
			method: "get",
			url: `${apiRoot().baseURL}/user`,
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(usersAll_OK(response.data));
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(usersAll_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};

//update user
export const userUpdate_REQ = () => ({
	type: ActionTypes.USER_UPDATE_REQ,
});
export const userUpdate_OK = user => ({
	type: ActionTypes.USER_UPDATE_OK,
	user,
});
export const userUpdate_X = () => ({
	type: ActionTypes.USER_UPDATE_X,
});

export const updateUser = user => {
	return async (dispatch, getState) => {
		dispatch(userUpdate_REQ());
		console.log(user);

		const ajaxRequest = {
			method: "put",
			url: `${apiRoot().baseURL}/user/${user.id}`,
			data: user,
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(userUpdate_OK(user));
				dispatch(fetchAllUsers());
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(userUpdate_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};
