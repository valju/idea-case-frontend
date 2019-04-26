import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants';

// ACTION CREATORS (Action object creator functions)

// Comments SHOW ALL BY IDEAID
export const commentsByIdeaId_REQ = () => ({
    type: ActionTypes.COMMENTS_BYIDEAID_REQ
});
export const commentsByIdeaId_OK = (commentListByIdeaId) => ({
    type: ActionTypes.COMMENTS_BYIDEAID_OK,
    commentListByIdeaId: commentListByIdeaId
});
export const categoriesAll_X = () => ({
    type: ActionTypes.COMMENTS_BYIDEAID_X,
});

export function fetchAllCommentsByIdeaId(ideaId) {
    return async (dispatch, getState) => {
  
      dispatch(commentsByIdeaId_REQ());
  
      const ajaxRequest = {
        method: 'get',
        url: API_ROOT + '/comment/idea/1001',
      };
  
      axios(ajaxRequest)
        .then((response) => {
            console.dir(response.data);
          dispatch(commentsByIdeaId_OK(response.data));
        })
        .catch((error) => {
          console.error("Error: " + error);
          dispatch(categoriesAll_X());
        })
        .then(() => {
          return { type: null }; // 'Empty' action object
        });
    }
  };