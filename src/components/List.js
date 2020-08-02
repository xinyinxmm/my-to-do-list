import React from "react";
import { ListItem } from "./ListItem";

export function List(props) {
  return (
    <>
      <ul data-testid="taskList">
        {props.list.map(item => {
          return (
            <ListItem
              key={item.taskText}
              list={props.list}
              setList={props.setList}
              item={item}
              taskText={props.taskText}
            />
          );
        })}
      </ul>
    </>
  );
}
