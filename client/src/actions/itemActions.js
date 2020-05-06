import * as actions from './actionTypes';

export const getItems = () => {
  return {
    type: actions.GET_ITEMS,
  };
};

export const deleteItems = (id) => {
  return {
    type: actions.DELETE_ITEM,
    payload: id
  };
};
