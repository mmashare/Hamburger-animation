import styles from "./hamburger.module.css"
import { useState } from "react"

function Hamburger() {
  const [toggle1,setToggle1] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.firstHamburgerContainer} onClick={()=>{
        setToggle1(!toggle1)
      }}>
      <div className={toggle1?styles.openFirstLine:styles.firstLine}  ></div>
      <div className={toggle1?styles.openSecondLine:styles.secondLine} ></div>
      <div className={toggle1?styles.openThirdLine:styles.thirdLine}></div>
      </div>
      </div>
  )
}

export default Hamburger