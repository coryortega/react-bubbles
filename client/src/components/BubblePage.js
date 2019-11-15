import React, { useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

// import React, { useState } from "react";
// import axios from "axios";

function BubblePage() {

const [colorList, setColorList] = useState([])

    axios.get("http://localhost:5000/api/colors", {
        headers: { authorization: localStorage.getItem("token") }
    })
        .then(response => {setColorList(response.data)
        });
    
// const handleDelete = (id) => {

//         axios.delete(`http://localhost:5000/api/friends/${id}`,
//         {
//             headers: { authorization: localStorage.getItem("token") }
//             }) .then(res => { 
//             console.log(res);
//         })
//         .catch(err => console.log(err.response));
//     }

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