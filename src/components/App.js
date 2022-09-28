import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters";

function App() {
  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])
  const [activeHost, setActiveHost] = useState({})

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

  // console.log(hosts)


  const coldStorageHosts = hosts.filter((host) => host.active === false)
  const activeHosts = hosts.filter((host) => host.active === true)

  return (
    <Segment id="app">
      <WestworldMap 
        activeHost={activeHost} 
        setActiveHost={setActiveHost} 
        setAreas={setAreas} 
        areas={areas} 
        hosts={activeHosts}
      />
      <Headquarters 
        activeHost={activeHost} 
        setActiveHost={setActiveHost} 
        handleUpdateHost={handleUpdateHost} 
        areas={areas} 
        hosts={coldStorageHosts}
        allHosts={hosts}
      />
    </Segment>
  );
}

export default App;
