import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants';
// import { Action } from 'rxjs/internal/scheduler/Action';

// ACTION CREATORS (Action object creator functions)

// Idea_member SHOW ALL
export const ideaMemberAll_REQ = () => ({
  type: ActionTypes.IDEA_MEMBER_ALL_REQ,
});

export const ideaMemberAll_OK = (ideaMemberList) => ({
  type: ActionTypes.IDEA_MEMBER_ALL_OK,
  ideaMemberList
});

export const ideaMemberAll_X = () => ({
  type: ActionTypes.IDEA_MEMBER_ALL_X,
});

export function fetchAllIdeaMember() {
  return async (dispatch, getState) => {

    dispatch(ideaMemberAll_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/ideaMember/all'
    };

    axios(ajaxRequest) 
    .then((response => {
      dispatch(ideaMemberAll_OK(response.data))
    }))
    .catch((error) => {
      console.error("Error: " + error);      
      dispatch(ideaMemberAll_X())
    })
    .then(() => {
      return { type: null } // 'Empty' action object
    })
  }
}

// Idea_member get by (ideaId, memberId)
export const ideaMemberById_REQ = () => ({
  type: ActionTypes.IDEA_MEMBER_GETBYID_REQ,
});

export const ideaMemberById_OK = (ideaMember) => ({
  type: ActionTypes.IDEA_MEMBER_GETBYID_OK,
  ideaMember
});

export const ideaMemberById_X = () => ({
  type: ActionTypes.IDEA_MEMBER_GETBYID_X,
});

export function getIdeaMemberById(ideaId, memberId) {
  return async (dispatch, getState) => {
    dispatch(ideaMemberById_REQ())

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/ideaMember/' + ideaId + '/' + memberId
    };

    axios(ajaxRequest)
    .then(response => {
      dispatch(ideaMemberById_OK(response.data))
    })
    .catch(error => {
      console.error("Error: " + error)
      dispatch(ideaMemberById_X())
    })
    .then(() => {
      return { type: null } // 'Empty' action object
    })
  }
}

// Add new idea-member
export const ideaMemberAdd_REQ = () => ({
  type: ActionTypes.IDEA_MEMBER_ADD_REQ,
});

export const ideaMemberAdd_OK = () => ({
  type: ActionTypes.IDEA_MEMBER_ADD_OK,
});

export const ideaMemberAdd_X = () => ({
  type: ActionTypes.IDEA_MEMBER_ADD_X,
})

export const ideaMemberAdd_Message = (message) => ({
  type: ActionTypes.IDEA_MEMBER_MESSAGE,
  message
})

export function addIdeaMember(ideaMember) {
  return async (dispatch, getState) => {
    dispatch(ideaMemberAdd_REQ())

    const ajaxRequest = {
      method: 'post',
      url: API_ROOT + '/ideaMember/',
      data: ideaMember
    };

    axios(ajaxRequest)
    .then(response => {
      dispatch(ideaMemberAdd_OK(response.data))
      dispatch(fetchAllIdeaMember())
    })
    .catch(error => {
      console.log("Error: " + error)
      dispatch(ideaMemberAdd_X())
      dispatch(ideaMemberAdd_Message(error.message))
    })
    .then(() => {
      return { type: null }
    })

  }
}

// Delete idea-member

export const ideaMemberDelete_REQ = () => ({
  type: ActionTypes.IDEA_MEMBER_DEL_REQ,
})

export const ideaMemberDelete_OK = () => ({
  type: ActionTypes.IDEA_MEMBER_DEL_OK,
})

export const ideaMemberDelete_X = () => ({
  type: ActionTypes.IDEA_MEMBER_DEL_X,
})

export function deleteIdeaMember(ideaId, memberId) {
  return async (dispatch, getState) => {
    dispatch(ideaMemberDelete_REQ())
    console.dir("Delete by this (ideaId, memberId): (" + ideaId + ", " + memberId + ")");
    
    const ajaxRequest = {
      method: 'delete',
      url: API_ROOT + '/ideaMember/' + ideaId + "/" + memberId,
    };

    axios(ajaxRequest)
    .then(() => {
      dispatch(ideaMemberDelete_OK())
      dispatch(fetchAllIdeaMember())
    })
    .catch((error) => {
      console.log("Error: " + error)
      dispatch(ideaMemberDelete_X())      
    })
    .then(() => {
      return { type: null }
    })
  }
}

// Update idea-member
export const ideaMemberUpdate_Message = (message) => ({
  type: ActionTypes.IDEA_MEMBER_MESSAGE,
  message
})

// Update IDEA of idea-member
export const ideaMemberUpdate_Idea_REQ = () => ({
  type: ActionTypes.IDEA_MEMBER_UPDATE_IDEA_REQ,
})

export const ideaMemberUpdate_Idea_OK = () => ({
  type: ActionTypes.IDEA_MEMBER_UPDATE_IDEA_OK,
})

export const ideaMemberUpdate_Idea_X = () => ({
  type: ActionTypes.IDEA_MEMBER_UPDATE_IDEA_X,
})

export function updateIdeaOfIdeaMember(oldIdeaId, newIdeaId, memberId) {
  return async (dispatch, getState) => {
    dispatch(ideaMemberUpdate_Idea_REQ())
    const data = {
      oldIdeaId,
      newIdeaId,
      oldMemberId: memberId,
      newMemberId: null
    }

    const ajaxRequest = {
      method: 'put',
      url: API_ROOT + '/ideaMember/',
      data
    };

    axios(ajaxRequest)
    .then((response) => {
      const success_message = "Updated succesfully!"
      dispatch(ideaMemberUpdate_Idea_OK())
      dispatch(fetchAllIdeaMember())
      dispatch(ideaMemberUpdate_Message(success_message))      
    })
    .catch((error) => {
      console.log("Error: " + error)
      dispatch(ideaMemberUpdate_Idea_X())
      dispatch(ideaMemberUpdate_Message(error.message))
    })
    .then(() => {
      return { type: null }
    })
  }
}

// Update MEMBER of idea-member

export const ideaMemberUpdate_Member_REQ = () => ({
  type: ActionTypes.IDEA_MEMBER_UPDATE_MEMBER_REQ,
})

export const ideaMemberUpdate_Member_OK = () => ({
  type: ActionTypes.IDEA_MEMBER_UPDATE_MEMBER_OK,
})

export const ideaMemberUpdate_Member_X = () => ({
  type: ActionTypes.IDEA_MEMBER_UPDATE_MEMBER_X,
})

export function updateMemberOfIdeaMember(ideaId, oldMemberId, newMemberId) {
  return async (dispatch, setState) => {
    dispatch(ideaMemberUpdate_Member_REQ())
    const data = {
      oldIdeaId: ideaId,
      newIdeaId: null,
      oldMemberId,
      newMemberId
    }

    const ajaxRequest = {
      method: 'put',
      url: API_ROOT + '/ideaMember/',
      data
    };

    axios(ajaxRequest)
    .then((response) => {
      const success_message = "Updated succesfully!"
      dispatch(ideaMemberUpdate_Member_OK())
      dispatch(fetchAllIdeaMember())
      dispatch(ideaMemberUpdate_Message(success_message))      
    })
    .catch((error) => {
      console.log("Error: " + error)
      dispatch(ideaMemberUpdate_Member_X())
      dispatch(ideaMemberUpdate_Message(error.message))
    })
    .then(() => {
      return { type: null }
    })
  }
}