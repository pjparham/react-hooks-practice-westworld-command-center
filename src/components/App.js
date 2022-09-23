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

  function handleUpdateHost(updatedHost){
    const updatedHosts = hosts.map((host) => {
      if (host.id === updatedHost.id) {
        return updatedHost
      } else {return host}
    });
    setHosts(updatedHosts)
  }

  return (
    <Segment id="app">
      <WestworldMap setAreas={setAreas} areas={areas}/>
      <Headquarters handleUpdateHost={handleUpdateHost} areas={areas} hosts={hosts}/>
    </Segment>
  );
}

export default App;
