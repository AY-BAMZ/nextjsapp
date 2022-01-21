import React from "react"
import About from "../About/[About]"
import Home from "../Home/Home"
import Cart from "../Cart/Cart"

function Body({count}) {
    return (
        <div>
            
        <div className={styles.body}>
        {count === 1 && <Home />}
        {count === 2 && <Cart /> }
        {count === 3 && <About />}
      </div>
        </div>
        )
  
  
};
export default Body