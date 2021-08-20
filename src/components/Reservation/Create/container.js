import React from "react";
import { Link } from "react-router-dom";

const Container = ({
  handleInputChange,
  request,
  restaurant,
  buttonTitle,
  restaurantList,
  today,
  message,
}) => {
  return (
    <>
      <Link to="/reservations" type="button" className="btn btn-primary mb-2">
        Regresar
      </Link>
      <div>
        <div className="form-group row mb-3">
          <label
            htmlFor="restaurantId"
            className="col-md-4 col-form-label text-md-right"
          >
            Escoger Restaurante:
          </label>
          <div className="col-md-6">
            <select
              id="restaurantId"
              className={`form-control${message ? " is-invalid" : ""}`}
              name="restaurantId"
              onChange={handleInputChange}
              required
            >
              <option>Escoger el restaurante</option>
              {restaurantList.map((restaurant, index) => (
                <option key={index} value={restaurant.id}>
                  {restaurant.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="day"
            className="col-md-4 col-form-label text-md-right"
          >
            Día de la reserva:
          </label>
          <div className="col-md-6">
            <input
              id="day"
              type="date"
              name="day"
              className={`form-control${message ? " is-invalid" : ""}`}
              defaultValue={today}
              onChange={handleInputChange}
              required
            />
            {message ? (
              <span className="invalid-feedback" role="alert">
                <strong>{message}</strong>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form-group row mb-0">
          <div className="col-md-6 offset-md-4">
            <button className="btn btn-primary" onClick={request}>
              {buttonTitle}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
