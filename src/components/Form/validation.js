

export default function validate(inputs) {

  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  if (!regexEmail.test(inputs.username)){
    errors.username = "Debe ser un correo electrónico"
  }
    
  if (!inputs.username) {
    errors.username = "Por favor complete este campo"
  }
    
  if (inputs.username.length > 35) {
    errors.username = "El nombre de usuario no puede tener más de 35 caracteres."
  }

  if (!regexPassword.test(inputs.password)){
    errors.password = "La contraseña tiene que tener al menos un número"
  }

  if (inputs.password.length < 6 && inputs.password.length > 10 ){
    errors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres"
  }
    
  return errors;
  
}