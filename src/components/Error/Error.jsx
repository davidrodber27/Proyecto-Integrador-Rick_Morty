import styled from './error.module.css';


export default function Error() {

  return (
        
    <div className={`${styled.err}`}>
      <h2>Error</h2>
      <h1>404</h1>
      <p>La página que estás buscando no existe.</p>
    </div>
  );      
}