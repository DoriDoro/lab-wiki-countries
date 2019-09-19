import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CountryDetail from './CountryDetail';
import NavBar from './NavBar';
import countries from './countries'
import { NavLink } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <div className="row">

      <div className="col-5">
      <div className="list-group">
      {countries.map((country, i) => 
          <NavLink key={i} className="list-group-item list-group-item-action" to={"/" + country.cca3}> {country.flag} {country.name.common} </NavLink>
          )}
      </div>
    </div>



      <div className="col-7">
      <Route exact path='/:cca3' component={CountryDetail} />
      
      </div>
  </div>
        <div className="container">

        </div>
      </div>
    );
  }
}

export default App;
