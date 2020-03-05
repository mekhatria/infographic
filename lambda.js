'use strict';

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./lib/app');
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log('Event: ' + JSON.stringify(event));
  return awsServerlessExpress.proxy(server, event, context);
};
