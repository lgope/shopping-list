import { v4 as uuidv4 } from 'uuid';
import * as actions from '../actions/actionTypes';

const initialState = {
  items: [
    { id: uuidv4(), name: 'Milk' },
    { id: uuidv4(), name: 'Vegetable' },
    { id: uuidv4(), name: 'Steak' },
    { id: uuidv4(), name: 'Water' },
    { id: uuidv4(), name: 'Candy' },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.GET_ITEMS:
      return {
        ...state,
      };
      
    case actions.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
}
