import React, { useState, useEffect } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ host, areas, handleUpdateHost }) {
  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.

  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  const [options, setOptions] = useState([]);
  const { firstName, active, imageUrl, gender, area } = host
  const [isActive, setIsActive] = useState(active)

  const [value, setValue] = useState(host.area);
  //this useEffect sets our displayed dropdown value to match a hosts current area
  useEffect(() => {
    setValue(area)
  }, [host])


  function handleOptionChange(e, { value }) {
    setValue(value)
    fetch(`http://localhost:3001/hosts/${host.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "area": value
      })
    })
    .then((r) => r.json())
    .then((updatedHost) => handleUpdateHost(updatedHost))


  }
  function humanize(str) {
    var i, frags = str.split('_');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }

    const areaObjects = areas.map((area) => {
      return {key: area.name, text: humanize(area.name), value: area.name  }
    })
    // setOptions(areaObjects)
    useEffect(() => {
      setOptions(areaObjects)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [host])


  function handleRadioChange() {
      setIsActive(!isActive);
  }



  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {firstName} | {gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={handleRadioChange}
                label={isActive ? "Active" : "Decommissioned"}
                checked={isActive}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area: {humanize(value)}
            <Dropdown
              onChange={handleOptionChange}
              value={value}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;

//may need to make a patch request when area is changed
// function handleAnswerChange(e){
//   console.log(e.target.value)
//   fetch(`http://localhost:3001/hosts/${host.id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       "correctIndex": e.target.value
//     })
//   })
//   .then((r) => r.json())
//   .then((updatedQuestion) => onUpdateQuestion(updatedQuestion))
// }