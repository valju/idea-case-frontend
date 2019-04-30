import { combineReducers } from 'redux';

import categories from './categories';
import ideas from './ideas';
import members from './members';
import comments from './comments';

const rootReducer = () => (
    combineReducers({
        categories,
        ideas,
        members,
        comments,
    })
);

export default rootReducer;
