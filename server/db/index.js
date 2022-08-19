const db = require('./db')
const Album = require('./album')
const Artist = require('./Artist')
const Song = require('./Song')

// require each of your models here...
Album.hasMany(Song)
Song.belongsTo(Album)

Artist.hasMany(Song)
Song.belongsTo(Artist)

Album.belongsTo(Artist)
Artist.hasMany(Album)

// ...and give them some nice associations here!


module.exports = {
  db,
  Album,
  Song,
  Artist
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}

//one artist can have multiple albums
//one album can have multiple songs
//artists can have multiple songs

