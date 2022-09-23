import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, setActiveHost, activeHost }) {

  function handleClick(){
    setActiveHost(host)
  }
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      className={host === activeHost ? "host selected" : "host"}
      onClick={handleClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
