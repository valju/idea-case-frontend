import { combineReducers } from "redux";
import { DataTableReducer } from "react-redux-datatable";

import vendors from "./vendors";
import merchants from "./merchants";
import terminals from "./terminals";
import users from "./users";

const rootReducer = () =>
	combineReducers({
		merchants,
		terminals,
		vendors,
		users,
		DataTableReducer,
	});

export default rootReducer;
