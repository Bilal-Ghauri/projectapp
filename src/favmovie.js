import React from 'react'

function Movie(props){
    return(
        <div>
            <br/>
            <h2>My Favourite movie is:</h2>
            
            My Favourite movie is {props.m1}
            <br/>
            My favourite horror movie is {props.m2}
            <br/>
            my favourite sad movie is {props.m3}
        </div>
    );
}
export default Movie;