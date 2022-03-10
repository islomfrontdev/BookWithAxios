import axios from "axios";
import * as types from "./actionType";
import { dispatch } from "./store";
export const loadBooks = () => () => {
  axios
    .get(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=TYLmTpa2waLuB6GrnEL0yW7s5mPsXrN9`
    )
    .then((resp) => {
      dispatch({
        type: types.GET_BOOKS,
        payload: resp.data.results,
      });
    })
    .catch((error) => console.log(error));
};
export const getSingleBook = (category) => () => {
  axios
    .get(
      `https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=TYLmTpa2waLuB6GrnEL0yW7s5mPsXrN9`
    )
    .then((resp) => {
      dispatch({
        type: types.GET_BOOK,
        payload: resp.data.results.books,
      });
    })
    .catch((error) => console.log(error));
};
export const searchBook = (name) => {
  dispatch({
    type: types.SET_SEARCH,
    payload: name,
  });
};
