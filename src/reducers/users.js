import ActionTypes from "../actions/ActionTypes";

// Define initial states of reducer
export const initialState = {
	isLoading: false,
	userList: [],
	userCurrent: null,
};

export default function users(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.USERS_ALL_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.USERS_ALL_OK:
			return {
				...state,
				userList: action.userList,
				isLoading: false,
			};
		case ActionTypes.USERS_ALL_X:
			return {
				...state,
				isLoading: false,
			};
		case ActionTypes.USERS_UPDATE_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.USERS_UPDATE_OK:
			return {
				...state,
				userCurrent: action.user,
				isLoading: false,
			};
		case ActionTypes.USERS_UPDATE_X:
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
