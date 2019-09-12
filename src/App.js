import React, { Fragment } from 'react';
import './App.css';
import Dashboard from './components/posts/Dashboard';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditForm from './components/posts/EditForm';
import Header from './components/posts/Header';
import Details from './components/posts/Details';



function App() {
  return (
    <Provider store={store}>
      <Router >
        <Switch>
          <Fragment>
            <Header />
            <div className="container">
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/:id" component={Details} />
              <Route path="/edit/:id" component={EditForm} />

            </div>
          </Fragment>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
