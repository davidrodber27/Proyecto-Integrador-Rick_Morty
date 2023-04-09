import { connect } from "react-redux";
import  Card   from '../Card/Card.jsx';
import { orderCards, filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styled from './favorites.module.css';

export function Favorites ({ myFavorites }) {

    const dispatch = useDispatch();

    const handleDispatch = (e) => {

        const { name, value } = e.target;

        if(name === 'order'){
            return dispatch(orderCards(value))
        }
        if(name === 'filter'){
            return dispatch(filterCards(value)) 
        }
    }
 


    return (
        <div>

            <div>
                <select className={`btn btn-outline-success ${styled['opc']}`}  name= 'order' onChange={handleDispatch}>
                    <option value= 'Ascendente'>Ascendente</option>
                    <option value= 'Descendente'>Descendente</option>
                </select>
                <select  className="btn btn-outline-success" name= 'filter' onChange={handleDispatch}>
                    <option value= 'Male'>Male</option>
                    <option value= 'Female'>Female</option>
                    <option value= 'Genderless'>Genderless</option>
                    <option value= 'Unknown'>Unknown</option>
                    
                </select>

            </div>
           
           <div className={`${styled.con}`}>
           {myFavorites?.map((character) => (

            <Card
            
             key = {character.name}
             id= {character.id}
             name={character.name}
             species={character.species}
             gender={character.gender}
             image={character.image}
    
            />
           ))}
          </div>

        </div>
    )

}

export function mapStateToProps (state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps, null)(Favorites)
