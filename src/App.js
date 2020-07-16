import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserGithub from "pages/UserGIthub/UserGithub";
import "./App.css";

function App() {
  return (
    <Router>
      <Route>
        <UserGithub />
      </Route>
    </Router>
  );
}
export default App;
