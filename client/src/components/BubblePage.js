import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./axiosAuth"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

// import React, { useState } from "react";
// import axios from "axios";

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



// const BubblePage = () => {
//   const [colorList, setColorList] = useState([]);
//   // fetch your colors data from the server when the component mounts
//   // set that data to the colorList state property
//   axios.get("http://localhost:5000/api/colors", {
//     headers: { authorization: localStorage.getItem("token") }
// })
//     .then(response => {setColorList(response.data)
//     });

//   return (
//     <>
//       <ColorList colors={colorList} updateColors={setColorList} />
//       <Bubbles colors={colorList} />
//     </>
//   );
// };

// export default BubblePage;