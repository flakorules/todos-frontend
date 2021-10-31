import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { MyTodos } from "../screens/private/MyTodos";
import { Login } from "../screens/public/Login";
import { PrivateRoute } from "./PrivateRouter";
import Modal from "react-modal";

export const AppRouter = (params) => {
  const { userId } = useSelector((state) => state.auth);
  const { flagShowLoading } = useSelector((state) => state.ui);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Router>
      <Modal isOpen={flagShowLoading} style={customStyles}>
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </Modal>

      {!!userId && <Navbar />}
      <div className="container mt-5">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute
            exact
            path="/myTodos"
            component={MyTodos}
            isAuthenticated={!!userId}
          />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};
