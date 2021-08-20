import React from "react";
import { Link } from "react-router-dom";

const Container = ({
  restaurantList,
  resetFilters,
  filterByTitle,
  filterByCity,
}) => (
  <>
    <div className="mb-2">
      <Link className="btn btn-primary me-2" to="/restaurants/create">
        Nuevo Restaurante
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
        <button className="btn btn-primary" onClick={filterByTitle}>
          Filtrar
        </button>
      </div>
    </div>
    <div className="form-group row mb-3 ">
      <div className="col-md-6">
        <input
          id="city"
          type="text"
          className="form-control"
          placeholder="Filtro de ciudad"
        />
      </div>
      <div className="col-md-6">
        <button className="btn btn-primary" onClick={filterByCity}>
          Filtrar
        </button>
      </div>
    </div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre:</th>
          <th scope="col">Ciudad:</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {restaurantList.map((restaurant, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{restaurant.name}</td>
            <td>{restaurant.city}</td>
            <td>
              <Link
                className="btn btn-info"
                to={`/restaurants/${restaurant.id}`}
              >
                Info
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default Container;
