import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

//router는 URL을 보고있는 component고 사용자가 여기 있다다면 Home Component를 보여준다
// Switch는 Route를 찾아주고 Route를 찾으면 component를 랜더링한다.
// <Route path="/">는 유저가 /에 있을때 component를 랜더링한다.

//Router를 먼저 렌더링 하고
//유저가 있는 URL에 따라 렌더링 해준다.
//Switch 컴포넌터는 한번에 하나씩 렌더링 해준다.
