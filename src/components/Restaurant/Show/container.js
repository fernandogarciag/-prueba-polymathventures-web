import React from "react";
import { Link } from "react-router-dom";

const Container = ({ restaurant, deleteRestaurant }) => (
  <>
    <div className="mb-2">
      <Link to="/restaurants" type="button" className="btn btn-primary me-2">
        Regresar
      </Link>
      <Link
        to={`/restaurants/${restaurant.id}/edit`}
        type="button"
        className="btn btn-warning me-2"
      >
        Editar
      </Link>
      <button className="btn btn-danger" onClick={deleteRestaurant}>
        Borrar
      </button>
    </div>
    <ul className="list-group mb-2">
      <li className="list-group-item">
        Nombre del restaurante: {restaurant.name}
      </li>
      <li className="list-group-item">
        Descripción del restaurante: {restaurant.description}
      </li>
      <li className="list-group-item">
        Dirección del restaurante: {restaurant.address}
      </li>
      <li className="list-group-item">
        Ciudad del restaurante: {restaurant.city}
      </li>
    </ul>
    <figure className="figure">
      <img
        src={restaurant.url}
        className="figure-img img-fluid rounded"
        alt="Restaurant"
      />
      <figcaption className="figure-caption text-right">
        Imagen del restaurante
      </figcaption>
    </figure>
  </>
);

export default Container;
