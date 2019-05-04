import ActionTypes from "./ActionTypes";
import axios from "axios";
import {
	API_ROOT
} from "../constants/AppConstants";

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
				return {
					type: null
				}; // 'Empty' action object
			});
	};
}

// Adding new members
export const memberAdd_REQ = () => ({
	type: ActionTypes.MEMBERS_ADD_REQ
});
export const memberAdd_OK = () => ({
	type: ActionTypes.MEMBERS_ADD_OK
});
export const memberAdd_X = () => ({
	type: ActionTypes.MEMBERS_ADD_X
});

export function addMember(member) {
	return async (dispatch, getState) => {
		dispatch(memberAdd_REQ());

		// Here would be some async AJAX call with await...
		// ... or some promises or so
		const ajaxRequest = {
			method: "post",
			url: API_ROOT + "/member",
			data: member
		};

		axios(ajaxRequest)
			.then(() => {
				dispatch(memberAdd_OK());
				dispatch(fetchAllmembers());
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(memberAdd_X());
			})
			.then(() => {
				return {
					type: null
				}; // 'Empty' action object
			});
	};
}

// Category GET One By Id
export const memberGetById_REQ = () => ({
	type: ActionTypes.MEMBERS_GETBYID_REQ
});
export const memberGetById_OK = member => ({
	type: ActionTypes.MEMBERS_GETBYID_OK,
	member: member
});
export const memberGetById_X = () => ({
	type: ActionTypes.MEMBERS_GETBYID_X
});

export function getMember(id) {
	return async (dispatch, getState) => {
		dispatch(memberGetById_REQ());
		console.dir("Get member with this id: " + id);

		// Here would be some async AJAX call with await...
		// ... or some promises or so
		const ajaxRequest = {
			method: "get",
			url: API_ROOT + "/member/" + id
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(memberGetById_OK(response.data));
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(memberGetById_X());
			})
			.then(() => {
				return {
					type: null
				}; // 'Empty' action object
			});
	};
}

export const memberDelete_REQ = id => ({
	type: ActionTypes.MEMBER_DELETE_REQ,
	id: id
});
export const memberDelete_OK = () => ({
	type: ActionTypes.MEMBER_DELETE_OK
});
export const memberDelete_X = () => ({
	type: ActionTypes.MEMBER_DELETE_X
});

export function deleteMember(id) {
	return async (dispatch, getState) => {
		dispatch(memberDelete_REQ(id));
		console.dir("Delete by this id: " + id);

		const ajaxRequest = {
			method: "delete",
			url: API_ROOT + "/member/" + id
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(memberDelete_OK());
				dispatch(fetchAllmembers());
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(memberDelete_X());
			})
			.then(() => {
				return {
					type: null
				};
			});
	};
}