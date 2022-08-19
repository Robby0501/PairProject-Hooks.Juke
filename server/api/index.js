const router = require('express').Router()
const {Album, Artist, Song} = require('../db')


// connect your API routes here!
router.get('/albums', async   (req,res,next) => {
    try {
        const albums = await Album.findAll();

        res.send(albums)
    }
    catch (err) {
        next(err);
    }
})

router.get('/albums/:albumId', async   (req,res,next) => {
    try {
        const album = await Album.findAll({
            include: [
                {
                    model: Artist
                },
                {
                    model: Song
                }
            ],
            where: {id: req.params.albumId}
        });
        
        res.send(album)
    }
    catch (err) {
        next(err);
    }
})

module.exports = router
