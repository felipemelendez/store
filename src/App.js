import styles from "./App.module.css";
import Navigation from "./components/navigation/Navigation"
import Footer from "./components/footer/Footer"
import styles from './App.module.css'
import JessNavigation from './components/jess_navigation/JessNavigation'


function App() {
  return (
    <div className={styles.appContainer}>
      <JessNavigation />
      <Navigation />
      <Footer />
      
    </div>
  );
}

export default App;
