import React from 'react'
function Dinner(props){
    return(
    <div>
        <br/>
        <h2>My Dinner Status is: </h2>
        
        I like  {props.dishname}
        <br></br>
        I like {props.dish1}
    </div>

    );
} 
export default Dinner;