import { combineReducers } from 'redux';

import categories from './categories';
import ideas from './ideas';
import members from './members';
import comments from './comments';
import ideaMembers from './ideaMembers';

const rootReducer = () => (
    combineReducers({
        categories,
        ideas,
        members,
        comments,
        ideaMembers,
    })
);

export default rootReducer;
