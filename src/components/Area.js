import React from "react";
import HostList from "./HostList";
import "../stylesheets/Area.css";


function Area({ area, hosts, setActiveHost, activeHost }) {

  function humanize(str) {
    var i, frags = str.split('_');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }

  return (
    <div
      className="area"
      id={area.name}
    >
      <h3 className="labels">
        {humanize(area.name)}
      </h3>
      <HostList activeHost={activeHost} setActiveHost={setActiveHost} hosts={hosts} />
    </div>
  );
}

export default Area;
