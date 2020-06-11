const timeago = require('timeago.js');

module.exports = {
  //+346321456778 --> +xxxxxxxxx
  hideNumber: (phoneNumber = '') => {
    return phoneNumber.replace(/[0-9]/g, 'x');
  },

  timeago: (data) => {
    return timeago.format(data);
  },
};
