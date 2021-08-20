import React from "react";
import { Link } from "react-router-dom";

const Container = ({ children, title }) => {
  return (
    <div id="app">
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Prueba Polymath Ventures
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="{{ __('Toggle navigation') }}"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants">
                  Restaurantes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reservations">
                  Reservas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">{title}</div>
                <div className="card-body">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Container;
