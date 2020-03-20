import React from "react";
import Home from "../mycomponent/Home.js";
import Aboutme from "../mycomponent/Aboutme.js";
import Mywork from "../mycomponent/Mywork.js";
import Howtoreachme from "../mycomponent/Howtoreachme.js";
import { Route, NavLink, HashRouter } from "react-router-dom";

export default function Router() {
  return (
    <HashRouter>
      <div>
        <ul className="router">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutme">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/mywork">My Work</NavLink>
          </li>
          <li>
            <NavLink to="/howtoreachme">How To Reach Me</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/aboutme" component={Aboutme} />
          <Route path="/mywork" component={Mywork} />
          <Route path="/howtoreachme" component={Howtoreachme} />
        </div>
      </div>
    </HashRouter>
  );
}
