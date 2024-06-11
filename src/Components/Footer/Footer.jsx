import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <br />
              Be physically distant but socially active{" "}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item">
                <a
                  href="https://www.facebook.com/covid19helplineindia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://twitter.com/COVIDNewsByMIB">
                  <i class="fa fa-twitter" target="_blank" rel="noreferrer"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.instagram.com/covid19helplineindia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://youtu.be/DCdxsnRF1Fk">
                  <i class="fa fa-youtube" target="_blank" rel="noreferrer"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.fiverr.com/share/qb8D02"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p class="h6">© All rights are Reversed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
