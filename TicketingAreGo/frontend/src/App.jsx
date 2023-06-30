import React from 'react';
import MainPage from './components/MainPage/MainPage';
import styles from './App.module.css'
import Headers from "./components/Headers/Headers";

function App() {
  return (
    <div className={styles.app}>
      <Headers></Headers>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
