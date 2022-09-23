import React, { useEffect } from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ areas, setAreas, hosts, activeHost, setActiveHost }) {
  useEffect(() => {
    fetch(`http://localhost:3001/areas`)
    .then((r) => r.json())
    .then((areaData) => setAreas(areaData))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const displayAreas = areas.map((area) => {
    const areaHosts = hosts.filter((host) => host.area === area.name)
    return <Area activeHost={activeHost} setActiveHost={setActiveHost} hosts={areaHosts} key={area.id} area={area}/>
  })

  return <Segment id="map">{displayAreas}</Segment>;
}

export default WestworldMap;
