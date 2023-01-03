import {
  GET_REPO_PENDING,
  GET_REPO_SUCCESS,
  GET_REPO_ERROR,
  GET_TOTAL_REPO_SUCCESS,
  GET_TOTAL_REPO_ERROR,
} from "../types";

export const getRepo = (name) => async (dispatch) => {
  dispatch({ type: GET_REPO_PENDING });
  fetch(`https://api.github.com/users/${name}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_TOTAL_REPO_SUCCESS,
        total: data.public_repos,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_TOTAL_REPO_ERROR, payload: err });
      console.log(err);
    });

  fetch(`https://api.github.com/users/${name}/repos`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_REPO_SUCCESS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_REPO_ERROR, payload: err });
      console.log(err);
    });
};
