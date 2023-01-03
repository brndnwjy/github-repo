import { GET_REPO_ERROR, GET_REPO_PENDING, GET_REPO_SUCCESS } from "../types";

const initialState = {
  reposs: [],
  total: 0,
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
        repos: action.payload,
        total: action.total,
        isLoading: false,
      };

    case GET_REPO_ERROR:
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
