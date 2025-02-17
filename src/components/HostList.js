import React from "react";
import Host from "./Host"
import { Card } from "semantic-ui-react";

function HostList({hosts, setActiveHost, activeHost}) {
  const displayHosts = hosts.map((host) => {
    return <Host activeHost={activeHost} setActiveHost={setActiveHost} key={host.id} host={host} />
  })
  return (
    <Card.Group itemsPerRow={6}>{displayHosts}</Card.Group>
  );
}

export default HostList;
