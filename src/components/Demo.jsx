import { React, useState } from "react";
import "./Demo.css";
import style from "./Demo.module.css";
import Button from "../shared/Button/Button";
import Test from "./Test";
const Demo = (props) => {
  console.log('props demo',props.data)
  let name = props.name;
  const demoData = props.data
  const [textName, setTextName] = useState('');
  //   console.debug("DEMO", props);
  const getInputValue = (e) => {
    console.log(e.target.value);
    // textName = 'hh'
    setTextName(e.target.value);
  };
  return (
    <div>
      {/* <h1>{name}</h1>
      <input type="text" placeholder="Enter text" onChange={getInputValue} />
      <h1>{textName}</h1>
      <Button /> */}
      {/* <Test fakedata={demoData} /> */}
      {/* {demoData.map((d)=>
      <Test color={d.color} code={d.value}  ></Test>
      )} */}
      {demoData.map((val)=>
      <Test key={val.userId} id={val.id} body={val.body} title={val.title}>
      </Test>
      )}

    </div>
  );
};

export default Demo;
