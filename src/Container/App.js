import React, { Component } from 'react';
import '../Styles/App.css';
import Header from '../Components/Header.js';
import Navigation from '../Components/Nav.js';
import Dashboard from '../Components/Dashboard.js';
import Footer from '../Components/Footer.js';
import History from '../Components/History.js';
import Report from '../Components/Report.js';
import Multiplereport from '../Components/Multiplereport.js';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="container-fluid">
      <Header/>
      </div>
      <div className="container"><Navigation/></div>
        <div className="container">
        <Switch>
            <Route  exact path='/' component={Dashboard}  />
            <Route  path='/history' component={History}  />
            <Route  path='/report' component={Report}  />
            <Route  path='/mlreport' component={Multiplereport}  />
        </Switch>
         </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
