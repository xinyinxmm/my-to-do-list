import React from "react";
import "./styles.css";
import "./App2.css";
import { useState } from "react";
import { Input } from "./components/Input";
import { AddButton } from "./components/AddButton";
import { List } from "./components/List";

function myAlert(msg) {
  alert(msg);
}

export default function App({ alert = myAlert }) {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  return (
    <>
      <Input text={text} setText={setText} />
      <AddButton
        text={text}
        list={list}
        setText={setText}
        setList={setList}
        alert={alert}
      />
      <List text={text} setText={setText} list={list} setList={setList} />
    </>
  );
}
