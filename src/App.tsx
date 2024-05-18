import styles from './App.module.css';
import { Login } from './components/login/Login';

export function App() {
  return (
    <main className={`${styles.main}`}>
      <Login />
    </main>
  );
}
