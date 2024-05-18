import styles from './Login.module.css';

export function Login() {
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
        <button className={`btn btn-outline-secondary ${styles.myBtn}`}>
          login
        </button>
        <a href=''> + Register your account</a>
      </div>
    </div>
  );
}
