import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";

function Details({ host }) {
  const { firstName, lastName, active, imageUrl, gender, area, authorized} = host
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  return (
    <Segment id="details" className="HQComps">
      {host === {} ? <Image size="medium" src={Images.westworldLogo} /> : <Image size="small" src={imageUrl}/>}
    </Segment>
  );
}

export default Details;
