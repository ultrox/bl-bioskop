var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var BioskopSchema = {
	imeFilma: String,
	vremePrikazivanja: String,
	imdb: Number
}

var Bioskop = mongoose.model('aktivniFilmovi', BioskopSchema);

module.exports = Bioskop;
