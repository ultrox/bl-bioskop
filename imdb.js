const imdb = require('imdb-api');

imdb.getReq({name: 'Beauty and the Beast'}, function(err, result) {
	console.log(result);
})


