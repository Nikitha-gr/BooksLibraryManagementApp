import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    ADD_BOOK_TO_USER_LIST,
    FETCH_MY_BOOKS,
    UPDATE_BOOK_STATUS,
    UPDATE_BOOK_RATING,
  } from "../actions/booksAction";
  
  const initialState = {
    books: [],
    myBooks: [],
    loading: false,
    error: null,
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BOOKS_REQUEST:
        return { ...state, loading: true };
      case FETCH_BOOKS_SUCCESS:
        return { ...state, loading: false, books: action.payload };
      case FETCH_BOOKS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case FETCH_MY_BOOKS:
        return { ...state, myBooks: action.payload };
      case ADD_BOOK_TO_USER_LIST:
        return { ...state, myBooks: [...state.myBooks, action.payload] };
      case UPDATE_BOOK_STATUS:
        return {
          ...state,
          myBooks: state.myBooks.map((book) =>
            book.id === action.payload.bookId ? { ...book, status: action.payload.status } : book
          ),
        };
      case UPDATE_BOOK_RATING:
        return {
          ...state,
          myBooks: state.myBooks.map((book) =>
            book.id === action.payload.bookId ? { ...book, rating: action.payload.rating } : book
          ),
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;