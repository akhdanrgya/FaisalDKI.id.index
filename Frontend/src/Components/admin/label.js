import React from "react";

const Label = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <>
      <input class="form-control" {...inputProps} onChange={onChange} />
    </>
  );
};

export default Label;
