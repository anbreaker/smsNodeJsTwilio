module.exports = {
  //+346321456778 --> +xxxxxxxxx
  hideNumber: (phoneNumber = '') => {
    return phoneNumber.replace(/[0-9]/g, 'x');
  },
};
