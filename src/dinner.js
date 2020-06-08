import React from 'react'
function Dinner(props){
    return(
    <div>
        <h1>Today we are serving {props.dishname}</h1>
        <h1>Today we are serving {props.dish1}</h1>
    </div>
    );
} 
export default Dinner;