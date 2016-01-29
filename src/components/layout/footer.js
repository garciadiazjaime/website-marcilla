'use strict';

var React = require('react');
var ReactRouter = require('react-router');

var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var SocialWidget = require('../widgets/social-link-widget');
var PoweredWidget = require('../widgets/powered-widget');

var FooterSection = React.createClass({

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
        <div>
            <div className="container">
                <Row>
                    <Col xs={12} sm={8}>
                        <span>Equipo y Seguridad Contra Incendios</span>
                        <nav id="footerNavigation">
                            <ul>
                                <li>
                                    <h5><Link to="home" title="Inicio">Inicio</Link></h5>
                                    
                                </li><li>
                                    <h5><Link to="aboutus" title="Nosotros">Nosotros</Link></h5>
                                    <ul>
                                        <li><Link to="whoarewe" title="Quiénes somos">Quiénes somos</Link></li>
                                        <li><Link to="ourcommitment" title="Nuestro compromiso">Nuestro compromiso</Link></li>
                                        <li><Link to="history" title="Historia">Historia</Link></li>
                                        <li><Link to="ourimage" title="Nuestra imagen">Nuestra imagen</Link></li>
                                    </ul>    
                                </li><li>
                                    <h5><a href={this.state.STORE_URL} title="Catálogo">Catálogo</a></h5>
                                    <ul> 
                                        <li><a href={this.state.STORE_URL + "/catalogue/category/extintores_1/"} title="Extintores">Extintores</a></li>
                                        <li><a href={this.state.STORE_URL + "/catalogue/category/equipo_3/"} title="Equipo">Equipo</a></li>
                                        <li><a href={this.state.STORE_URL + "/catalogue/category/accesorios_5/"} title="Accesorios">Accesorios</a></li>
                                        <li><a href={this.state.STORE_URL + "/catalogue/category/senalamientos_6/"} title="Señalamientos">Señalamientos</a></li>
                                    </ul>
                                </li><li>
                                    <h5><Link to="training" title="Capacitación">Capacitación</Link></h5>
                                    <ul> 
                                        <li><Link to="level1" title="Nivel 1">Nivel 1</Link></li>
                                        <li><Link to="level2" title="Nivel 2">Nivel 2</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                    <Col id="addressColumn" xs={12} sm={4}>
                        <span id="footerLogo">Marcilla - Equipo y seguridad para incendios </span>
                        <h5><Link to="contact" title="Contáctanos">Contacto</Link></h5>
                        <address>
                            <p>Calle Galeana No. 1650 Zona Centro, Tijuana, B.C. </p>
                            <a href="tel:6646859090" title="Llámanos">(664) 685 9090</a>/<a href="tel:6646851923" title="Llámanos">(664) 685 1923</a>
                            <a href="mailto:ventas@marcilla.com.mx" title="Escríbenos" className="email">ventas@marcilla.com.mx</a>
                            <SocialWidget />    
                        </address>
                       
                    </Col>
                </Row>   
            </div>
            <PoweredWidget />
        </div>
    );
  }
});

module.exports = FooterSection;