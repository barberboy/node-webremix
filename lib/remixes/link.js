'use strict';

var request = require('request');

// See if this url exists
exports.process = function (media, remix, options, callback) {
  setTimeout(function () {
    request({
      method: 'HEAD',
      url: media,
      followAllRedirects: false }, function (err, resp) {
        if (err) {
          callback(null, media);

        } else {
          callback(null, [
            '<iframe class="link-wrapper" src="', media,
            '" height="', options.height,
            '" width="',  options.width, '">',
            '<a href="', media ,
            '" target="_blank">', media, '</a>',
            '</iframe>'
            ].join(''));
        }
    });
  }, 0);
};
