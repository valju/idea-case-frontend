import { combineReducers } from 'redux';

import categories from './categories';
import members from './members';
import comments from './comments';
import ideaMembers from './ideaMembers';

const rootReducer = () => (
    combineReducers({
        categories,
        members,
        comments,
        ideaMembers,
    })
);

export default rootReducer;
