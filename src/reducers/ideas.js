import ActionTypes from '../actions/ActionTypes';

//Define initial states of reducer
export const initialState = {
    isLoading: false,
    ideaList: [],
    ideaIdsFound: null,
    ideaCurrent: null,
};

export default function ideas(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.IDEAS_ALL_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.IDEAS_ALL_OK:
            return {
                ...state,
                ideaList: action.ideaList,
                isLoading: false,
            };
        case ActionTypes.IDEAS_ALL_X:
            return {
                ...state,
                isLoading: false,
            };

        case ActionTypes.IDEA_DELETE_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.IDEA_DELETE_OK:
            return {
                ...state,
                isLoading: false,
            };
        case ActionTypes.IDEA_DELETE_X:
            return {
                ...state,
                isLoading: false,
            };

        case ActionTypes.IDEA_GETBYID_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.IDEA_GETBYID_OK:
            return {
                ...state,
                ideaCurrent: action.idea[0],
                isLoading: false,
            };
        case ActionTypes.IDEA_GETBYID_X:
            return {
                ...state,
                isLoading: false,
            };

        case ActionTypes.IDEA_UPDATE_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.IDEA_UPDATE_OK:
            return {
                ...state,
                isLoading: false,
            };
        case ActionTypes.IDEA_UPDATE_X:
            return {
                ...state,
                isLoading: false,
            };
        /*
        case ActionTypes.CATEGORY_RANDOMIZED_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.CATEGORY_RANDOMIZED_OK:
            return {
                ...state,
                categoryCurrent: state.categoryList[action.id],
                isLoading: false,
            };
        case ActionTypes.CATEGORY_RANDOMIZED_X:
            return {
                ...state,
                isLoading: false,
            };
        */
        case null:
            return state;

        default:
            return state;
    }
}