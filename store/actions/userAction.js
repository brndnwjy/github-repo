import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  EMPTY_USER,
  GET_USER_DETAIL_PENDING,
  GET_USER_DETAIL_SUCCESS,
  GET_USER_DETAIL_ERROR,
} from "../types";

export const getUser = (search) => async (dispatch) => {
  dispatch({ type: GET_USER_PENDING });
  fetch(`https://api.github.com/search/users?q=${search}&per_page=5`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: GET_USER_SUCCESS, payload: data.items, total: data.total_count });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_ERROR, payload: err });
      console.log(err);
    });
};

export const emptyUser = () => async (dispatch) => {
  dispatch({ type: EMPTY_USER, payload: [] });
};

export const getUserDetail = (url) => async (dispatch) => {
  dispatch({ type: GET_USER_DETAIL_PENDING });
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: GET_USER_DETAIL_SUCCESS, payload: data.items });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_DETAIL_ERROR, payload: err });
      console.log(err);
    });
};
