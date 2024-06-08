import { createStore } from "redux";

const BUY_INDOMIE = "BUY_INDOMIE";
const RESTOCK_INDOMIE = "RESTOCK_INDOMIE";
const BUY_LAYS = "BUY_LAYS";
const RESTOCK_LAYS = "RESTOCK_LAYS";

const initialState = {
  numOfIndomies: 100,
  lays: 50,
};

// action creator
function buyIndomie() {
  // action
  return {
    type: BUY_INDOMIE,
  };
}

function restockIndomie(qty) {
  return {
    type: RESTOCK_INDOMIE,
    payload: qty,
  };
}

function buyLays() {
  return {
    type: "BUY_LAYS",
  };
}

function restockLays(qty) {
  return {
    type: "RESTOCK_LAYS",
    payload: qty,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_INDOMIE:
      return {
        ...state,
        numOfIndomies: state.numOfIndomies - 1,
      };
    case RESTOCK_INDOMIE:
      return {
        ...state,
        numOfIndomies: state.numOfIndomies + action.payload,
      };
    case RESTOCK_LAYS: {
      return {
        ...state,
        lays: state.lays + action.payload,
      };
    }
    case BUY_LAYS: {
      return {
        ...state,
        lays: state.lays - 1,
      };
    }
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(buyIndomie());
store.dispatch(buyIndomie());
store.dispatch(buyIndomie());

store.dispatch(restockIndomie(100));

unsubscribe();

store.dispatch(buyIndomie());
