import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import "./index.css";

import reducers from "./reducers";
import SearchView from "./containers/SearchView";
import SearchDetail from "./components/SearchDetail";

import "bootstrap/dist/css/bootstrap.css";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="background">
          <h1 className="logo">Eat-Up!</h1>
          <h3 className="line">It's like networking... for your stomach</h3>
                <img className="picture" src="https://pics.me.me/did-somebody-say-free-food-memesocom-14292689.png" alt="Smiley face" height="250" width="250">
                    </img> 
                <img className="picture2" src="https://pbs.twimg.com/media/CTds5GsUwAAmJxW.jpg:large" alt="Smiley" height="250" width="250">
                    </img> 
         <Switch>
          <Route path="/event/:id" component={SearchDetail} />
          <Route exact path="/" component={SearchView} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
