import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth.action";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.auth);

  const onHandleLogoutClick = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href=".">
          Todos App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href=".">
                Bienvenido {userName}
              </a>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" href=".">
                Link
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="."
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li> */}
          </ul>
          <div className="justify-content-end">
            <button
              className="btn btn-danger"
              type="submit"
              onClick={onHandleLogoutClick}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
