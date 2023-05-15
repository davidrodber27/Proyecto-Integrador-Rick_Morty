import { ADD_CHARACTER_TO_FAVORITES, REMOVE_CHARACTER_FROM_FAVORITES, FILTER, ORDER } from "./types";
import axios from 'axios';

export function addCharacterToFavorites (character)  {
   
  
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
          type: ADD_CHARACTER_TO_FAVORITES,
          payload: data,
        });
      });
    };
 
}

export function removeCharacterFromFavorites (id) {
    
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_CHARACTER_FROM_FAVORITES,
        payload: data,
      });
    });
  };
};

export function filterCards (status) {
    
  return {
    type: FILTER,
    payload: status
  }
};

export function orderCards(id) {
    
  return {
    type: ORDER,
    payload:id
  }
};