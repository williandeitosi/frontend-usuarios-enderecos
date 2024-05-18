import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

export function Register() {
  const navigate = useNavigate();
  function handleRegisterDone() {
    return navigate('/');
  }

  return (
    <div className={styles.boxMain}>
      <div className={styles.boxLogin}>
        <h1>Register</h1>
        <div className={styles.boxInputs}>
          <div>
            <label htmlFor='email'>Email</label>
            <input required type='email' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input required type='password' />
          </div>
          <div>
            <label htmlFor='password'>Confirm Password</label>
            <input required type='password' />
          </div>
        </div>
        <button
          onClick={handleRegisterDone}
          className={`btn btn-outline-secondary ${styles.myBtn}`}
        >
          Register
        </button>
      </div>
    </div>
  );
}
