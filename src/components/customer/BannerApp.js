import React from "react";
import { Container, Row, Form } from "react-bootstrap";
import banner1 from '../../images/slider.png';
import banner2 from '../../images/slider.png';
import banner3 from '../../images/slider1.png';
function BannerApp() {
  return (
    <React.Fragment>
    
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item  active">
        <img src={banner1} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block  w-25 mx-auto">
            <p>Some representative placeholder</p>
            <h5>Fashion Lorem</h5>
           
          </div>
      </div>
      <div className="carousel-item">
        <img src={banner2} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block  w-25 mx-auto">
            <p>Some representative placeholder</p>
            <h5>Fashion Lorem</h5>
           
          </div>
      </div>
      <div className="carousel-item">
        <img src={banner3} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block  w-25 mx-auto">
            <p>Some representative placeholder</p>
            <h5>Fashion Lorem</h5>
           
          </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

    
    </React.Fragment>
  );
}
export default BannerApp;