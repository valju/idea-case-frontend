import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants';

// ACTION CREATORS (Action object creator functions)

// Comments ALL
export const commentsAllFromToday_REQ = () => ({
  type: ActionTypes.COMMENTS_ALLFROMTODAY_REQ
});
export const commentsAllFromToday_OK = (commentsAll) => ({
  type: ActionTypes.COMMENTS_ALLFROMTODAY_OK,
  commentsAll: commentsAll
});
export const commentsAllFromToday_X = () => ({
  type: ActionTypes.COMMENTS_ALLFROMTODAY_X,
});

export function fetchAllCommentsFromToday() {
  return async (dispatch, getState) => {

    dispatch(commentsAllFromToday_REQ());
    
    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/comment/all',
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(commentsAllFromToday_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(commentsAllFromToday_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  }
};

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
      url: API_ROOT + '/comment/idea/' + ideaId,
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

// Comment UPDATE
export const commentUpdate_REQ = () => ({
  type: ActionTypes.COMMENT_UPDATE_REQ,
});
export const commentUpdate_OK = () => ({
  type: ActionTypes.COMMENT_UPDATE_OK,
});
export const commentUpdate_X = () => ({
  type: ActionTypes.COMMENT_UPDATE_X,
});

export function updateComment(comment) {
  return async (dispatch, getState) => {

    dispatch(commentUpdate_REQ());

    const ajaxRequest = {
      method: 'put',
      url: API_ROOT + '/comment',
      data: comment,
    };

    axios(ajaxRequest)
      .then(() => {
        dispatch(commentUpdate_OK());
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(commentUpdate_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  }
};

// COMMENT GET ONE
export const commentGetOne_REQ = () => ({
  type: ActionTypes.COMMENT_GETONE_REQ,
});
export const commentGetOne_OK = (comment) => ({
  type: ActionTypes.COMMENT_GETONE_OK,
  comment: comment
});
export const commentGetOne_X = () => ({
  type: ActionTypes.COMMENT_GETONE_X,
});

export function fetchOneComment(commentId) {
  return async (dispatch, getState) => {

    dispatch(commentGetOne_REQ());
    
    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + "/comment/" + commentId,
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(commentGetOne_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(commentGetOne_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  }
};

// COMMENT DELETE ONE
export const commentDelete_REQ = () => ({
  type: ActionTypes.COMMENT_DELETE_REQ,
});
export const commentDelete_OK = () => ({
  type: ActionTypes.COMMENT_DELETE_OK,
});
export const commentDelete_X = () => ({
  type: ActionTypes.COMMENT_DELETE_X,
});

export function deleteComment(commentObject) {
  return async (dispatch, getState) => {

    dispatch(commentDelete_REQ());
    
    const ajaxRequest = {
      method: 'delete',
      url: API_ROOT + "/comment/" + commentObject.id,
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(commentDelete_OK());
        dispatch(fetchAllCommentsByIdeaId(commentObject.ideaId));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(commentDelete_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  }
};
