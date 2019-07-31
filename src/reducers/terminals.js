import ActionTypes from "../actions/ActionTypes";

//Define initial states of reducer
export const initialState = {
	isLoading: false,
	terminalList: [],
	terminalIdsFound: null,
	terminalCurrent: null,
};

export default function terminals(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.TERMINALS_ALL_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.TERMINALS_ALL_OK:
			return {
				...state,
				terminalList: action.terminalList,
				isLoading: false,
			};
		case ActionTypes.TERMINALS_ALL_X:
			return {
				...state,
				isLoading: false,
			};
		case ActionTypes.TERMINAL_GETBYID_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.TERMINAL_GETBYID_OK:
			return {
				...state,
				terminalCurrent: action.terminal,
				isLoading: false,
			};
		case ActionTypes.TERMINAL_GETBYID_X:
			return {
				...state,
				isLoading: false,
			};
		case ActionTypes.TERMINAL_UPDATE_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.TERMINAL_UPDATE_OK:
			return {
				...state,
				terminalCurrent: action.terminal,
				isLoading: false,
			};
		case ActionTypes.TERMINAL_UPDATE_X:
			return {
				...state,
				isLoading: false,
			};

		case ActionTypes.TERMINAL_DELETE_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.TERMINAL_DELETE_OK:
			return {
				...state,
				isLoading: false,
			};
		case ActionTypes.TERMINAL_DELETE_X:
			return {
				...state,
				isLoading: false,
			};

		case null:
			return state;

		default:
			return state;
	}
}
