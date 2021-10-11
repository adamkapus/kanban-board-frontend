import React, { useState } from "react";

function Item(props) {

    const [data, setData] = useState(props.data);
  
  return (
    <div> 
        <h2 >
            {data.id} {data.name}
         </h2>
        <p>{data.description}</p>
        <p>{data.dueDate}</p>
  </div>


  );
}

export default Item;