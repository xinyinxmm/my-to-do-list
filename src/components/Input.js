import React from "react";

export function Input(props) {
  return (
    <input
      data-testid="userInput"
      value={props.text}
      type="text"
      onChange={event => {
        props.setText(event.target.value);
      }}
    />
  );
}
