import ActionTypes from './ActionTypes';
//import {fetchTestCategories} from '../models/Test';
import axios from 'axios';
import {API_ROOT} from '../constants/AppConstants';

// ACTION CREATORS (Action object creator functions)
// ~ standard and only way to create each action object
export const membersAll_REQ = () => ({
    type: ActionTypes.MEMBERS_ALL_REQ,
});
export const membersAll_OK = (memberList) => ({
    type: ActionTypes.MEMBERS_ALL_OK,
    memberList: memberList
});
export const membersAll_X = () => ({
    type: ActionTypes.MEMBERS_ALL_X,
});

// Helper function, real action function?
export function fetchAllmembers() { 
    return async (dispatch, getState) => {
        dispatch(membersAll_REQ());

        //const categoryList = //fetchTestCategories();  // from mock "Back-end"
        const ajaxRequest = {
            method:'get',
            url: API_ROOT + '/member/all'
        };
        
        axios(ajaxRequest)
        .then((response) => {
            dispatch(membersAll_OK(response.data));
        })
        .catch((error)=> {
            console.error("Error: "+ error);
            dispatch(membersAll_X());
        })
        .then( () => {
                return {type:null};  // 'Empty' action object
        });             
        
    }
};

// delete Member
// Action object creator functions
export const memberDelete_REQ = (id) => ({
  type: ActionTypes.MEMBERS_DELETE_REQ,
  id:id,
});
export const memberDelete_OK = () => ({
  type: ActionTypes.MEMBERS_DELETE_OK,
});
export const memberDelete_X = () => ({
  type: ActionTypes.MEMBERS_DELETE_X,
});


// Helper function, real action function?
export function deleteMember(id) { 
  return async (dispatch, getState) => {
      dispatch(memberDelete_REQ(id));
      console.dir("Delete by this id: "+id);
      
      // Here would be some async AJAX call with await...
      // ... or some promises or so
      const ajaxRequest = {
          method:'delete',
          url: API_ROOT + '/member/'+id,
          /*
          params: {
              id:id,
          }
          */
      };

      axios(ajaxRequest)
      .then((response) => {
          dispatch(memberDelete_OK());
          dispatch(fetchAllmembers());
      })
      .catch((error)=>{
          console.error("Error: " +error);
          dispatch(memberDelete_X());
      })
      .then( () => {
          return {type:null};  // 'Empty' action object
      });   
  }
};