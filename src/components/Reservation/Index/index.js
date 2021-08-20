import React, { useState, useEffect } from "react";
import ReservationService from "../../../services/Reservation.service";

import Layout from "../../../components/Layout";
import Container from "./container";

const Index = ({ history }) => {
  const pageTitle = "Reservas";
  const f = new Date();
  const today = `${f.getFullYear()}-${
    f.getMonth() < 9 ? `0${f.getMonth() + 1}` : f.getMonth() + 1
  }-${f.getDate()}`;
  const [reservationList, setReservationList] = useState([]);
  const [startReservationList, setStartReservationList] = useState([]);

  useEffect(() => {
    retrieveReservations();
    document.title = pageTitle;
  }, []);

  const retrieveReservations = () => {
    ReservationService.getAll()
      .then((response) => {
        setStartReservationList(response.data);
        setReservationList(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const resetFilters = () => {
    setReservationList(startReservationList);
  };

  const filterByRestaurant = () => {
    const searchName = document.getElementById("name").value;
    setReservationList(
      startReservationList.filter(
        (reservation) =>
          reservation.restaurant.name.substring(0, searchName.length) ===
          searchName.substring(0, searchName.length)
      )
    );
  };
  const filterByDay = () => {
    const searchDay = document.getElementById("day").value;
    setReservationList(
      startReservationList.filter(({ day }) => day === searchDay)
    );
  };

  const deleteReservation = (id) => {
    if (!window.confirm("Esta seguro que desea borrar la reserva")) {
      return;
    }
    ReservationService.delete(id)
      .then((response) => {
        retrieveReservations();
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Layout title={pageTitle}>
      <Container
        today={today}
        reservationList={reservationList}
        resetFilters={resetFilters}
        filterByRestaurant={filterByRestaurant}
        filterByDay={filterByDay}
        deleteReservation={deleteReservation}
      />
    </Layout>
  );
};

export default Index;
