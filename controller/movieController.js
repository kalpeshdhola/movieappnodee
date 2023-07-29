const Movie = require('../modal/movieModal');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'media/movieimage');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });


module.exports.home = (req, res) => {
    Movie.find({}).then((data) => {
        return res.render('addMovieData', {
            'record': data
        });
    }
    ).catch(err => {
        console.log(err);
    })
}

module.exports.addMovieData = (req, res) => {
    Movie.create({
        movieName: req.body.movieName,
        movieBudget: req.body.movieBudget,
        movieGenere: req.body.movieGenere,
        movieReleaseDate: req.body.movieReleaseDate,
        movieDirector: req.body.movieDirector,
        movieDescription: req.body.movieDescription,
        movieimage: req.file.filename,
        movieImdb: req.body.movieImdb,
        movieZone: req.body.movieZone
    }).then((data) => {
        return res.redirect('viewMovieData');
    }).catch(err => {
        console.log(err);
    })
}

module.exports.addMovieDatas = (req, res) => {
    return res.render('addMovieData');
}

module.exports.viewMovieData = (req, res) => {
    Movie.find({}).then((data) => {
        return res.render('viewMovieData', {
            'record': data
        });
    }
    ).catch(err => {
        console.log(err);
    })
}

module.exports.viewMore = (req, res) => {
    Movie.findById(req.params.id).then((dataofmovies) => {
        console.log(dataofmovies);
        return res.render('detailsOfMovie', {
            'recordofmovie': dataofmovies
        });
    }
    ).catch(err => {
        console.log(err);
    })
}