import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { Home, ProductsList } from './pages'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={ProductsList} extact />
      </Switch>
    );
  }
}

export default withRouter(App);
