import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosAuth"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

function BubblePage() {

const [colorList, setColorList] = useState([])



useEffect(() => {
    axiosWithAuth().get("http://localhost:5000/api/colors").then(response => {setColorList(response.data)})
      },[])
    
    return (
      <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
    )

}

export default BubblePage;
