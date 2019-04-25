import ActionTypes from '../actions/ActionTypes';

//Define initial states of reducer
export const initialState = {
    isLoading: false,
    memberList: [],
    memberIdsFound: null,
    memberCurrent: null,
};

export default function members(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.MEMBERS_ALL_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.MEMBERS_ALL_OK:
            return {
                ...state,
                memberList: action.memberList,
                isLoading: false,
            };
        case ActionTypes.MEMBERS_ALL_X:
            return {
                ...state,
                isLoading: false,
            };
      
        case null:
            return state;

        default:
            return state;
    }
}