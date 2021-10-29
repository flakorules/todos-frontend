import { act } from "react-dom/test-utils";
import { types } from "../types/types";

const initialState = {
  todos: [],
  editedTodo: {},
  flagNewTodo: false,
  flagEditedTodo: false,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.viewMyTodos:
      return {
        ...state,
        todos: action.payload,
      };

    case types.addTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case types.editTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.todoId === action.payload.todoId ? action.payload : todo
        ),
      };

    case types.solveTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.todoId === action.payload
            ? {
                ...todo,
                solved: true,
              }
            : todo
        ),
      };

    case types.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.todoId !== action.payload),
      };

    case types.setEditedTodo:
      return {
        ...state,
        editedTodo: action.payload,
      };

    case types.setFlagNewTodo:
      return {
        ...state,
        flagNewTodo: action.payload,
      };

    case types.setFlagEditedTodo:
      return {
        ...state,
        flagEditedTodo: action.payload,
      };

    default:
      return state;
  }
};
