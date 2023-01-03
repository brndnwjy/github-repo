import {
  GET_USER_ERROR,
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  EMPTY_USER,
  GET_USER_DETAIL_ERROR,
  GET_USER_DETAIL_PENDING,
  GET_USER_DETAIL_SUCCESS,
} from "../types";

const initialState = {
  users: [],
  total: 0,
  user: "",
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get User
    case GET_USER_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        total: action.total,
        isLoading: false,
      };

    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    //   Empty User
    case EMPTY_USER:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };

    // Get User Detail
    case GET_USER_DETAIL_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USER_DETAIL_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case GET_USER_DETAIL_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
