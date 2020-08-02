import React from "react";

export function AddButton(props) {
  const isDuplicate = props.list.find(item => item.taskText === props.text);

  return (
    <button
      data-testid="submit"
      onClick={() => {
        if (!props.text) {
          props.alert("please input something!");
          return;
        }

        if (isDuplicate) {
          props.alert("please don't input the same task!");
          props.setText("");
          return;
        }

        const newList = [
          ...props.list,
          { taskText: props.text, isCompleted: false }
        ];
        props.setList(newList);
        props.setText("");
      }}
    >
      Add
    </button>
  );
}
