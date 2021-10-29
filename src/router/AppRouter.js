import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { MyTodos } from "../screens/private/MyTodos";
import { Login } from "../screens/public/Login";
import { PrivateRoute } from "./PrivateRouter";

export const AppRouter = (params) => {
  const { userId } = useSelector((state) => state.auth);

  return (
    <Router>
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
