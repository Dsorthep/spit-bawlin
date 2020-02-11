import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grommet } from "grommet";



import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

import { Auth } from "./auth/auth";

// import "./App.css";

const theme = {
  global: {
    colors: {
      "light-2": "#000000",
      text: {
        light: "#000000"
      },
      primary: "#000000"
    },
    edgeSize: {
      small: "14px"
    },
    elevation: {
      light: {
        medium:
          "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
      }
    },
    font: {
      color: "#000000",
      size: "14px",
      height: "20px"
    }
  },
  button: {
    border: {
      color: "#000000",
      width: "1px",
      radius: "4px"
    },
    padding: {
      vertical: "8px",
      horizontal: "16px"
    },
    extend: props => `
         text-transform: uppercase;
         font-size: 0.875rem;
         font-weight: 500;
         line-height: normal;
    `
      //   ${!props.primary &&
      //     `
      //     border-color: ${rgba(
      //       normalizeColor(props.colorValue, props.theme),
      //       0.5
      //     )};
      //     color: ${normalizeColor(props.colorValue, props.theme)};
      //     :hover {
      //        box-shadow: none;
      //        background-color: ${rgba(
      //          normalizeColor(props.colorValue, props.theme),
      //          0.08
      //        )};
      //      }
      //    `}
      //  `
  }
};

export default function() {
  return (
    // MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent),

    <Grommet theme={theme}>
      <Auth>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Auth>
    </Grommet>
  );
}
