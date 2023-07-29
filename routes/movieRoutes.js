const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'media/movieimage');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const movieRoutes = require('../controller/movieController');


router.get('/', movieRoutes.viewMovieData);

router.post('/addMovieData', upload.single('movieimage'), movieRoutes.addMovieData);

router.get('/addMovieDatas', movieRoutes.addMovieDatas);

router.get('/viewMovieData', movieRoutes.viewMovieData);

router.get('/movie/viewmore/:id', movieRoutes.viewMore);

module.exports = router;