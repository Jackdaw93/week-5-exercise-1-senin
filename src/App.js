import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import User from "pages/User/User";
import UserDetails from "pages/UserDetails/UserDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <User />
      <Route exact path="/user-detail/:username">
        <UserDetails />
      </Route>
    </Router>
  );
}
export default App;
