import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
// import SignUp from './components/pages/Signup';
import ContactInfo from './components/pages/ContactInfo';
import News from './components/pages/News';

function App() {
  return (
  <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contactinfo" component={ContactInfo} />
        <Route path="/gallery" component={Gallery} />
        {/* <Route path="/sign-up" component={SignUp} /> */}
        <Route path="/news" component={News} />
      </Switch>
      </Router>
  );
}

export default App;
