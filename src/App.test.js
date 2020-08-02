import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

afterEach(() => {
  jest.mockRestore();
});

it("should alert when the user presses the button with no input", () => {
  const alertMock = jest.fn();

  const { getByTestId } = render(<App alert={alertMock} />);

  const submitButton = getByTestId("submit");
  fireEvent.click(submitButton);

  expect(alertMock).toHaveBeenCalledTimes(1);
  expect(alertMock).toHaveBeenCalledWith("please input something!");
  expect(getByTestId("taskList").children).toHaveLength(0);
});

it("should add task when happy path", () => {
  const { getByTestId, getByText } = render(<App />);

  fireEvent.change(getByTestId("userInput"), { target: { value: "123" } });
  fireEvent.click(getByTestId("submit"));

  expect(getByTestId("taskList").children).toHaveLength(1);
  expect(getByText("123")).toBeTruthy();
});

it("should delete the task when user press delete button", () => {
  const { getByTestId, queryByText } = render(<App />);
  const submitButton = getByTestId("submit");

  fireEvent.change(getByTestId("userInput"), { target: { value: "123" } });
  fireEvent.click(submitButton);
  fireEvent.click(getByTestId("deletebutton"));

  expect(queryByText("123")).toBeFalsy();
});

it("should alert when the user input the duplicate tasks", () => {
  const alertMock = jest.fn();

  const { getByTestId, getAllByText } = render(<App alert={alertMock} />);
  const submitButton = getByTestId("submit");
  const userInput = getByTestId("userInput");

  fireEvent.change(userInput, { target: { value: "123" } });
  fireEvent.click(submitButton);

  fireEvent.change(userInput, { target: { value: "123" } });
  fireEvent.click(submitButton);

  expect(alertMock).toHaveBeenCalledTimes(1);
  expect(alertMock).toHaveBeenCalledWith("please don't input the same task!");

  expect(getAllByText("123")).toHaveLength(1);
});

it("", () => {});
