import styles from './App.module.css';
import { FormCustomer } from './components/FormCustomer/FormCustomer';
import { FormAddress } from './components/formAddress/FormAddress';

export function App() {
  return (
    <main className={`${styles.main} container`}>
      <FormAddress />
      <FormCustomer />
    </main>
  );
}
