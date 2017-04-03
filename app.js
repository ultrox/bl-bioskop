var filmovi; 
var vremena = {};
var nizObj = [];

function format(string) {
    if (/subota/.test(string)) {
        string = string.replace(/\s?subota i nedjelja\s?/g, '');
    }
    string = string.replace(/\s?\+ sub\/ned\s?/g, ',');
    return string
}

function pairTimeToTitle(film) {
    var filmVreme = film[0].trim();
    var filmTitle = film[1].trim();
    //arr vremena
    var vreme = filmVreme.split(',');

    for (var i = 0; i < vreme.length; i++) {
        var v = vreme[i].trim();
        if (Array.isArray(vremena[v])) {
            vremena[v].push(filmTitle);

        } else {
            vremena[v] = [];
            vremena[v].push(filmTitle);
        }
    }

}

function sortVremena(a, b) {
    a.split(':')[0];
    b.split(':')[0];
    var d = new Date();
    var ha = a.split(":")[0];
    var ma = a.split(":")[1];

    var hb = b.split(":")[0];
    var mb = b.split(":")[1];
    return d.setHours(ha, ma) > d.setHours(hb, mb);
}


// var filmovi = ['17:15, 19:30, 22:00 + sub/ned 12:15 $ Ljepotica i Zvijer 3D', '18:00 $ Osnivač', '17:30, 20:00, 22:15 + sub/ned 12:00 $ Biser Bojane', '15:45, 20:15, 22:30 + sub/ned 13:30 $ Kong: Ostrvo lobanja 3D', 'subota i nedjelja 11:30, 15:00 $ Vau Vau zvijezda 3D sinh', '16:30, 19:15 $ Na mliječnom putu', '22:00 + sub/ned 14:00 $ Logan', 'subota i nedjelja 11:45 $ Ričard Roda 3D (sinh)', 'subota i nedjelja 13:15 $ Snježna kraljica 3 3D sinh', 'subota i nedjelja 14:45 $ Pjevajmo 3D '];

// parse things from bl-bioskop.ba


console.log('this is row', filmovi)
 
// for (var i = 0; i < filmovi.length; i++) {
// 	var movie = format(filmovi[i]).split('$');
// 	pairTimeToTitle(movie);
// }
//
//
// for(i in vremena) {
//    nizObj.push(i + ":" + vremena[i])
// }
//
// var filmoviSorted = nizObj.sort(sorted)
