import ActionTypes from "./ActionTypes";

import axios from "axios";
import { apiRoot } from "../config/AxiosConfig";

export const merchantsAll_REQ = () => ({
	type: ActionTypes.MERCHANTS_ALL_REQ,
});
export const merchantsAll_OK = merchantList => ({
	type: ActionTypes.MERCHANTS_ALL_OK,
	merchantList: merchantList,
});
export const merchantsAll_X = () => ({
	type: ActionTypes.MERCHANTS_ALL_X,
});

export function fetchAllMerchants() {
	return async (dispatch, getState) => {
		dispatch(merchantsAll_REQ());

		const ajaxRequest = {
			method: "get",
			url: `${apiRoot().baseURL}/merchant`,
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(merchantsAll_OK(response.data));
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(merchantsAll_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
}

export const merchantAdd_REQ = () => ({
	type: ActionTypes.MERCHANT_ADD_REQ,
});
export const merchantAdd_OK = () => ({
	type: ActionTypes.MERCHANT_ADD_OK,
});
export const merchantAdd_X = () => ({
	type: ActionTypes.MERCHANT_ADD_X,
});

export const addMerchant = merchant => {
	return async (dispatch, getState) => {
		dispatch(merchantAdd_REQ());
		console.dir(merchant);

		const ajaxRequest = {
			method: "post",
			url: `${apiRoot().baseURL}/merchant`,
			data: merchant,
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(merchantAdd_OK());
				dispatch(fetchAllMerchants());
			})
			.catch(error => {
				console.error("Error: " + error);
				alert(error);
				dispatch(merchantAdd_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};

export const merchantDelete_REQ = id => ({
	type: ActionTypes.MERCHANT_DELETE_REQ,
	id: id,
});
export const merchantDelete_OK = () => ({
	type: ActionTypes.MERCHANT_DELETE_OK,
});
export const merchantDelete_X = () => ({
	type: ActionTypes.MERCHANT_DELETE_X,
});

export const deleteMerchant = id => {
	return async (dispatch, getState) => {
		dispatch(merchantDelete_REQ(id));
		console.dir("Delete by this id: " + id);

		const ajaxRequest = {
			method: "delete",
			url: `${apiRoot().baseURL}/merchant/${id}`,
		};

		axios(ajaxRequest)
			.then(() => {
				dispatch(merchantDelete_OK());
				dispatch(fetchAllMerchants());
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(merchantDelete_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};

//merchant GET by ID

export const merchantGetById_REQ = () => ({
	type: ActionTypes.MERCHANT_GETBYID_REQ,
});
export const merchantGetById_OK = merchant => ({
	type: ActionTypes.MERCHANT_GETBYID_OK,
	merchant: merchant,
});
export const merchantGetById_X = () => ({
	type: ActionTypes.MERCHANT_GETBYID_X,
});

export const getMerchant = id => {
	return async (dispatch, getState) => {
		dispatch(merchantGetById_REQ());
		console.dir("get merchant by this id: " + id);

		const ajaxRequest = {
			method: "get",
			url: `${apiRoot().baseURL}/merchant/${id}`,
		};

		axios(ajaxRequest)
			.then(response => {
				console.log(response);
				dispatch(merchantGetById_OK(response.data));
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(merchantGetById_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};

// update merchant
export const merchantUpdate_REQ = () => ({
	type: ActionTypes.MERCHANT_UPDATE_REQ,
});
export const merchantUpdate_OK = () => ({
	type: ActionTypes.MERCHANT_UPDATE_OK,
});
export const merchantUpdate_X = () => ({
	type: ActionTypes.MERCHANT_UPDATE_X,
});

export const updateMerchant = merchant => {
	return async (dispatch, getState) => {
		dispatch(merchantUpdate_REQ());
		console.dir(merchant);
		const ajaxRequest = {
			method: "put",
			url: `${apiRoot().baseURL}/merchant/${merchant.id}`,
			data: merchant,
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(merchantUpdate_OK(merchant));
				dispatch(fetchAllMerchants());
			})
			.catch(error => {
				console.error("Error: " + error);
				alert(error);
				dispatch(merchantUpdate_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};
