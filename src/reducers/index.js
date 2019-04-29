import { combineReducers } from 'redux';

import categories from './categories';
import members from './members';
import comments from './comments';

const rootReducer = () => (
    combineReducers({
        categories,
        members,
        comments,
    })
);

export default rootReducer;
