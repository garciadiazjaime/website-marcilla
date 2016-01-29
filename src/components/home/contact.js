'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var HomeContactPanel = React.createClass({

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
            <section id="homeContact">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={7}>
                            <h2>Solicitar servicio</h2>
                            <a href="tel:6646859090" title="Llámanos">
                                (664) 685 9090 <span className="phoneyellow">Llamar</span>
                            </a>
                        </Col>
                        <Col xs={12} sm={5}>
                            <a href={this.state.STORE_URL} title="Ver catálogo" className="redButtonDarkArrow">
                                <span>Ver catálogo</span>
                            </a>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HomeContactPanel;
