import ActionTypes from '../actions/ActionTypes';

export const initialState = {
  isLoading: false,
  ideaMemberList: [],
  ideaMemberCurrent: {},
  ideaMemberMessage: ''
}

export default function ideaMembers(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.IDEA_MEMBER_ALL_REQ: 
      return {
        ...state,
        isLoading: true,
        ideaMemberMessage: ''   
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
        ideaMemberMessage: '',   
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
    
    case ActionTypes.IDEA_MEMBER_ADD_REQ:
      return {
        ...state,
        isLoading: true,
        ideaMemberMessage: ''        
      };

    case ActionTypes.IDEA_MEMBER_ADD_OK:
      return {
      ...state,
      isLoading: false,
    }

    case ActionTypes.IDEA_MEMBER_ADD_X:
      return {
      ...state,
      isLoading: false,
    }

    case ActionTypes.IDEA_MEMBER_DEL_REQ:
      return {
        ...state,
        isLoading: true,
        ideaMemberMessage: ''        
      };
      
    case ActionTypes.IDEA_MEMBER_DEL_OK:
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.IDEA_MEMBER_DEL_X:
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.IDEA_MEMBER_UPDATE_IDEA_REQ:
        return {
        ...state,
        ideaMemberMessage: '',    
        isLoading: true,
      };
    
    case ActionTypes.IDEA_MEMBER_UPDATE_IDEA_OK:
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.IDEA_MEMBER_UPDATE_IDEA_X:
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.IDEA_MEMBER_UPDATE_MEMBER_REQ:
      return {
      ...state,
      ideaMemberMessage: '',    
      isLoading: true,
    };
  
    case ActionTypes.IDEA_MEMBER_UPDATE_MEMBER_OK:
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.IDEA_MEMBER_UPDATE_MEMBER_X:
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.IDEA_MEMBER_MESSAGE:
      return {
        ...state,
        isLoading: false,
        ideaMemberMessage: action.message
      };  

    default:
      return state;

  }
}