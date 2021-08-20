import styles from './app.module.css';
import Currencies from './components/currencies';
const App = () => {
  return (
    <div className={styles.app}>
      <Currencies />
    </div>
  );
}

export default App;
