'use strict';

var axon = require('axon');
var sock = axon.socket('pub');

sock.bind(8001);

exports.send = function(badge) {
  sock.send(badge);
};
