import { useState } from 'react'
import Hamburger from "./components/hambuger.jsx"
import styles from './App.module.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
   <Hamburger/>
    </div>
  )
}

export default App
