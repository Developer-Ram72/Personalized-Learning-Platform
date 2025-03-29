// server/allNetworks.js
const techNetwork = require('./videoData');
const foodNetwork = require('./foodData');
const eduNetwork = require('./eduData');
const artNetwork = require('./artData');

const allNetworks = {
  tech: techNetwork,
  food: foodNetwork,
  education: eduNetwork,
  art: artNetwork
};

module.exports = allNetworks;
