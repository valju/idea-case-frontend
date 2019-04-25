import ActionTypes from './ActionTypes';
//import {fetchTestIdeas} from '../models/Test';
import axios from 'axios';
import {API_ROOT} from '../constants/AppConstants';

// ACTION CREATORS (Action object creator functions)
// ~ standard and only way to create each action object
export const ideasAll_REQ = () => ({
    type: ActionTypes.IDEAS_ALL_REQ,
});
export const ideasAll_OK = (ideaList) => ({
    type: ActionTypes.IDEAS_ALL_OK,
    ideaList: ideaList
});
export const ideasAll_X = () => ({
    type: ActionTypes.IDEAS_ALL_X,
});

// Helper function, real action function?
export function fetchAllIdeas() { 
    return async (dispatch, getState) => {
        dispatch(ideasAll_REQ());

        //const ideaList = //fetchTestIdeas();  // from mock "Back-end"
        const ajaxRequest = {
            method:'get',
            url: API_ROOT + '/idea/all'
        };
        
        axios(ajaxRequest)
        .then((response) => {
            dispatch(ideasAll_OK(response.data));
        })
        .catch((error)=> {
            console.error("Error: "+ error);
            dispatch(ideasAll_X());
        })
        .then( () => {
                return {type:null};  // 'Empty' action object
        });             
        
    }
};

// Same with other actions...
// Action object creator functions
export const ideaAdd_REQ = () => ({
    type: ActionTypes.IDEA_ADD_REQ,
});
export const ideaAdd_OK = () => ({
    type: ActionTypes.IDEA_ADD_OK,
});
export const ideaAdd_X = () => ({
    type: ActionTypes.IDEA_ADD_X,
});

// Helper function, real action function?
export function addIdea(idea) { 
    return async (dispatch, getState) => {
        dispatch(ideaAdd_REQ());
        console.dir(idea);
        
        // Here would be some async AJAX call with await...
        // ... or some promises or so
        const ajaxRequest = {
            method:'post',
            url: API_ROOT + '/idea',
            data: idea,
        };

        axios(ajaxRequest)
        .then((response) => {
            dispatch(ideaAdd_OK());
            dispatch(fetchAllIdeas());
        })
        .catch((error)=>{
            console.error("Error: " +error);
            dispatch(ideaAdd_X());
        })
        .then( () => {
            return {type:null};  // 'Empty' action object
        });   
    }
};

// deleteIdea coming later
// Action object creator functions
export const ideaDelete_REQ = (id) => ({
    type: ActionTypes.IDEA_DELETE_REQ,
    id:id,
});
export const ideaDelete_OK = () => ({
    type: ActionTypes.IDEA_DELETE_OK,
});
export const ideaDelete_X = () => ({
    type: ActionTypes.IDEA_DELETE_X,
});

// Helper function, real action function?
export function deleteIdea(id) { 
    return async (dispatch, getState) => {
        dispatch(ideaDelete_REQ(id));
        console.dir("Delete by this id: "+id);
        
        // Here would be some async AJAX call with await...
        // ... or some promises or so
        const ajaxRequest = {
            method:'delete',
            url: API_ROOT + '/idea/',
            
            params: {
                id:id,
            }
            
        };

        axios(ajaxRequest)
        .then((response) => {
            dispatch(ideaDelete_OK());
            dispatch(fetchAllIdeas());
        })
        .catch((error)=>{
            console.error("Error: " +error);
            dispatch(ideaDelete_X());
        })
        .then( () => {
            return {type:null};  // 'Empty' action object
        });   
    }
};

// Action object creator functions
export const ideaGetById_REQ = () => ({
    type: ActionTypes.IDEA_GETBYID_REQ,
});
export const ideaGetById_OK = (idea) => ({
    type: ActionTypes.IDEA_GETBYID_OK,
    idea: idea,
});
export const ideaGetById_X = () => ({
    type: ActionTypes.IDEA_GETBYID_X,
});

export function getIdea(id) { 
    return async (dispatch, getState) => {
        dispatch(ideaGetById_REQ());
        console.dir("getIdea by this id: "+id);
        
        // Here would be some async AJAX call with await...
        // ... or some promises or so
        const ajaxRequest = {
            method:'get',
            url: API_ROOT + '/Idea/' + id,
        };

        axios(ajaxRequest)
        .then((response) => {
            console.log(response);
            dispatch(ideaGetById_OK(response.data));
            //dispatch(fetchAllIdeas());
        })
        .catch((error)=>{
            console.error("Error: " +error);
            dispatch(ideaGetById_X());
        })
        .then( () => {
            return {type:null};  // 'Empty' action object
        });   
    }
};

// Action object creator functions
export const ideaUpdate_REQ = () => ({
    type: ActionTypes.IDEA_UPDATE_REQ,
});
export const ideaUpdate_OK = () => ({
    type: ActionTypes.IDEA_UPDATE_OK,
});
export const ideaUpdate_X = () => ({
    type: ActionTypes.IDEA_UPDATE_X,
});

// Helper function, real action function?
export function updateIdea(idea) { 
    return async (dispatch, getState) => {
        dispatch(ideaUpdate_REQ());
        console.dir(idea);
        
        // Here would be some async AJAX call with await...
        // ... or some promises or so
        const ajaxRequest = {
            method:'put',
            url: API_ROOT + '/idea',
            data: idea,
        };

        axios(ajaxRequest)
        .then((response) => {
            dispatch(ideaUpdate_OK());
            dispatch(fetchAllIdeas());
        })
        .catch((error)=>{
            console.error("Error: " +error);
            dispatch(ideaUpdate_X());
        })
        .then( () => {
            return {type:null};  // 'Empty' action object
        });   
    }
};

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