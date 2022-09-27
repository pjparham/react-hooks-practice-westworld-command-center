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

  // function handleUpdateHost(updatedHost, value){
  //   console.log('value', value)
  //   let areaHosts = hosts.filter((host) => host.area === value)
  //   let selectedArea = areas.filter((area) => area.name === value)
  //   console.log('from handleUpdateHost', areaHosts, selectedArea)
  //   if (areaHosts >= selectedArea[0].limit){

  //   }
  //   else{
  //     const updatedHosts = hosts.map((host) => {
  //       if (host.id === updatedHost.id) {
  //         return updatedHost
  //       } else {return host}
  //     });
  //     setHosts(updatedHosts)
  //   }
  //   // let filterArea = areas.filter((area) => area.name === value)
  //   // if (filterArea[0].limit )
  // }


  function handleUpdateHost(updatedHost, value){
    const updatedHosts = hosts.map((host) => {
      if (host.id === updatedHost.id) {
        return updatedHost
      } else {return host}
    });
    setHosts(updatedHosts)
  }


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
