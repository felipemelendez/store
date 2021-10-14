import styles from "./App.module.css";
import Navigation from "./components/navigation/Navigation"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
