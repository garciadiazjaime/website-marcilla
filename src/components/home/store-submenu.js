'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var Link = ReactRouter.Link;

var HomeSectionsPanel2 = React.createClass({

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
            <section id="storeProducts">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={3}>
                            <a title="Extintores" id="homeSections2-extinguishers" href={this.state.STORE_URL + "/catalogue/category/extintores_1/"}>
                                <h4>Extintores</h4>
                                <p>Polvo Químico Seco, Halotrón, CO2, Agua, Espuma y Especiales</p>
                            </a>
                        </Col>
                        <Col xs={12} sm={3}>
                            <a title="Equipo" id="homeSections2-equipment" href={this.state.STORE_URL + "/catalogue/category/equipo_3/"}>
                                <h4>Equipo</h4>
                                <p>Equipo de Bombero, Equipo de Seguridad, Detección y Emergencia </p>
                            </a>
                        </Col>
                        <Col xs={12} sm={3}>
                            <a title="Accesorios" id="homeSections2-accesories" href={this.state.STORE_URL + "/catalogue/category/accesorios_5/"}>
                                <h4>Accesorios</h4>
                                <p>Mangueras, Herrajes, <br />Gabinetes,  Soportes</p>
                            </a>
                        </Col>
                        <Col xs={12} sm={3}>
                            <a title="Señalamientos" id="homeSections2-signs" href={this.state.STORE_URL + "/catalogue/category/senalamientos_6/"}>
                                <h4>Señalamientos</h4>
                                <p>Señales de Emergencia y Preventivas</p>
                            </a>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HomeSectionsPanel2;
