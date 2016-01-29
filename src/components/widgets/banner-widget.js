'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var BannerWidget = React.createClass({

    render: function() {

        return (
            <div className="banner banner-products">
            	<div className="container">
                <h1>{this.props.title}</h1>
               </div>
            </div>
        );
    }
});

module.exports = BannerWidget;
