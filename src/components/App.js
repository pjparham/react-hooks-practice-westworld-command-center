import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters";

function App() {
  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/hosts')
    .then((r)=>r.json())
    .then((hostData) => setHosts(hostData))
  }, [])

  return (
    <Segment id="app">
      <WestworldMap setAreas={setAreas} areas={areas}/>
      <Headquarters hosts={hosts}/>
    </Segment>
  );
}

export default App;
