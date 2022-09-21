import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage"
import LogPanel from "./LogPanel";
import "../stylesheets/Headquarters.css";

function Headquarters({ hosts }) {
  const [activeHost, setActiveHost] = useState({})
  console.log(activeHost)
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage setActiveHost={setActiveHost} hosts={hosts}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details host={activeHost}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
