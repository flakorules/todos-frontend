import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "react-hook-form";
import { startLogin } from "../../actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

export const Login = () => {

  const {userId} = useSelector( state => state.auth );
  
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!!userId) {
      history.push("/myTodos");
    }
  }, [userId, history]);
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(startLogin(data));    
  };

  return (
    <div className="d-flex justify-content-center">
      
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-4">
      <h1 className="justify-content-center">Todos App</h1>
        <div className="card">
          <div className="card-body">
            {false && (
              <a href="." className="float-right btn btn-outline-primary">
                Sign up
              </a>
            )}

            <h4 className="card-title mb-4 mt-1">Ingresar a la Aplicación</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Nombre de Usuario</label>
                <input
                  {...register("userName", { required: true })}
                  className="form-control"
                  placeholder="Nombre de Usuario"
                  type="text"
                />
                {errors.userName && (
                  <div class="alert alert-danger mt-1" role="alert">
                    UserName is required
                  </div>
                )}
              </div>
              <div className="form-group">
                {false && (
                  <a className="float-right" href=".">
                    Forgot?
                  </a>
                )}
                <label>Password</label>
                <input
                  {...register("password", { required: true })}
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
                {errors.password && (
                  <div class="alert alert-danger mt-1" role="alert">
                    Password is required
                  </div>
                )}
              </div>
              {false && (
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      {" "}
                      <input type="checkbox" /> Save password{" "}
                    </label>
                  </div>
                </div>
              )}
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-3"
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="fa-lg  mr-2" />
                  Login{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
