const miYargs = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección para optener el clima',
        demamd: true
    }
}).argv;

module.exports = {
    miYargs
}