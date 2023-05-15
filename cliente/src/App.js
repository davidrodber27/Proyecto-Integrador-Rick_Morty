import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail.jsx'
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import Error from './components/Error/Error.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';




function App () {

  const [ characters, setCharacters ] = useState ([]);
  const location = useLocation(); 
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  
  function login(userData) {
    const { username: email, password } = userData;
    console.log(email, password);
    const URL = 'http://localhost:3001/rickandmorty/login';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
  }

  useEffect(() => {
    !access && navigate();
  }, [access, navigate]);

  function logout() {
    navigate('/');
  }
  
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!characters.some((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('Este personaje ya fue agregado');
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function addRandomCharacter() {
    const randomCharacterId = Math.floor(Math.random() * 826) + 1;
    fetch(`https://rickandmortyapi.com/api/character/${randomCharacterId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!characters.some((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('Este personaje ya fue agregado');
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
  setCharacters(characters.filter(character => character.id !== id))
  }

  
  
  return (

    <div className='App'>

      {location.pathname !== '/' && <Navbar logout={logout} addRandomCharacter={addRandomCharacter} onSearch = {onSearch}/>}
      <Routes>
       
        <Route exact path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters = {characters} onClose = {onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route  path='*' element={<Error/>}/>
       
      </Routes>
    </div>
  )
}

export default App
