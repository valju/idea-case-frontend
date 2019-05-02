import ActionTypes from "../actions/ActionTypes";

//Define initial states of reducer
export const initialState = {
  isLoading: false,
  memberList: [],
  memberIdsFound: null,
  memberCurrent: null
};

export default function members(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.MEMBER_ALL_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.MEMBER_ALL_OK:
      return {
        ...state,
        memberList: action.memberList,
        isLoading: false
      };
    case ActionTypes.MEMBER_ALL_X:
      return {
        ...state,
        isLoading: false
      };

    case ActionTypes.MEMBER_DELETE_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.MEMBER_DELETE_OK:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.MEMBER_DELETE_X:
      return {
        ...state,
        isLoading: false
      };

    case ActionTypes.MEMBER_GETBYID_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.MEMBER_GETBYID_OK:
      return {
        ...state,
        memberCurrent: action.member,
        isLoading: false
      };
    case ActionTypes.MEMBER_GETBYID_X:
      return {
        ...state,
        isLoading: false
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
