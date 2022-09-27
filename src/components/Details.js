import React from "react";
import { Segment, Image } from "semantic-ui-react";
import HostInfo from "./HostInfo";
import * as Images from "../services/Images";

function Details({ host, areas, handleUpdateHost, hosts }) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  return (
    <Segment id="details" className="HQComps">
      {host.firstName ? <HostInfo hosts={hosts} handleUpdateHost={handleUpdateHost} areas={areas} host={host}/> : <Image size="medium" src={Images.westworldLogo}/>}
    </Segment>
  );
}

export default Details;
