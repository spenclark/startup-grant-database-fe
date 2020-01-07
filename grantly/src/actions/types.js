// All action types defined here and imported into the actions index

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const SELECT_GRANT = "SELECT_GRANT";
export const CHANGE_TAB = "CHANGE_TAB";
//Filter Type
export const FILTER_SAVE = "FILTER_SAVE";
export const FILTER_GRANTS = "FILTER_GRANTS";
export const FILTER_GRANTS_RESET = "FILTER_GRANTS_RESET";

// Submit a Grant
export const ADD_GRANT_START = "ADD_GRANT_START";
export const ADD_GRANT_SUCCESS = "ADD_GRANT_SUCCESS";
export const ADD_GRANT_FAILURE = "ADD_GRANT_FAILURE";

export const CHECK_ADMIN = "CHECK_ADMIN";
export const SET_USER = "SET_USER";
export const SET_TOKEN_IN_STORE = "SET_TOKEN_IN_STORE";
// Submit a grant suggestion
export const SUBMIT_SUGGESTION_START = "SUBMIT_SUGGESTION_START";
export const SUBMIT_SUGGESTION_SUCCESS = "SUBMIT_SUGGESTION_SUCCESS";
export const SUBMIT_SUGGESTION_FAILURE = "SUBMIT_SUGGESTION_FAILURE";

// Delete a grant suggestion
export const DELETE_SUGGESTION_START = "DELETE_SUGGESTION_START";
export const DELETE_SUGGESTION_SUCCESS = "DELETE_SUGGESTION_SUCCESS";
export const DELETE_SUGGESTION_FAILURE = "DELETE_SUGGESTION_FAILURE";

// Update a Grant
export const UPDATE_GRANT_START = "UPDATE_GRANT_START";
export const UPDATE_GRANT_SUCCESS = "UPDATE_GRANT_SUCCESS";
export const UPDATE_GRANT_FAILURE = "UPDATE_GRANT_FAILURE";

//  Delete a Grant
export const DELETE_GRANT_START = "DELETE_GRANT_START";
export const DELETE_GRANT_SUCCESS = "DELETE_GRANT_SUCCESS";
export const DELETE_GRANT_FAILURE = "DELETE_GRANT_FAILURE";

// Get Suggestions by Grant ID

export const GET_SUGGESTIONS_START = "GET_SUGGESTIONS_START";
export const GET_SUGGESTIONS_SUCCESS = "GET_SUGGESTIONS_SUCCESS";
export const GET_SUGGESTIONS_FAILURE = "GET_SUGGESTIONS_FAILURE";

// Submit Favorite Grants

export const SUBMIT_FAVORITE_START = "SUBMIT_FAVORITE_START";
export const SUBMIT_FAVORITE_SUCCESS = "SUBMIT_FAVORITE_SUCCESS";
export const SUBMIT_FAVORITE_FAILURE = "SUBMIT_FAVORITE_FAILURE";

// Get Favorite Grants

export const GET_FAVORITE_START = "GET_FAVORITE_START";
export const GET_FAVORITE_SUCCESS = "GET_FAVORITE_SUCCESS";
export const GET_FAVORITE_FAILURE = "GET_FAVORITE_FAILURE";
export const SELECT_FAVORITE = "SELECT_FAVORITE";

// Delete a Favorite Grants
export const DELETE_FAVORITE_START = "DELETE_FAVORITE_START";
export const DELETE_FAVORITE_SUCCESS = "DELETE_FAVORITE_SUCCESS";
export const DELETE_FAVORITE_FAILURE = "DELETE_FAVORITE_FAILURE";
