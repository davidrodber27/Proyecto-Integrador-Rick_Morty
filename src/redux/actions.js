import { ADD_CHARACTER_TO_FAVORITES, REMOVE_CHARACTER_FROM_FAVORITES, FILTER, ORDER } from "./types";

export function addCharacterToFavorites (character)  {
   
  return {
    type: ADD_CHARACTER_TO_FAVORITES,
    payload:character
  };
}

export function removeCharacterFromFavorites (id) {
    
  return {
    type: REMOVE_CHARACTER_FROM_FAVORITES,
    payload: id
  }
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