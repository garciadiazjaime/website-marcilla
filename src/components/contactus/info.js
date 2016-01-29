'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Button = rb.Button;

var ContactForm = require('./form');
var FacebookIcon = require('../icons/facebook-icon');
var Icon = require('../icons/icon');

var HelloPanel = React.createClass({

    mixins : [ReactRouter.Navigation],
    
    handleClick: function(){
        window.open("https://www.google.com.mx/maps/place/MARCILLA+E+HIJOS+S.A.+DE+C.V/@32.5284878,-117.041706,18z/data=!4m5!1m2!2m1!1sAvenida+Galeana+1650,+Zona+Centro,+22000+Tijuana,+B.C.!3m1!1s0x0000000000000000:0x3437466e8a15caf4");
    },

    render: function() {

        return (
            <section id="contactInfo">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={6}>
                            <h2>Información de Contacto</h2>
                            <Row>
                                <ul className="contact-data">
                                    <li>
                                        <div>
                                            <Icon className="icon-map"/>
                                            <p>Calle Galeana No. 1650 <br />Zona Centro, Tijuana, B.C.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Icon className="icon-tel"/>
                                            <p><a href="tel:6646859090" title="Llámanos">(664) 685 9090</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Icon className="icon-email"/>
                                            <p><a href="mailto:ventas@marcilla.com.mx" title="escríbenos">ventas@marcilla.com.mx</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FacebookIcon />
                                            <p><a href="//facebook.com/marcillaextintores" target="_blank">facebook.com/marcillaextintores</a></p>
                                        </div>
                                    </li>
                                </ul> 
                            </Row>
                        </Col>
                        <Col xs={12} sm={6} id="contactform">
                            <ContactForm />   
                        </Col>
                    </Row>
                </div>
                <div id="map">
                    <div className="map_container">
                        <button className="submitButton" onClick={this.handleClick}><span>Ver en google maps</span></button>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = HelloPanel;
