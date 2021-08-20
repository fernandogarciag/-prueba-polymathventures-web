import React, { useState, useEffect } from "react";
import RestaurantService from "../../../services/Restaurant.service";

import Layout from "../../Layout";
import Container from "./container";

const Create = ({ history }) => {
  const pageTitle = "Crear Restaurante";
  const initialRestaurantState = {
    name: "",
    description: "",
    address: "",
    city: "",
    url: "",
  };
  const [restaurant, setRestaurant] = useState(initialRestaurantState);
  const [message, setMessage] = useState(initialRestaurantState);

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const saveRestaurant = () => {
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
    var data = {
      name: restaurant.name,
      description: restaurant.description,
      address: restaurant.address,
      city: restaurant.city,
      url: restaurant.url,
    };

    RestaurantService.create(data)
      .then(() => {
        setMessage(initialRestaurantState);
        history.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Layout title={pageTitle}>
      <Container
        handleInputChange={handleInputChange}
        request={saveRestaurant}
        restaurant={restaurant}
        buttonTitle="Crear Restaurante"
        message={message}
      />
    </Layout>
  );
};

export default Create;
