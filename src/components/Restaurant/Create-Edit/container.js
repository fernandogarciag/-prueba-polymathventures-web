import React from "react";
import { Link } from "react-router-dom";

const Container = ({
  handleInputChange,
  request,
  restaurant,
  buttonTitle,
  message,
}) => {
  return (
    <>
      <Link
        to={`/restaurants${restaurant.name ? `/${restaurant.id}` : ""}`}
        type="button"
        className="btn btn-primary mb-2"
      >
        Regresar
      </Link>
      <div>
        <div className="form-group row mb-3">
          <label
            htmlFor="name"
            className="col-md-4 col-form-label text-md-right"
          >
            Nombre
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className={`form-control${message.name ? " is-invalid" : ""}`}
              value={restaurant.name}
              name="name"
              autoComplete="name"
              onChange={handleInputChange}
              autoFocus
            />
            {message.name ? (
              <span className="invalid-feedback" role="alert">
                <strong>{message.name}</strong>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="description"
            className="col-md-4 col-form-label text-md-right"
          >
            Descripción
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className={`form-control${
                message.description ? " is-invalid" : ""
              }`}
              value={restaurant.description}
              name="description"
              autoComplete="description"
              onChange={handleInputChange}
              required
            />
            {message.description ? (
              <span className="invalid-feedback" role="alert">
                <strong>{message.description}</strong>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="address"
            className="col-md-4 col-form-label text-md-right"
          >
            Dirección
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className={`form-control${message.address ? " is-invalid" : ""}`}
              value={restaurant.address}
              name="address"
              autoComplete="address"
              onChange={handleInputChange}
              required
            />
            {message.address ? (
              <span className="invalid-feedback" role="alert">
                <strong>{message.address}</strong>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="city"
            className="col-md-4 col-form-label text-md-right"
          >
            Ciudad
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className={`form-control${message.city ? " is-invalid" : ""}`}
              value={restaurant.city}
              name="city"
              autoComplete="city"
              onChange={handleInputChange}
              required
            />
            {message.city ? (
              <span className="invalid-feedback" role="alert">
                <strong>{message.city}</strong>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="url"
            className="col-md-4 col-form-label text-md-right"
          >
            URL de la foto
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className={`form-control${message.url ? " is-invalid" : ""}`}
              value={restaurant.url}
              name="url"
              autoComplete="url"
              onChange={handleInputChange}
              required
            />
            {message.url ? (
              <span className="invalid-feedback" role="alert">
                <strong>{message.url}</strong>
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
