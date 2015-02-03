var $ = require('jquery');

module.exports = {

  /**
   * API request
   * @param {string} command
   * @param {null|Object} options
   */
  request: function (command, options) {
    var params = $.extend({
      command: command,
      version: 'v1.1',
      language: 'ru'
    }, options || {});

    // @todo change URL from settings
    return $.ajax('http://vocxod.com/api/index.php', { method: 'POST', data: params });
  }
};
