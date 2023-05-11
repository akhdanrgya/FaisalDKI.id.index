import React from "react";

const Label = (props) => {
  
  return (
    <>
      <input class="form-control"  name={props.name} placeholder={props.placeholder} type={props.type}/>
    </>
  );
};

export default Label;
