
let http = require("https");

let options = {
    "method": "GET",
    "hostname": "api.imgur.com",
    "path": "/3/gallery/hot",
    "headers": {
        "Authorization": "Client-ID 8887a1b7810c21e"
    }
};



module.exports = function (app) {
    app.get('/',(req, res) => {
       /* res.render('index', {
            title: 'Hello'
        });*/
        req = http.request(options, function (res2) {
            let chunks = [];
            res2.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res2.on("end", function () {
                let body = Buffer.concat(chunks);
                res.send(body.toString());
            });
        });

        req.end();
    });
}