'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;

var Workshops = React.createClass({

    render: function() {

        return (
          <div className="container workshops">
          	<h1>talleres</h1>
        	<Row>
	          <Col md={6}>
	            <div className="level-block">
	              <div className="level-1-image img-responsive"></div>
	              <h1>manejo de extintores</h1>
	              <p>Conoce como operar un extintor portatil de manera correcta.</p>
	              <a href="/docs/Marcilla-ManejoExtintores.pdf" title="programa" className="blueButton" target="_blank"><span>programa (pdf)</span></a>
	            </div>
		      </Col>
		      <Col md={6}>
		      	<div className="level-block">
	              <div className="level-2-image img-responsive"></div>
	              <h1>brigada contra incendio</h1>
	              <p>Conoce los elementos del fuego, técnicas de extinción y el uso de los equipos.</p>
	              <a href="/docs/Marcilla-BrigadaContraincendio.pdf" title="programa" className="blueButton" target="_blank"><span>programa (pdf)</span></a>
	            </div>
		      </Col>
		  	</Row>
          </div>
        );
    }
});

module.exports = Workshops;
