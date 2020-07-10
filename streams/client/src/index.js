import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
