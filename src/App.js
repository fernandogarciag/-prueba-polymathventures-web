import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import RestaurantIndex from "./components/Restaurant/Index";
import RestaurantCreate from "./components/Restaurant/Create-Edit/Create";
import RestaurantShow from "./components/Restaurant/Show";
import RestaurantEdit from "./components/Restaurant/Create-Edit/Edit";
import ReservationIndex from "./components/Reservation/Index";
import ReservationCreate from "./components/Reservation/Create";

const App = () => {
  return (
    <Switch>
      <Route exact path={["/", "/restaurants"]} component={RestaurantIndex} />
      <Route exact path="/restaurants/create" component={RestaurantCreate} />
      <Route exact path="/restaurants/:id" component={RestaurantShow} />
      <Route exact path="/restaurants/:id/edit" component={RestaurantEdit} />
      <Route exact path="/reservations" component={ReservationIndex} />
      <Route exact path="/reservations/create" component={ReservationCreate} />
    </Switch>
  );
};

export default App;
