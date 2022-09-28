import React, { useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel({ hosts, handleUpdateHost }) {
  const [activate, setActivate] = useState(false)
  function dummyLogs() {
    // This is just to show you how this should work. But where should the log data actually get stored?
    // And where should we be creating logs in the first place?
    // Use the Log Service class (located in: 'src/services/Log') we've created anywhere you like.
    // Just remember to import it

    let logs = [];

    logs.unshift(Log.warn("This is an example of a warn log"));
    logs.unshift(Log.notify("This is an example of a notify log"));
    logs.unshift(Log.error("This is an example of an error log"));

    return logs;
  }


  function activateHost(host){
    host.active = !activate
    handleUpdateHost(host)
   }
  

  function onActivate(){
    setActivate(!activate)
    console.log('activate', activate)
    hosts.forEach((host) => {
     activateHost(host)
    })}


  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {dummyLogs().map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>
      <Button onClick={onActivate}fluid color={activate ? "green" : "red"} content={activate ? "DECOMMISSION ALL" : "ACTIVATE ALL"} />
    </Segment>
  );
}

export default LogPanel;

