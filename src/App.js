import React from "react";
import ListCard from './Components/ListCard';
import ManuBar from './Components/ManuBar';
import FootBar from './Components/FootBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className = "Manubar">
       <ManuBar/>
     </div>
      <div className = "Listcard">
       <ListCard/> 
       <ListCard/> 
       <ListCard/> 
      </div>
      <div className = "Footer">
      <FootBar/>
      </div>
    </div>
  );
}

export default App;
