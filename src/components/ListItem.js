import React from "react";

export function ListItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.item.isCompleted}
        onChange={() => {
          const newList = [...props.list];
          const index = newList.findIndex(
            item2 => item2.taskText === props.item.taskText
          );
          newList[index].isCompleted = !newList[index].isCompleted;
          props.setList(newList);
        }}
      />

      {
        <span className={`item ${props.item.isCompleted ? "isCompleted" : ""}`}>
          {props.item.taskText}
        </span>
      }
      <button
        data-testid="deletebutton"
        onClick={() => {
          const newList = [...props.list];
          const index = newList.findIndex(
            item3 => item3.taskText === props.item.taskText
          );
          newList.splice(index, 1);
          props.setList(newList);
        }}
      >
        delete
      </button>
    </li>
  );
}
