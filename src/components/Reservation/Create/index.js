import React, { useState, useEffect } from "react";
import ReservationService from "../../../services/Reservation.service";
import RestaurantService from "../../../services/Restaurant.service";

import Layout from "../../Layout";
import Container from "./container";

const Create = ({ history }) => {
  const pageTitle = "Crear Reserva";
  document.title = pageTitle;

  const f = new Date();
  const today = `${f.getFullYear()}-${
    f.getMonth() < 9 ? `0${f.getMonth() + 1}` : f.getMonth() + 1
  }-${f.getDate()}`;

  const initialReservationState = {
    day: today,
    restaurantId: "",
  };
  const [reservationList, setReservationList] = useState([]);
  const [reservation, setReservation] = useState(initialReservationState);
  const [restaurantList, setRestaurantList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    retrieveReservations();
    retrieveRestaurants();
  }, []);

  const retrieveReservations = () => {
    ReservationService.getAll()
      .then((response) => {
        setReservationList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveRestaurants = () => {
    RestaurantService.getAll()
      .then((response) => {
        setRestaurantList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReservation({ ...reservation, [name]: value });
  };
  const saveReservation = () => {
    if (checkReservation()) {
      return;
    }
    var data = {
      day: reservation.day,
      restaurantId: reservation.restaurantId,
    };

    ReservationService.create(data)
      .then(() => {
        history.push("/reservations");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const checkReservation = () => {
    if (today > reservation.day) {
      setMessage("La fecha no es valida");
      return true;
    }
    const reservationsInDay = reservationList.filter(
      ({ day }) => day === reservation.day
    );
    if (reservationsInDay.length >= 20) {
      setMessage("Esa fecha ya tiene 20 reservas");
      return true;
    }
    const reservationsInRestaurant = reservationsInDay.filter(
      ({ restaurantId }) => `${restaurantId}` === reservation.restaurantId
    );
    if (reservationsInRestaurant.length >= 15) {
      setMessage("Esa fecha ya tiene 15 reservas para este restaurante");
      return true;
    }
    return false;
  };

  return (
    <Layout title={pageTitle}>
      <Container
        handleInputChange={handleInputChange}
        request={saveReservation}
        reservation={reservation}
        buttonTitle="Crear Reserva"
        restaurantList={restaurantList}
        today={today}
        message={message}
      />
    </Layout>
  );
};

export default Create;
