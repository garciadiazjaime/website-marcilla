'use strict';

var React = require('react');
var ReactRouter = require('react-router');

var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;

var PoweredWidget = React.createClass({
    
    render: function() {

        return (
            <div id="footerCredits">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={7}>
                            <p>Todos los derechos reservados Marcilla e Hijos desde 1957</p>
                        </Col>
                        <Col xs={12} sm={5}>
                            <p>Un proyecto de: <a href="http://somospool.com/" title="POOL Branding" target="_blank">POOL</a> Código por: <a href="http://mintitmedia.com/" title="Mint IT Media - Diseño y desarrollo web" target="_blank">MINT</a></p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
});

module.exports = PoweredWidget;
