import React from "react";
export default function Precautions() {
  return (
    <div>
      <div class=" text-center">
        <h1>Precautions OF COVID-19</h1>
      </div>
      <div class="container container-lg container-md container-sm container-xl">
        <div class="row text-center container container-lg container-md container-sm container-xl">
          <div class="col-md-6 col-lg-4">
            <div class="card mx-50">
              <div class="inner" style={{ "border-image": "auto" }}>
                <img
                  src="https://media.allure.com/photos/5e34ab188a385400093f2a16/16:9/w_2560%2Cc_limit/mask.jpg"
                  class="card-img-top"
                  alt="Actors"
                />
              </div>

              <div class="card-body">
                <h5 class="card-title">
                  <b>WEAR MASK</b>
                </h5>
                <p> Wearing a face mask is better than Wearing a Ventilator.</p>
                <br />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mx-50">
              <div class="inner">
                <img
                  src="https://wallpapercave.com/wp/wp3747274.jpg"
                  class="card-img-top"
                  alt="Sports"
                />
              </div>

              <div class="card-body">
                <h5 class="card-title">
                  <b>WASH YOUR HANDS REGULARLY </b>
                </h5>
                <p>Santize your hands for every 5 minutes</p>
                <br />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mx-50">
              <div class="inner">
                <img
                  src="https://image.shutterstock.com/image-photo/woman-man-social-distancing-sitting-260nw-1677529075.jpg"
                  class="card-img-top"
                  alt="Politician"
                />
              </div>

              <div class="card-body">
                <h5 class="card-title">
                  <b>MAINTAIN SOCIAL DISTANCE </b>
                </h5>
                <p>Staying in your home is better than Staying with ICU.</p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <br />
      <div class="text-center">
        <img
          src="https://www.clinicbarcelona.org/uploads/media/default/0002/17/9894e85bdfe0236557a40e96d328cb50bacee5a3.jpeg"
          width="100%"
          height="600px"
          alt="pol"
        />
      </div>
    </div>
  );
}
