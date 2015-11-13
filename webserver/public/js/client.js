'use strict';

$(function () {

  // var socket = io.connect();
  var socket = io.connect('http://node-soup.herokuapp.com:80');

  socket.on('badge', function(badge) {
      var img = $('<img src="'+badge.badge_id+'" alt="Code School Badge">');
      $('.badge-wrapper').prepend(img);
      setTimeout(function(){
        img.addClass('on');
      }, 0);
  });

});
