import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    return navigate('/client');
  }

  return (
    <div className={styles.boxMain}>
      <div className={styles.boxLogin}>
        <h1>Login</h1>
        <div className={styles.boxInputs}>
          <div>
            <label htmlFor='email'>Email</label>
            <input required type='email' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input required type='password' />
          </div>
        </div>
        <button
          onClick={handleLogin}
          className={`btn btn-outline-secondary ${styles.myBtn}`}
        >
          login
        </button>
        <Link to={'/register'}> + Register your account</Link>
      </div>
    </div>
  );
}
