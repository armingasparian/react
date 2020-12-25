import React from "react";
import { Route } from "react-router-dom";
import One from "./Pages/One.jsx";
import Two from "./Pages/Two.jsx";
import Three from "./Pages/Three.jsx";
import Four from "./Pages/Four.jsx";

export default function Switches() {
  return (
    <div id="switches">
      <Route path="/" exact>
        <One />
      </Route>
      <Route path="/two" exact>
        <Two />
      </Route>
      <Route path="/three" exact>
        <Three />
      </Route> 
      <Route path="/four" exact>
        <Four />
      </Route>      
    </div>
  );
}