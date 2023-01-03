import {
  GET_REPO_PENDING,
  GET_REPO_SUCCESS,
  GET_REPO_ERROR,
} from "../types";

export const getUser = (name) => async (dispatch) => {
  dispatch({ type: GET_REPO_PENDING });
  fetch(`https://api.github.com/users/${name}/repos`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_REPO_SUCCESS,
        payload: data.items,
        total: data.items.length(),
      });
    })
    .catch((err) => {
      dispatch({ type: GET_REPO_ERROR, payload: err });
      console.log(err);
    });
};
