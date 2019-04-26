import ActionTypes from "./ActionTypes";
import axios from "axios";
import { API_ROOT } from "../constants/AppConstants";

// ACTION CREATORS (Action object creator functions)
// ~ standard and only way to create each action object
export const membersAll_REQ = () => ({
	type: ActionTypes.MEMBERS_ALL_REQ
});
export const membersAll_OK = memberList => ({
	type: ActionTypes.MEMBERS_ALL_OK,
	memberList: memberList
});
export const membersAll_X = () => ({
	type: ActionTypes.MEMBERS_ALL_X
});

// Helper function, real action function?
export function fetchAllmembers() {
	return async (dispatch, getState) => {
		dispatch(membersAll_REQ());

		const ajaxRequest = {
			method: "get",
			url: API_ROOT + "/member/all"
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(membersAll_OK(response.data));
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(membersAll_X());
			})
			.then(() => {
				return { type: null }; // 'Empty' action object
			});
	};
}
