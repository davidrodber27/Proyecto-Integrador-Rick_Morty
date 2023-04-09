import { useState } from 'react';




export default function SearchBar(props) {
   
   const [ character, setCharacter ] = useState("");

   const handleChange = (evento) => {
      
      const { value } = evento.target;
     
      setCharacter(value)   
   }
   
   
   return (
      <div className="d-flex" >
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
         <button onClick={() => props.onSearch(character)} className="btn btn-outline-success mx-2" type="submit">Agregar</button>
         <button onClick={() => props.addRandomCharacter()} className="btn btn-outline-success mx-2" type="search">Random</button>
         <button onClick={() => props.logout()} className="btn btn-outline-success mx-2" type="search">Logout</button>
      </div>
   );
}
