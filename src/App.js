import React, { Fragment } from 'react';
import './App.css';
import Dashboard from './components/posts/Dashboard';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditForm from './components/posts/EditForm';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Fragment>
            <div className="container">
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/edit/:id" component={EditForm} />

            </div>
          </Fragment>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
