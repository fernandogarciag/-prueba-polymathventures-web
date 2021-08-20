import React from "react";
import { Link } from "react-router-dom";

const Container = ({
  today,
  reservationList,
  resetFilters,
  filterByRestaurant,
  filterByDay,
  deleteReservation,
}) => (
  <>
    <div className="mb-2">
      <Link className="btn btn-primary me-2" to="/reservations/create">
        Crear Reserva
      </Link>
      <button className="btn btn-primary" onClick={resetFilters}>
        Resetear Filtros
      </button>
    </div>
    <div className="form-group row mb-3 ">
      <div className="col-md-6">
        <input
          id="name"
          type="text"
          className="form-control"
          placeholder="Filtro de nombre"
        />
      </div>
      <div className="col-md-6">
        <button className="btn btn-primary" onClick={filterByRestaurant}>
          Filtrar
        </button>
      </div>
    </div>
    <div className="form-group row mb-3 ">
      <div className="col-md-6">
        <input
          id="day"
          type="date"
          className="form-control"
          defaultValue={today}
        />
      </div>
      <div className="col-md-6">
        <button className="btn btn-primary" onClick={filterByDay}>
          Filtrar
        </button>
      </div>
    </div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Restaurante:</th>
          <th scope="col">Día:</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {reservationList.map((reservation, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{reservation.restaurant.name}</td>
            <td>{reservation.day}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteReservation(reservation.id);
                }}
              >
                Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default Container;
