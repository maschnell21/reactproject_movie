import './App.scss';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 import { Footer}  from "./components/Footer/Footer";
import  Header from "./components/Header/Header";
import  Home  from "./components/Home/Home";
import  {MovieDetail}  from "./components/MovieDetail/MovieDetail";
import  {PageNotFound}  from "./components/PageNotFound/PageNotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
          <Route path="/" exact  component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetail}></Route>
          <Route component={PageNotFound}>
          </Route>
          </Switch>
          </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
