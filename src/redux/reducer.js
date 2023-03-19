import { ADD_CHARACTER_TO_FAVORITES,REMOVE_CHARACTER_FROM_FAVORITES, FILTER, ORDER } from "./types";


const initialState = {

  myFavorites: [],
  allCharacters:[]
}

const rootReducer = (state=initialState,{ type, payload }) => {

   switch(type) {

     case ADD_CHARACTER_TO_FAVORITES: 
       
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        myFavorites: [...state.myFavorites, payload]
      }

     case REMOVE_CHARACTER_FROM_FAVORITES: 
       
      return {
        ...state,
        myFavorites: state.myFavorites.filter((element) => element.id !== payload)
      }

      case FILTER:
        const filterCopy = [...state.allCharacters];

        const filter = filterCopy.filter(char => char.gender === payload);

        return {
          ...state,
          myFavorites: filter,
        }
        

      case ORDER:

        const orderCopy = [...state.allCharacters];
        const order = orderCopy.sort((a,b) => {

          if( a.id > b.id ) {
            return payload === 'Ascendente' ? 1 : -1
          }
          if( a.id < b.id ) {
            return payload === 'Ascendente' ? -1 :1
          }else{
            return 0
          }
        });

        return {
          ...state,
          myFavorites: order
        }

      default:
      return state   
  }
};

export default rootReducer;