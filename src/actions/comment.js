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
export const commentsByIdeaId_X = () => ({
  type: ActionTypes.COMMENTS_BYIDEAID_X,
});

export function fetchAllCommentsByIdeaId(ideaId) {
  return async (dispatch, getState) => {

    dispatch(commentsByIdeaId_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/comment/idea/1002',
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(commentsByIdeaId_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(commentsByIdeaId_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  }
};

// Comment ADD
export const commentAdd_REQ = () => ({
  type: ActionTypes.COMMENT_ADD_REQ,
});
export const commentAdd_OK = () => ({
  type: ActionTypes.COMMENT_ADD_OK,
});
export const commentAdd_X = () => ({
  type: ActionTypes.COMMENT_ADD_X,
});

export function addComment(comment) {
  return async (dispatch, getState) => {

    dispatch(commentAdd_REQ());

    const ajaxRequest = {
      method: 'post',
      url: API_ROOT + '/comment',
      data: comment,
    };

    axios(ajaxRequest)
      .then(() => {
        dispatch(commentAdd_OK());
        dispatch(fetchAllCommentsByIdeaId(comment.ideaId));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(commentAdd_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  }
};
