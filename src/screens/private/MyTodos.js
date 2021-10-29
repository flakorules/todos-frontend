import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFlagEditedTodo, setFlagNewTodo, startViewMyTodos } from "../../actions/todos.action";
import { EditTodoForm } from "../../components/todos/EditTodoForm";
import { TodoRow } from "../../components/todos/TodoRow";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { NewTodoForm } from "../../components/todos/NewTodoForm";

export const MyTodos = () => {
  const dispatch = useDispatch();

  const { todos, flagNewTodo, flagEditedTodo } = useSelector((state) => state.myTodos);

  useEffect(() => {
    dispatch(startViewMyTodos());
  }, [dispatch]);

  const onHandleNewClick = () => {
    dispatch(setFlagNewTodo(true));
    dispatch(setFlagEditedTodo(false));
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>My Todos</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-success mx-2"
            onClick={onHandleNewClick}
          >
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </div>
      </div>
      {flagNewTodo && <NewTodoForm/>}
      {flagEditedTodo && <EditTodoForm />}
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Descripción</th>
              <th scope="col">Acciones</th>
              <th scope="col">Resolver</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoRow key={todo.todoId} todo={todo} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
