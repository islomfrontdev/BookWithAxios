import * as types from "./actionType";

const initialState = {
  books: [],
  book: {},
  loading: false,
  search: "",
};
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOOKS: {
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    }

    case types.GET_BOOK: {
      return {
        ...state,
        book: action.payload,
        loading: false,
      };
    }
    case types.SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
export default booksReducer;
