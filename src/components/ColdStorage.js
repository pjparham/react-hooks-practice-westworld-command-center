import React from "react";
import HostList from "./HostList"
import { Segment } from "semantic-ui-react";

function ColdStorage({ hosts, setActiveHost, activeHost }) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">Cold Storage</h3>
      </Segment>
  <Segment compact>
        <HostList activeHost={activeHost} hosts={hosts} setActiveHost={setActiveHost} />
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
