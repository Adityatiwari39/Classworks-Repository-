import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Software from './pages/Software';
import AboutUs from './pages/AboutUs';
import Program from './pages/Program';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SearchBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/software" component={Software} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/program" component={Program} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;