import ActionTypes from "./ActionTypes";
import axios from "axios";
import { apiRoot } from "../config/AxiosConfig";

// ACTION CREATORS
export const terminalsAll_REQ = () => ({
	type: ActionTypes.TERMINALS_ALL_REQ,
});
export const terminalsAll_OK = terminalList => ({
	type: ActionTypes.TERMINALS_ALL_OK,
	terminalList: terminalList,
});
export const terminalsAll_X = () => ({
	type: ActionTypes.TERMINALS_ALL_X,
});

export const fetchAllTerminals = () => {
	return async (dispatch, getState) => {
		dispatch(terminalsAll_REQ());

		const ajaxRequest = {
			method: "get",
			url: `${apiRoot().baseURL}/terminal`,
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(terminalsAll_OK(response.data));
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(terminalsAll_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};

// ADD new terminals
export const terminalAdd_REQ = () => ({
	type: ActionTypes.TERMINAL_ADD_REQ,
});
export const terminalAdd_OK = () => ({
	type: ActionTypes.TERMINAL_ADD_OK,
});
export const terminalAdd_X = () => ({
	type: ActionTypes.TERMINAL_ADD_X,
});

export function addTerminal(terminal) {
	return async (dispatch, getState) => {
		dispatch(terminalAdd_REQ());

		const ajaxRequest = {
			method: "post",
			url: `${apiRoot().baseURL}/terminal`,
			data: terminal,
		};

		axios(ajaxRequest)
			.then(() => {
				dispatch(terminalAdd_OK());
				//dispatch(fetchAllTerminals());
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(terminalAdd_X());
			})
			.then(() => {
				console.log("terminal added succesfully");
				return {
					type: null,
				};
			});
	};
}

// Terminal GET  By Id
export const terminalGetById_REQ = () => ({
	type: ActionTypes.TERMINAL_GETBYID_REQ,
});
export const terminalGetById_OK = terminal => ({
	type: ActionTypes.TERMINAL_GETBYID_OK,
	terminal: terminal,
});
export const terminalGetById_X = () => ({
	type: ActionTypes.TERMINAL_GETBYID_X,
});

export const getTerminal = id => {
	return async (dispatch, getState) => {
		dispatch(terminalGetById_REQ());
		console.dir("Get terminal with this id: " + id);

		const ajaxRequest = {
			method: "get",
			url: `${apiRoot().baseURL}/terminal/${id}`,
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(terminalGetById_OK(response.data));
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(terminalGetById_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};

export const terminalDelete_REQ = id => ({
	type: ActionTypes.TERMINAL_DELETE_REQ,
	id: id,
});
export const terminalDelete_OK = () => ({
	type: ActionTypes.TERMINAL_DELETE_OK,
});
export const terminalDelete_X = () => ({
	type: ActionTypes.TERMINAL_DELETE_X,
});

export const deleteTerminal = id => {
	return async (dispatch, getState) => {
		dispatch(terminalDelete_REQ(id));
		console.dir("Delete by this id: " + id);

		const ajaxRequest = {
			method: "delete",
			url: `${apiRoot().baseURL}/terminal/${id}`,
		};

		axios(ajaxRequest)
			.then(response => {
				console.log(ajaxRequest);
				dispatch(terminalDelete_OK());
				dispatch(fetchAllTerminals());
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(terminalDelete_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};

//UPDATE terminal
export const terminalUpdate_REQ = () => ({
	type: ActionTypes.TERMINAL_UPDATE_REQ,
});
export const terminalUpdate_OK = terminal => ({
	type: ActionTypes.TERMINAL_UPDATE_OK,
	terminal: terminal,
});
export const terminalUpdate_X = () => ({
	type: ActionTypes.TERMINAL_UPDATE_X,
});

export const updateTerminal = terminal => {
	return async (dispatch, getState) => {
		dispatch(terminalUpdate_REQ());

		const ajaxRequest = {
			method: "put",
			url: `${apiRoot().baseURL}/terminal`,
			data: terminal,
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(terminalUpdate_OK(terminal));
				dispatch(fetchAllTerminals());
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(terminalUpdate_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};
