import React, { useState, useEffect } from "react";
import RestaurantService from "../../../services/Restaurant.service";

import Layout from "../../../components/Layout";
import Container from "./container";

const Index = () => {
  const pageTitle = "Restaurantes";
  const [restaurantList, setRestaurantList] = useState([]);
  const [startRestaurantList, setStartRestaurantList] = useState([]);
  useEffect(() => {
    retrieveRestaurants();
    document.title = pageTitle;
  }, []);

  const retrieveRestaurants = () => {
    RestaurantService.getAll()
      .then((response) => {
        setStartRestaurantList(response.data);
        setRestaurantList(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const resetFilters = () => {
    setRestaurantList(startRestaurantList);
  };

  const filterByTitle = () => {
    const searchName = document.getElementById("name").value;
    setRestaurantList(
      startRestaurantList.filter(
        ({ name }) =>
          name.substring(0, searchName.length) ===
          searchName.substring(0, searchName.length)
      )
    );
  };
  const filterByCity = () => {
    const searchCity = document.getElementById("city").value;
    setRestaurantList(
      startRestaurantList.filter(
        ({ city }) =>
          city.substring(0, searchCity.length) ===
          searchCity.substring(0, searchCity.length)
      )
    );
  };

  return (
    <Layout title={pageTitle}>
      <Container
        restaurantList={restaurantList}
        resetFilters={resetFilters}
        filterByTitle={filterByTitle}
        filterByCity={filterByCity}
      />
    </Layout>
  );
};

export default Index;
