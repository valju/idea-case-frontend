import { combineReducers } from "redux";

import categories from "./categories";
import ideas from "./ideas";
import members from "./members";
import comments from "./comments";
import ideaMembers from "./ideaMembers";
import user from "./user";

const rootReducer = () =>
  combineReducers({
    categories,
    ideas,
    members,
    comments,
    ideaMembers,
    user
  });

export default rootReducer;
