import { faPenAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import {
  setEditedTodo,
  setFlagEditedTodo,
  setFlagNewTodo,
  startDeleteTodo,
  startSolveTodo,
} from "../../actions/todos.action";

export const TodoRow = ({ todo }) => {
  const dispatch = useDispatch();

  const onHandleCheck = () => {
    dispatch(startSolveTodo(todo.todoId));
  };

  const onHandleDeleteClick = () => {
    dispatch(startDeleteTodo(todo.todoId));
  };

  const onHandleEditClick = () => {
    dispatch(setFlagNewTodo(false));
    dispatch(setFlagEditedTodo(true));
    dispatch(setEditedTodo(todo));
  };

  return (
    <tr>
      <td>{todo.name}</td>
      <td>{todo.description}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={onHandleEditClick}
        >
          <FontAwesomeIcon icon={faPenAlt} />
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={onHandleDeleteClick}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
      <td>
        <input
          type="checkbox"
          className="form-check-input"
          onChange={onHandleCheck}
          defaultChecked={todo.solved}
        />
      </td>
    </tr>
  );
};
