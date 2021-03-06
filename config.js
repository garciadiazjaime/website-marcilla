'use strict';

var convict = require('convict');

var config = convict({
    email: {
      doc: 'default contact email',
      format: String,
      default: 'info@mintitmedia.com'
    },
    ipaddress: {
        doc: 'IP the application runs on',
        format: 'ipaddress',
        default: '127.0.0.1',
        env: 'OPENSHIFT_NODEJS_IP'
    },
    port: {
        doc: 'Port the application listens on',
        format: 'port',
        default: '3000',
        env: 'OPENSHIFT_NODEJS_PORT'
    },
    sendgrid: {
        doc: 'Sendrid API KEY',
        format: String,
        default: '',
        env: 'SENDGRID_API_KEY'
    },
    storeURL: {
        doc: 'Store URL',
        format: 'url',
        default: 'http://127.0.0.1:8000/catalogue/category/extintores_1/',
        env: 'STORE_URL'
    }
});

config.validate();

module.exports = config;
