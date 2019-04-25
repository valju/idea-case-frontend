import { combineReducers } from 'redux';

import categories from './categories';
import members from './members';

const rootReducer = () => (
    combineReducers({
        categories,
        members,
    })
);

export default rootReducer;
