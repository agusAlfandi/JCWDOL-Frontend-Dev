import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import axios from "axios";

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

function fetchUser() {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUsersFailure(error.message));
    }
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    }
    case FETCH_USERS_FAILURE: {
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(fetchUser());

// unsubscribe();
