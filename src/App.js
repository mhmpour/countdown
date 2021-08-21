import './App.css';
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import TYPE1 from './Type1'
import TYPE2 from './Type2'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Footer/>
          </Route>
          <Route path="/type1">
            <Header />
              <TYPE1/>
            <Footer/>
          </Route>
          <Route path="/type2">
            <Header />
            <TYPE2/>
            <Footer/>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
