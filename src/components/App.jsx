import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import '../assets/App.css';
import Menu from "./Menu";
import Switches from '../components/Switches.jsx';

export default function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switches />
      </Router>
    </div>
  );
}