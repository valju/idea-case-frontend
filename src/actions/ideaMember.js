import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants';

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