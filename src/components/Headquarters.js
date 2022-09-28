import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage"
import LogPanel from "./LogPanel";
import "../stylesheets/Headquarters.css";

function Headquarters({ hosts, areas, handleUpdateHost, activeHost, setActiveHost, allHosts }) {
  const [logs, setLogs] = useState([])

//we pass down all hosts with allHosts prop because hosts is passing down cold storage hosts

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage activeHost={activeHost} setActiveHost={setActiveHost} hosts={hosts}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details handleUpdateHost={handleUpdateHost} areas={areas} hosts={allHosts} host={activeHost}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel handleUpdateHost={handleUpdateHost} hosts={allHosts} logs={logs} setLogs={setLogs}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
