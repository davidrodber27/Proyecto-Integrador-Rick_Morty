import { useState } from 'react';
import validation from './validation.js';
import styles from './form.module.css';
import imagenes from'../../imagenes/Rick-and-Morty.png'


export default function Form (props) {
    
    const [userData, setUserData] = useState({ 
        username:'', 
        password:''
    });

    const [errors, setErrors] = useState({
        username:'', 
        password:''  
    });

    function handleInputChange (e) {

        setUserData ({
            ...userData,
            [e.target.name]: e.target.value
        })

        setErrors(
            validation({
                ...userData,
                [e.target.name]:e.target.value
            })
        )
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        props.login(userData)
    }


    return ( 


       <div>

            <img src={imagenes} className={`${styles.imagenHead}`} alt="Mi Imagen" />
        

           <form onSubmit={handleSubmit} >
           
            <input 
             placeholder="Ingresa tu Email."
             type="text" 
             name='username'
             value={userData.username}
             onChange={handleInputChange}
             className= {`${styles.input}`}
            />
            <p className='danger'>{errors.username}</p>

            <input 
             placeholder="Ingresa tu contrasena."
             type="password" 
             name='password'
             value={userData.password}
             onChange={handleInputChange}
             className= {`${styles.input}`}
            />
            <p className='danger'>{errors.password}</p>

           <button  className="btn btn-outline-success" type="submit">Login</button>
          </form>     
           
       </div>
    );
}