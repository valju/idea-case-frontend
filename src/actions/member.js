import ActionTypes from "./ActionTypes";
import axios from "axios";
import { API_ROOT } from "../constants/AppConstants";

//Action Types dispatch for the helper functions
export const membersAll_REQ = () => ({
  type: ActionTypes.MEMBER_ALL_REQ
});
export const membersAll_OK = memberList => ({
  type: ActionTypes.MEMBER_ALL_OK,
  memberList: memberList
});
export const membersAll_X = () => ({
  type: ActionTypes.MEMBER_ALL_X
});

// Helper function, real action function?
export function fetchAllMembers() {
  return async (dispatch, getState) => {
    dispatch(membersAll_REQ());

    const ajaxRequest = {
      method: "get",
      url: API_ROOT + "/member/all"
    };

    axios(ajaxRequest)
      .then(response => {
        dispatch(membersAll_OK(response.data));
      })
      .catch(error => {
        console.error("Error: " + error);
        dispatch(membersAll_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  };
}

// Same with other actions...
// Action object creator functions
export const memberAdd_REQ = () => ({
  type: ActionTypes.MEMBER_ADD_REQ
});
export const memberAdd_OK = () => ({
  type: ActionTypes.MEMBER_ADD_OK
});
export const memberAdd_X = () => ({
  type: ActionTypes.MEMBER_ADD_X
});

// Helper function, real action function?
export function addMember(members) {
  return async (dispatch, getState) => {
    dispatch(memberAdd_REQ());
    console.dir(members);

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: "post",
      url: API_ROOT + "/member",
      data: members
    };

    axios(ajaxRequest)
      .then(response => {
        dispatch(memberAdd_OK());
        dispatch(fetchAllMembers());
      })
      .catch(error => {
        console.error("Error: " + error);
        dispatch(memberAdd_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  };
}

// deleteCategory coming later
// Action object creator functions
export const memberDelete_REQ = id => ({
  type: ActionTypes.MEMBER_DELETE_REQ,
  id: id
});
export const memberDelete_OK = () => ({
  type: ActionTypes.MEMBER_DELETE_OK
});
export const memberDelete_X = () => ({
  type: ActionTypes.MEMBER_DELETE_X
});

// Helper function, real action function?
export function deleteMember(id) {
  return async (dispatch, getState) => {
    dispatch(memberDelete_REQ(id));
    console.dir("Delete by this id: " + id);

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: "delete",
      url: API_ROOT + "/member/" + id
      /*
				  params: {
					  id:id,
				  }
				  */
    };

    axios(ajaxRequest)
      .then(response => {
        dispatch(memberDelete_OK());
        dispatch(fetchAllMembers());
      })
      .catch(error => {
        console.error("Error: " + error);
        dispatch(memberDelete_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  };
}

// Action object creator functions
export const memberGetById_REQ = () => ({
  type: ActionTypes.MEMBER_GETBYID_REQ
});
export const memberGetById_OK = member => ({
  type: ActionTypes.MEMBER_GETBYID_OK,
  member: member
});
export const memberGetById_X = () => ({
  type: ActionTypes.MEMBER_GETBYID_X
});

export function getMember(id) {
  return async (dispatch, getState) => {
    dispatch(memberGetById_REQ());
    console.dir("Delete by this id: " + id);

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: "get",
      url: API_ROOT + "/member",
      params: {
        id: id
      }
    };

    axios(ajaxRequest)
      .then(response => {
        dispatch(memberGetById_OK(response.data));
        //dispatch(fetchAllCategories());
      })
      .catch(error => {
        console.error("Error: " + error);
        dispatch(memberGetById_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  };
}

// Action object creator functions
export const memberUpdate_REQ = () => ({
  type: ActionTypes.MEMBER_UPDATE_REQ
});
export const memberUpdate_OK = () => ({
  type: ActionTypes.MEMBER_UPDATE_OK
});
export const memberUpdate_X = () => ({
  type: ActionTypes.MEMBER_UPDATE_X
});

// Helper function, real action function?
export function updateMember(member) {
  return async (dispatch, getState) => {
    dispatch(memberUpdate_REQ());
    console.dir(member);

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: "put",
      url: API_ROOT + "/member",
      data: member
    };

    axios(ajaxRequest)
      .then(response => {
        dispatch(memberUpdate_OK());
        dispatch(fetchAllMembers());
      })
      .catch(error => {
        console.error("Error: " + error);
        dispatch(memberUpdate_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  };
}

// Same with other actions...
// Action object creator functions
/*
export const categoryRandomized_REQ = () => ({
    type: ActionTypes.CATEGORY_RANDOMIZED_REQ,
});
export const categoryRandomized_OK = (id) => ({
    type: ActionTypes.CATEGORY_RANDOMIZED_OK,
    id: id,
});
export const categoryRandomized_X = () => ({
    type: ActionTypes.CATEGORY_RANDOMIZED_X,
});

// Helper function, real action function?
export function randomizeCategory() {
    return async (dispatch, getState) => {
        dispatch(categoryRandomized_REQ());
        // Here would be some async AJAX call with await...
        // ... or some promises or so
        const categoryList = (getState()).categories.categoryList;
        //const {categoryList} = getState().categories;
        console.dir(categoryList);

        if(!categoryList || categoryList.length ===0) {
            dispatch(categoryRandomized_X());
        } else {
            let randomizedId = Math.floor(Math.random*categoryList.length);
            dispatch(categoryRandomized_OK(randomizedId));
        }
    }
};
*/
