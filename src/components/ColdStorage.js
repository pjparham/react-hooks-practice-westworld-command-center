import React from "react";
import HostList from "./HostList"
import { Segment } from "semantic-ui-react";

function ColdStorage({ hosts, setActiveHost }) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
  <Segment compact>
        <HostList hosts={hosts} setActiveHost={setActiveHost} />
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
