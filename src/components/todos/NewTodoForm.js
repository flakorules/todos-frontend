import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  setFlagEditedTodo,
  setFlagNewTodo,
  startAddTodo,
} from "../../actions/todos.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";

export const NewTodoForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: { name: "", description: "" },
  });

  const onSubmit = (data) => {
    Swal.fire({
      title: `¿Desea agregar el todo?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, agregar`,
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startAddTodo(data));
        dispatch(setFlagEditedTodo(false));
        dispatch(setFlagNewTodo(false));
      }
    });
  };

  const onResetClick = () => {
    reset({});
    dispatch(setFlagEditedTodo(false));
    dispatch(setFlagNewTodo(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col pb-3">
          <input
            placeholder="Titulo"
            type="text"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <div className="alert alert-danger p-1 mt-2" role="alert">
              Name is required
            </div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col pb-3">
          <input
            placeholder="Descripción"
            type="text"
            className="form-control"
            {...register("description", { required: true })}
          />

          {errors.description && (
            <div className="alert alert-danger p-1 mt-2" role="alert">
              Description is required
            </div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button type="submit" className="btn btn-primary mx-2">
            <FontAwesomeIcon icon={faSave} />
          </button>
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={onResetClick}
          >
            <FontAwesomeIcon icon={faWindowClose} />
          </button>
        </div>
      </div>
    </form>
  );
};
