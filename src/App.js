import Navigation from "./components/navigation/Navigation"
import Footer from "./components/footer/Footer"
import styles from './App.module.css'
import JessNavigation from './components/jess_navigation/JessNavigation'
import FelipeBody from './components/felipe_body/FelipeBody'


function App() {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      <FelipeBody />
      <Footer />
    </div>
  );
}

export default App;
