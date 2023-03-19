
import { Link } from 'react-router-dom';
import { addCharacterToFavorites, removeCharacterFromFavorites } from '../../redux/actions';
import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import styles from'./card.module.css';




 function Card (props) {
  
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {

    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.id]);

  function handleFavorite (){

    if (isFav === true) {
      setIsFav(false)
      props.removeFavorite(props.id)
    } else {
      setIsFav(true)
      props.addFavorite(props)
    }

  }
 
  return (
    
    <div className={`${styles.container}`}>
    <div className={`${styles.card}`}>

      

      <img className={`${styles.img}`} src={props.image} alt="Imagen not found" ></img> 
         
      <Link to={`/detail/${props.id}`} className={`${styles.li}`} >
        <h1 className={`${styles.titulo}`}>{props.name}</h1>
      </Link>
        
      <h2 className={`${styles.des}`}>{props.species}</h2>

      <h2 className={`${styles.des}`}>{props.gender}</h2>

      {isFav ? (
        <button  onClick={handleFavorite} className="btn btn-outline-success">
          Remove from favorites
        </button>
      ) : (
        <button onClick={handleFavorite} className="btn btn-outline-success">
          Add to favorites
        </button>
      )}
      
      <button className={`btn btn-outline-success ${styles['botonclo']}`}  onClick={props.onClose}>Cerrar</button>

       
    </div>
    </div>
  
  );
}

export function mapStateToProps (state) {
  
  return{
    myFavorites: state.myFavorites
  }    
}
  
export function mapDispatchToProps (dispatch)  {
  
  return {

    addFavorite: function (character) {
      dispatch(addCharacterToFavorites(character))
    },

    removeFavorite: function (id) {
      dispatch(removeCharacterFromFavorites(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);