import React, { useState, useEffect } from "react";
import { actions } from "../store/reducer";
import { addTodo } from "../store/services";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import "./checkbox.css";
import { CheckBoxes, CheckBox, Input, Label } from "./checkbox.styled";
const Checkbox1 = () => {
  const dispatch = useAppDispatch();
  const todo = useAppSelector((state) => state.todos.todo);
  useEffect(() => {
    dispatch(addTodo());
  }, [dispatch]);
  const [isChecked, setIsChecked] = useState(true);
  const changeHandler = (e: any, id: string, title: string) => {
    if (e.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
    const newTodo = { id: id, title: title, completed: isChecked };
    console.log({ newTodo });
    dispatch(actions.getTodo(newTodo));
  };
  return (
    <CheckBox>
      {todo &&
        todo.map((item: any, index: any) => {
          return (
            <CheckBoxes key={index}>
              <Input
                id="check-box"
                onChange={(e) => changeHandler(e, item.id, item.title)}
              />
              <Label className="checkbox-label" htmlFor="check-box">
                {item.title}
              </Label>
            </CheckBoxes>
          );
        })}
    </CheckBox>
  );
};

export default Checkbox1;
