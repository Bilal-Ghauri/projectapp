import React from 'react';
import Dinner from './dinner'

function App() {
  return(
    <div>
      <h1>Bilal Ghauri</h1>
      <Dinner dishname="Chicken Karachi" dish1="Fish"/>
      <Dinner dishname="Chicken biryani" dish1="halwa"/>
      <Dinner dishname="Nihari" dish1="gajar ka halwa"/>
    </div>
  );
}

export default App;
