import React from "react";
import HostList from "./HostList";
import "../stylesheets/Area.css";


function Area({ area, hosts, setActiveHost, activeHost }) {
  const { id, name, limit, auth_req} = area

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

// Area.propTypes = {
//   hosts: function (props) {
//     if (hosts.length > limit) {
//       throw Error(
//         `HEY!! You got too many hosts in ${humanize(area.name)}. The limit for that area is ${limit}. You gotta fix that!`
//       );
//     }
//   },
// };

export default Area;
