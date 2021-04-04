import React, { Fragment } from "react";
import table from "../imgs/home.png";
import baby from "../imgs/baby.jpg"



export default function Home() {

    return (

    <Fragment>
          <img src={table} alt="home" style={{ display: "block",marginLeft: "auto",marginRight: "auto",width: "60%",}}  />
            
          <img src={baby} alt="home" style={{ display: "block",marginLeft: "auto",marginRight: "auto",width: "80%",}} />
    </Fragment>
        
    )
}
