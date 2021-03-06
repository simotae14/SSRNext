import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from './data/data.json';

// create the initial state
const startState = {
  cards: []
}

// Actions
export const initialCards = () => {
  return {
    type: 'INITIALCARDS',
    cards: data
  };
}

export const addItem = item => {
  return {
    type: 'ADD',
    item
  };
}

// reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALCARDS':
      return {
        cards: action.cards
      };
    case 'ADD':
      return {
        ...state,
        // add the item to the actual state
        cards: [...state.cards, action.item]
      };
    default:
      return state;
  }
}

// create the initial store
export const initStore = (initialState = startState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}