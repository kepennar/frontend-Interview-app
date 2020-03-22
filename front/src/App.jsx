import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";

import history from "./history";
import { store } from "./redux";
import { Header } from "./components/Header";
import List from "./pages/list";
import LazyBeerForm from "./pages/form";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <header className="App-header">
              <Header />
              <ReduxToastr
                timeOut={3000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                closeOnToastrClick
              />
            </header>
            <div className="App-content">
              <Route path="/" exact component={List} />
              <Route path="/new/" component={LazyBeerForm} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
