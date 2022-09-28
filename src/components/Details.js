import React from "react";
import { Segment, Image } from "semantic-ui-react";
import HostInfo from "./HostInfo";
import * as Images from "../services/Images";

function Details({ host, areas, handleUpdateHost, hosts, updateLogs }) {

  return (
    <Segment id="details" className="HQComps">
      {host.firstName ?
       <HostInfo updateLogs={updateLogs} hosts={hosts} handleUpdateHost={handleUpdateHost} areas={areas} host={host}/>
        : <Image size="medium" src={Images.westworldLogo}/>}
    </Segment>
  );
}

export default Details;
