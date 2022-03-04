import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';

function Login() {
  // const [formValue, setFormValue] = useState({
  //   email: '',
  //   password: '',
  //   username: '',
  // });
  const { formValue, setFormValue } = useContext(MyContext);
  const { email, password, username } = formValue;
  const history = useHistory();

  const disabledButton = () => {
    const minValuePassword = 6;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailTest = emailRegex.test(email);
    return (!(emailTest && password.length > minValuePassword && username.length > 0));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    history.push('/menu');
  };

  return (
    <form>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          onChange={ handleChange }
          value={ username }
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          onChange={ handleChange }
          value={ email }
          autoComplete="username"
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          onChange={ handleChange }
          value={ password }
          autoComplete="current-password"
        />
      </label>
      <button
        type="button"
        name="submitButton"
        disabled={ disabledButton() }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
