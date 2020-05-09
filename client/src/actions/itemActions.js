import axios from 'axios';
import * as actions from './actionTypes';
import { returnErrors } from './errorActions';
import { tokenConfig } from './authActions';

export const addItem = item => (dispatch, getState) => {
  axios
    .post('/api/items', item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: actions.ADD_ITEM,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: actions.GET_ITEMS,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItems = id => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: actions.DELETE_ITEM,
        payload: id,
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: actions.ITEMS_LOADING,
  };
};
