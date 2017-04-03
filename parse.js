var jsdom = require("jsdom");

//DB stuff
var mongoose = require("mongoose");

var nameDB = 'activeBioskop';
var url = 'mongodb://localhost/' + nameDB;
var Bioskop = require('./models/Bioskop.js');

mongoose.connect(url);
var db = mongoose.connection;
var isError;
db.on('error', function(err) {isError = true; console.log('Life is crule, Mongo error', err)})
db.on('open', function() {
	console.log('Connected');
});

// Start to parse 
jsdom.env({
	url: "http://bl-bioskop.ba",
	scripts: ["http://code.jquery.com/jquery.js"],
	done: function (err, window) {
		console.log('starting things');
		var $ = window.$;
		console.log("Repertoar");
		var titlovi = $("#rt-sidebar-a a");
		var vremena = $('#rt-sidebar-a p+ p');

		vremena.each(function(index, value) {
			console.log($(value).text())
		})
		var arr = [];
		for(var i=0; i < vremena.length - 1; i++) {
			arr.push($(vremena[i]).text() + " $ " + $(titlovi[i]).text());
		}
		// write each movie to db
		if(isError) {
			arr.forEach(item => console.log(item))
		}
		arr.forEach(function(item) {
			var film = item.split('$')
			var movie = {
				imeFilma: film[1].trim(),
				vremePrikazivanja: film[0].trim()
			}
			var noviFilm = new Bioskop(movie);
			//save to DB
			noviFilm.save(function(err, res) {
				if(err) throw err
				console.log('saved', movie.imeFilma)
			})
		})
	}
});
