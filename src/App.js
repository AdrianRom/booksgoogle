import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import Nav from "./components/Nav";
import JumboTron from "./components/jumbotron/jumbotron";
import SearchPage from "./pages/searchPage"
import SavedPage from "./pages/savedPage"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <JumboTron/>
        <Route exact path="/" component={SearchPage}/>
        <Route exact path="/search" component={SearchPage}/>
        <Route exact path="/saved" component={SavedPage}/>
      </div>
      </Router>
  )
}

export default App;