import React, { useState, useEffect } from "react";
import RestaurantService from "../../../services/Restaurant.service";

import Layout from "../../../components/Layout";
import Container from "./container";

const Show = ({ history, match }) => {
  const initialTutorialState = {
    id: match.params.id,
    name: "",
    description: "",
    address: "",
    city: "",
    url: "",
  };
  const [restaurant, setRestaurant] = useState(initialTutorialState);
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    getTutorial(match.params.id);
  }, [match.params.id]);

  const getTutorial = (id) => {
    RestaurantService.get(id)
      .then((response) => {
        setRestaurant(response.data);
        setPageTitle(`Restaurante - ${response.data.name}`);
        document.title = `Restaurante - ${response.data.name}`;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteRestaurant = () => {
    if (
      !window.confirm(
        "Esta seguro que desea borrar el restaurante con todas sus reservas"
      )
    ) {
      return;
    }
    RestaurantService.delete(restaurant.id)
      .then((response) => {
        console.log(response.data);
        history.push("/restaurants");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Layout title={pageTitle}>
      <Container restaurant={restaurant} deleteRestaurant={deleteRestaurant} />
    </Layout>
  );
};

export default Show;
