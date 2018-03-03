let http = require("https");

let options = {
    "method": "GET",
    "hostname": "api.imgur.com",
    "path": "/3/",
    "headers": {
        "Authorization": "Client-ID 8887a1b7810c21e"
    }
};

module.exports = {
    get: function (url, cb) {
        options.path += url;
        req = http.request(options, function (res) {
            let chunks = '';

            res.on("data", function (chunk) {
                chunks += chunk;
            });
            res.on("end", function () {
                let data = JSON.parse(chunks);
                cb(data);
            });
        });
        req.end();
    }
};

