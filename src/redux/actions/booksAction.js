import axios from "axios";
import { DATABASE_URL } from "../../firebase/firebaseConfig";

export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const ADD_BOOK_TO_USER_LIST = "ADD_BOOK_TO_USER_LIST";
export const FETCH_MY_BOOKS = "FETCH_MY_BOOKS";
export const UPDATE_BOOK_STATUS = "UPDATE_BOOK_STATUS";
export const UPDATE_BOOK_RATING = "UPDATE_BOOK_RATING";

export const fetchBooks = () => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });
  try {
    const response = await axios.get(`${DATABASE_URL}/books.json`);
    const books = Object.keys(response.data).map((id) => ({ id, ...response.data[id] }));
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: books });
  } catch (error) {
    dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
  }
};

export const fetchMyBooks = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${DATABASE_URL}/users/${userId}/myBooks.json`);
    const myBooks = response.data ? Object.keys(response.data).map((id) => ({ id, ...response.data[id] })) : [];
    dispatch({ type: FETCH_MY_BOOKS, payload: myBooks });
  } catch (error) {
    console.error("Error fetching user books:", error);
  }
};

export const addBookToUserList = (userId, book) => async (dispatch) => {
  try {
    await axios.put(`${DATABASE_URL}/users/${userId}/myBooks/${book.id}.json`, book);
    dispatch({ type: ADD_BOOK_TO_USER_LIST, payload: book });
  } catch (error) {
    console.error("Error adding book:", error);
  }
};

export const updateBookStatus = (userId, bookId, status) => async (dispatch) => {
  try {
    await axios.patch(`${DATABASE_URL}/users/${userId}/myBooks/${bookId}.json`, { status });
    dispatch({ type: UPDATE_BOOK_STATUS, payload: { bookId, status } });
  } catch (error) {
    console.error("Error updating book status:", error);
  }
};

export const updateBookRating = (userId, bookId, rating) => async (dispatch) => {
  try {
    await axios.patch(`${DATABASE_URL}/users/${userId}/myBooks/${bookId}.json`, { rating });
    dispatch({ type: UPDATE_BOOK_RATING, payload: { bookId, rating } });
  } catch (error) {
    console.error("Error updating book rating:", error);
  }
};