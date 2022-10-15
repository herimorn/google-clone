import Home from "./pages/Home";
import React,{useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
     
     {/*the home page */}

     {/*search page */}
        
      </Router>
  
    </div>
  );
}

export default App;
