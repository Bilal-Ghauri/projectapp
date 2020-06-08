import React from 'react';
import Dinner from './dinner'
import Channel from './channels'
import Movie from './favmovie'

function App() {
  return(
    <div>
      <h1>Bilal Ghauri</h1>
      <Channel ch1="HUM" ch2="PTV Sports" ch3="GEO" ch4="Jalwa"/>
      <Dinner dishname="Chicken Karachi" dish1="Fish"/>
      <Dinner dishname="Chicken biryani" dish1="halwa"/>
      <Dinner dishname="Nihari" dish1="gajar ka halwa"/>
      <Movie m1="Extraction" m2="1920" m3="Tum bin2"/>
      
    </div>
  );
}

export default App;
