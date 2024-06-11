import React from 'react';
export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/142199-jqhtcnnjxl-1590939324.jpg" alt="First slide" height="400px" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="http://austintexas.gov/sites/default/files/COVID_Banner2_large.png" alt="Second slide" height="400px" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://wallpapershome.com/images/pages/ico_h/22528.jpg" alt="Third slide" height="400px" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}
