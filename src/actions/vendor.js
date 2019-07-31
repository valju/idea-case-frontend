import ActionTypes from "./ActionTypes";
import axios from "axios";
import { apiRoot } from "../config/AxiosConfig";

// ACTION CREATORS

// ECRVendors SHOW ALL
export const vendorsAll_REQ = () => ({
	type: ActionTypes.VENDORS_ALL_REQ,
});
export const vendorsAll_OK = vendorList => ({
	type: ActionTypes.VENDORS_ALL_OK,
	vendorList: vendorList,
});
export const vendorsAll_X = () => ({
	type: ActionTypes.VENDORS_ALL_X,
});

export const fetchAllVendors = () => {
	return async (dispatch, getState) => {
		dispatch(vendorsAll_REQ());

		const ajaxRequest = {
			method: "get",
			url: `${apiRoot().baseURL}/ecrvendor`,
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(vendorsAll_OK(response.data));
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(vendorsAll_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};

// ECRVendor ADD
export const vendorAdd_REQ = () => ({
	type: ActionTypes.VENDOR_ADD_REQ,
});
export const vendorAdd_OK = () => ({
	type: ActionTypes.VENDOR_ADD_OK,
});
export const vendorAdd_X = () => ({
	type: ActionTypes.VENDOR_ADD_X,
});

export const addVendor = vendor => {
	return async (dispatch, getState) => {
		dispatch(vendorAdd_REQ());

		const ajaxRequest = {
			method: "post",
			url: `${apiRoot().baseURL}/ecrvendor`,
			data: vendor,
		};

		axios(ajaxRequest)
			.then(() => {
				dispatch(vendorAdd_OK());
				dispatch(fetchAllVendors());
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(vendorAdd_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};

// vendor DELETE
export const vendorDelete_REQ = () => ({
	type: ActionTypes.VENDOR_DELETE_REQ,
});
export const vendorDelete_OK = () => ({
	type: ActionTypes.VENDOR_DELETE_OK,
});
export const vendorDelete_X = () => ({
	type: ActionTypes.VENDOR_DELETE_X,
});

export const deleteVendor = id => {
	return async (dispatch, getState) => {
		dispatch(vendorDelete_REQ(id));
		console.dir("Delete by this id: " + id);

		const ajaxRequest = {
			method: "delete",
			url: `${apiRoot().baseURL}/ecrvendor/${id}`,
		};

		axios(ajaxRequest)
			.then(() => {
				dispatch(vendorDelete_OK());
				dispatch(fetchAllVendors());
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(vendorDelete_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};

// vendor GET  By Id
export const vendorGetById_REQ = () => ({
	type: ActionTypes.VENDOR_GETBYID_REQ,
});
export const vendorGetById_OK = vendor => ({
	type: ActionTypes.VENDOR_GETBYID_OK,
	vendor: vendor,
});
export const vendorGetById_X = () => ({
	type: ActionTypes.VENDOR_GETBYID_X,
});

export const getVendor = id => {
	return async (dispatch, getState) => {
		dispatch(vendorGetById_REQ());
		console.dir("Get vendor with this id: " + id);

		const ajaxRequest = {
			method: "get",
			url: `${apiRoot().baseURL}/ecrvendor/${id}`,
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(vendorGetById_OK(response.data));
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(vendorGetById_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};

//update vendor
export const vendorUpdate_REQ = () => ({
	type: ActionTypes.VENDOR_UPDATE_REQ,
});
export const vendorUpdate_OK = vendor => ({
	type: ActionTypes.VENDOR_UPDATE_OK,
	vendor,
});
export const vendorUpdate_X = () => ({
	type: ActionTypes.VENDOR_UPDATE_X,
});

export const updateVendor = vendor => {
	return async (dispatch, getState) => {
		dispatch(vendorUpdate_REQ());
		console.dir(vendor);

		const ajaxRequest = {
			method: "put",
			url: `${apiRoot().baseURL}/ecrvendor/${vendor.id}`,
			data: vendor,
		};

		axios(ajaxRequest)
			.then(response => {
				dispatch(vendorUpdate_OK(vendor));
				dispatch(fetchAllVendors());
			})
			.catch(error => {
				console.error("Error: " + error);
				dispatch(vendorUpdate_X());
			})
			.then(() => {
				return {
					type: null,
				};
			});
	};
};
