import ActionTypes from "../actions/ActionTypes";

// Define initial states of reducer
export const initialState = {
	isLoading: false,
	vendorList: [],
	vendorIdsFound: null,
	vendorCurrent: null,
};

export default function vendors(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.VENDORS_ALL_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.VENDORS_ALL_OK:
			return {
				...state,
				vendorList: action.vendorList,
				isLoading: false,
			};
		case ActionTypes.VENDORS_ALL_X:
			return {
				...state,
				isLoading: false,
			};

		case ActionTypes.VENDOR_DELETE_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.VENDORS_DELETE_OK:
			return {
				...state,
				isLoading: false,
			};
		case ActionTypes.VENDOR_DELETE_X:
			return {
				...state,
				isLoading: false,
			};

		case ActionTypes.VENDOR_GETBYID_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.VENDOR_GETBYID_OK:
			return {
				...state,
				vendorCurrent: action.vendor,
				isLoading: false,
			};
		case ActionTypes.VENDOR_GETBYID_X:
			return {
				...state,
				isLoading: false,
			};

		case ActionTypes.VENDOR_UPDATE_REQ:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.VENDOR_UPDATE_OK:
			return {
				...state,
				vendorCurrent: action.vendor,
				isLoading: false,
			};
		case ActionTypes.VENDOR_UPDATE_X:
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
