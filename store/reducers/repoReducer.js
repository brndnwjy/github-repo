import {
  GET_REPO_PENDING,
  GET_REPO_SUCCESS,
  GET_REPO_ERROR,
  GET_TOTAL_REPO_SUCCESS,
  GET_TOTAL_REPO_ERROR,
} from "../types";

const initialState = {
  repo: [],
  isLoading: false,
};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get User
    case GET_REPO_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_REPO_SUCCESS:
      return {
        ...state,
        repo: action.payload,
        isLoading: false,
      };

    case GET_REPO_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case GET_TOTAL_REPO_SUCCESS:
      return {
        ...state,
        total: action.total,
        isLoading: false,
      };

    case GET_TOTAL_REPO_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default repoReducer;
