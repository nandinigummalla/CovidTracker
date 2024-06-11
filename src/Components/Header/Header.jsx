import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div class="Header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/#">
            Indian Covid19 Tracker
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li class="nav-item active">
                <Link className="nav-link" to="/Symptoms">
                  Symptoms
                </Link>
              </li>
              <li class="nav-item active">
                <Link className="nav-link" to="/Precautions">
                  Precautions
                </Link>
              </li>
              <li class="nav-item active">
                <Link className="nav-link" to="/News_api">
                  Live News
                </Link>
              </li>
              <li class="nav-item active">
                <Link className="nav-link" to="/DataFetch">
                  Search State Wise Data
                </Link>
              </li>
              <li class="nav-item active">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
