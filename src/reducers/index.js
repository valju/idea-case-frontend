import { combineReducers } from 'redux';

import categories from './categories';
import ideas from './ideas';

const rootReducer = () => (
    combineReducers({
        categories,
        ideas,
    })
);

export default rootReducer;
