import ActionTypes from '../actions/ActionTypes';

export const initialState = {
  isLoading: false,
  ideaMemberList: [],
  ideaMemberCurrent: {},  
}

export default function ideaMembers(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.IDEA_MEMBER_ALL_REQ: 
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.IDEA_MEMBER_ALL_OK:
      return {
        ...state,
        isLoading: false,
        ideaMemberList: action.ideaMemberList,
      }

    case ActionTypes.IDEA_MEMBER_ALL_X:
      return {
        ...state,
        isLoading: false,
      }

    case ActionTypes.IDEA_MEMBER_GETBYID_REQ:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.IDEA_MEMBER_GETBYID_OK:
     return {
       ...state,
       isLoading: false,
       ideaMemberCurrent: action.ideaMember
     }

    case ActionTypes.IDEA_MEMBER_GETBYID_X:
      return {
        ...state,
        isLoading: false,
      }
      
    default:
      return state;

  }
}