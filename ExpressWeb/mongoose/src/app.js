const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017//mychannel");


setTimeout(function () {
    mongoose.connect('mongodb://127.0.0.1:27017/myapp');
    console.log("im working")
}, 3000);

// Will just hang until mongoose successfully connects
// await promise;

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    ctype: String,
    videos: Number,
    author: String,
    action: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model("playlist", playlistSchema)


const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "Node JS",
            ctype: "Back END",
            videos: 80,
            author: "Saloni Gupta",
            active: true
        })
        const javaScriptPlaylist = new Playlist({
            name: "JavaScript  JS",
            ctype: "Back END",
            videos: 70,
            author: "Saloni Gupta",
            active: true
        })
        const mongoPlaylist = new Playlist({
            name: "Mongo Db",
            ctype: "Databasr",
            videos: 30,
            author: "Saloni Gupta",
            active: true
        })
        const mongooseDb = new Playlist({
            name: "Mongo Db",
            ctype: "database",
            videos: 20,
            author: "Saloni Gupta",
            active: true
        })
        const result = await Playlist.insertMany([reactPlaylist, javaScriptPlaylist, mongoPlaylist, mongooseDb]);
        console.log(result);
    }
    catch (err) {
        console.log(err)
    }
}
createDocument()