import React, { useState, useEffect } from "react";
import RestaurantService from "../../../services/Restaurant.service";

import Layout from "../../../components/Layout";
import Container from "./container";

const Tutorial = ({ history, match }) => {
  const initialRestaurantState = {
    id: match.params.id,
    name: "",
    description: "",
    address: "",
    city: "",
    url: "",
  };
  const [restaurant, setRestaurant] = useState(initialRestaurantState);
  const [pageTitle, setPageTitle] = useState("");
  const [message, setMessage] = useState(initialRestaurantState);

  useEffect(() => {
    getTutorial(match.params.id);
  }, [match.params.id]);

  const getTutorial = (id) => {
    RestaurantService.get(id)
      .then((response) => {
        setRestaurant(response.data);
        setPageTitle(`Editar Restaurante - ${response.data.name}`);
        document.title = `Editar Restaurante - ${response.data.name}`;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const updateRestaurant = () => {
    if (!restaurant.name) {
      setMessage({ ...message, name: "El nombre es requerido" });
      return;
    }
    if (!restaurant.description) {
      setMessage({ ...message, description: "La descripción es requerida" });
      return;
    }
    if (!restaurant.address) {
      setMessage({ ...message, address: "La dirección es requerida" });
      return;
    }
    if (!restaurant.city) {
      setMessage({ ...message, city: "La ciudad es requerida" });
      return;
    }
    if (!restaurant.url) {
      setMessage({ ...message, url: "El URL de la foto es requerida" });
      return;
    }
    RestaurantService.update(restaurant.id, restaurant)
      .then((response) => {
        setMessage(initialRestaurantState);
        history.push("/restaurants");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Layout title={pageTitle}>
      <Container
        handleInputChange={handleInputChange}
        request={updateRestaurant}
        restaurant={restaurant}
        buttonTitle="Editar Restaurante"
        message={message}
      />
    </Layout>
  );
};

export default Tutorial;
