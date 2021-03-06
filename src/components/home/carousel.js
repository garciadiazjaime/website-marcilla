'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var Link = ReactRouter.Link;

var HomeCarouselPanel = React.createClass({

    mixins : [ReactRouter.Navigation],

    getInitialState: function(){
      return {
        STORE_URL: ''
      }
    },

    componentDidMount: function(){
      this.setState({
        STORE_URL: window.STORE_URL
      });
    },

    render: function() {

        return (
            <section id="carouselArea">
                <Carousel id="homeCarousel" interval={7000}>
                    <CarouselItem id="homeCarousel-extinguishers">
                        <div className="container">
                            <div className="common">
                                <p>Equipo y Seguridad Contra Incendios</p>
                                <span className="stationLogo"></span>
                            </div>
                            <h3>Extintores</h3>
                            <p>Contamos con la más amplia variedad de extintores para cada necesidad, de uso doméstico, comercial e industrial. 
Conoce nuestro catálogo de productos. </p>
                            <a href={this.state.STORE_URL} title="Ver Catálogo" className="redButton"><span>Ver Catálogo</span></a>
                        </div>
                    </CarouselItem>
                    <CarouselItem id="homeCarousel-equipment">
                        <div className="container">
                            <div className="common">
                                <p>Equipo y Seguridad Contra Incendios</p>
                                <span className="stationLogo"></span>
                            </div>
                            <h3><span>Seguridad</span> contra incendios</h3>
                            <Link to="aboutus" title="Conócenos" className="redButton"><span>Conócenos</span></Link>
                        </div>  
                    </CarouselItem>
                    <CarouselItem id="homeCarousel-catalog">
                        <div className="container">
                            <div className="common">
                                <p>Equipo y Seguridad Contra Incendios</p>
                                <span className="stationLogo"></span>
                            </div>
                            <h3>Contra incendios</h3>
                            <p>Somos una empresa con más de 50 años de experiencia en el servicio y venta de equipos contra incendio y seguridad industrial, para empresas, comercios y particulares.</p>
                            <a href={this.state.STORE_URL} title="Ver Catálogo" className="redButton"><span>Ver Catálogo</span></a>  
                        </div>
                    </CarouselItem>
                </Carousel>
            </section>
        );
    }
});

module.exports = HomeCarouselPanel;
