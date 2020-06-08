import React from 'react'

function Channel(props){
    return(
        <div>
            
            <h2>
                My Favourite Channels is:
            </h2>
            Drama channel is {props.ch1}
        <br/>
            Cricket channel is {props.ch2}
        <br></br>
            News channel is {props.ch3}
        <br></br>
            songs channel is {props.ch4}
        </div>
    );
}
export default Channel;