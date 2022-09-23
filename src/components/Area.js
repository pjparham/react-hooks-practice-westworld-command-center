import React from "react";
import "../stylesheets/Area.css";


function Area({ area }) {


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

    </div>
  );
}

// Area.propTypes = {
//   hosts: function (props) {
//     if (props.hosts.length > limit) {
//       throw Error(
//         `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${limit}. You gotta fix that!`
//       );
//     }
//   },
// };

export default Area;
