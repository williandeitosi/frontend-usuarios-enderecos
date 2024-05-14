import styles from './App.module.css';
import { Form } from './components/Form';

export function App() {
  return (
    <main className={`${styles.main} container`}>
      <Form />
    </main>
  );
}
