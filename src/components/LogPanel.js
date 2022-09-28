import React, { useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel({ hosts, handleUpdateHost, logs, updateLogs }) {
  const [activate, setActivate] = useState(false)

  function activateHost(host){
    host.active = !activate
    handleUpdateHost(host)
   }
  

  function onActivate(){
    setActivate(!activate)
    let message = activate ? (Log.notify("Decommissioning all hosts.")) : (Log.warn("Activating all hosts!"))
    updateLogs(message)
    hosts.forEach((host) => {
     activateHost(host)
    })
  }


  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
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

