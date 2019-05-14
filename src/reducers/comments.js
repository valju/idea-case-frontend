import ActionTypes from '../actions/ActionTypes';

// Define initial states of reducer
export const initialState = {
  isLoading: false,
  commentListByIdeaId: [],
  commentsAll: [],
  commentCurrent: null
};

export default function comments(state = initialState, action) {
  switch (action.type) {

    case ActionTypes.COMMENTS_BYIDEAID_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.COMMENTS_BYIDEAID_OK:
      return {
        ...state,
        commentListByIdeaId: action.commentListByIdeaId,
        isLoading: false,
      };
    case ActionTypes.COMMENTS_BYIDEAID_X:
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.COMMENTS_ALL_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.COMMENTS_ALL_OK:
      return {
        ...state,
        commentsAll: action.commentsAll,
        isLoading: false,
      };
    case ActionTypes.COMMENTS_ALL_X:
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.COMMENT_GETONE_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.COMMENT_GETONE_OK:
      return {
        ...state,
        commentCurrent: action.comment,
        isLoading: false
      };
    case ActionTypes.COMMENT_GETONE_X:
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