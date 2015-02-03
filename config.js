module.exports = require(process.env.NODE_ENV == 'production' ? './config/production.js' : './config/development.js');
