import { createStore } from "redux";

const UPDATE_STREET = "UPDATE_STREET";

const initialState = {
  name: "John Doe",
  address: {
    street: "123 Main Street",
    city: "Springfield",
    country: "USA",
  },
};

function updateStreet(newStreet) {
  return {
    type: "UPDATE_STREET",
    payload: newStreet,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STREET:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(updateStreet("Jl. Jend. Sudirman No. 1"));

unsubscribe();
