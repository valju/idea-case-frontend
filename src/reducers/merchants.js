import ActionTypes from "../actions/ActionTypes";

//Define initial states of reducer
export const initialState = {
	isLoading: false,
	merchantList: [],
	merchantIdsFound: null,
	merchantCurrent: null,
};

export default function merchants(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.MERCHANTS_ALL_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.MERCHANTS_ALL_OK:
			return {
				...state,
				merchantList: action.merchantList,
				isLoading: false,
			};
		case ActionTypes.MERCHANTS_ALL_X:
			return {
				...state,
				isLoading: false,
			};

		case ActionTypes.MERCHANT_DELETE_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.MERCHANT_DELETE_OK:
			return {
				...state,
				isLoading: false,
			};
		case ActionTypes.MERCHANT_DELETE_X:
			return {
				...state,
				isLoading: false,
			};

		case ActionTypes.MERCHANT_GETBYID_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.MERCHANT_GETBYID_OK:
			return {
				...state,
				merchantCurrent: action.merchant,
				isLoading: false,
			};
		case ActionTypes.MERCHANT_GETBYID_X:
			return {
				...state,
				isLoading: false,
			};

		case ActionTypes.MERCHANT_UPDATE_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.MERCHANT_UPDATE_OK:
			return {
				...state,
				merchantCurrent: action.merchant,
				isLoading: false,
			};
		case ActionTypes.MERCHANT_UPDATE_X:
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
