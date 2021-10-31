import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import { setFlagShowLoading } from "./ui.action";

export const startViewMyTodos = () => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;

    const response = await fetchWithToken("Todo/user", {}, "GET");
    const { errorCode, message, data } = await response.json();
    if (errorCode === "000") {
      dispatch(viewMyTodos(data));
    }
  };
};

export const startSolveTodo = (todoId) => {
  return async (dispatch) => {
    dispatch(setFlagShowLoading(true));
    const response = await fetchWithToken(`Todo/${todoId}`, {}, "PATCH");
    const { errorCode, message, data } = await response.json();

    if (errorCode === "000") {
      dispatch(solveTodo(todoId));
    }

    dispatch(setFlagShowLoading(false));
  };
};

export const startDeleteTodo = (todoId) => {
  return async (dispatch) => {
    dispatch(setFlagShowLoading(true));
    const response = await fetchWithToken(`Todo/${todoId}`, {}, "DELETE");
    const { errorCode, message, data } = await response.json();

    if (errorCode === "000") {
      dispatch(deleteTodo(todoId));
    }
    dispatch(setFlagShowLoading(false));
  };
};

export const startEditTodo = (formData) => {
  return async (dispatch) => {
    dispatch(setFlagShowLoading(true));
    const response = await fetchWithToken(
      `Todo/${formData.todoId}`,
      formData,
      "PUT"
    );
    const { errorCode, message, data } = await response.json();

    if (errorCode === "000") {
      dispatch(editTodo(data));
    }

    dispatch(resetEditedTodo());
    dispatch(setFlagShowLoading(false));
  };
};

export const startAddTodo = (formData) => {
  return async (dispatch) => {
    dispatch(setFlagShowLoading(true));
    const response = await fetchWithToken("Todo", formData, "POST");
    const { errorCode, message, data } = await response.json();

    if (errorCode === "000") {
      dispatch(addTodo(data));
    }
    dispatch(setFlagShowLoading(false));
  };
};

const viewMyTodos = (todos) => ({ type: types.viewMyTodos, payload: todos });

const solveTodo = (todoId) => ({
  type: types.solveTodo,
  payload: todoId,
});

const deleteTodo = (todoId) => ({
  type: types.deleteTodo,
  payload: todoId,
});

export const setEditedTodo = (todo) => ({
  type: types.setEditedTodo,
  payload: todo,
});

const editTodo = (todo) => ({
  type: types.editTodo,
  payload: todo,
});

export const resetEditedTodo = () => ({
  type: types.setEditedTodo,
  payload: {},
});

export const setFlagNewTodo = (flag) => ({
  type: types.setFlagNewTodo,
  payload: flag,
});

export const setFlagEditedTodo = (flag) => ({
  type: types.setFlagEditedTodo,
  payload: flag,
});

const addTodo = (data) => ({
  type: types.addTodo,
  payload: data,
});
