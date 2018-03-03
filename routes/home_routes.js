let http = require("https");
let api = require("../utils/api");


module.exports = function (app) {
    app.get('/',(req, res) => {
        api.get('gallery/hot/viral/0.json', function (data) {
            let imageLink = data.data[7].images[0].link;

            let n = imageLink.lastIndexOf(".");
            imageLink = imageLink.substring(0, n) + "m" + imageLink.substring(n);

            res.render('home', {imageUrl: imageLink});

        });

    });
}