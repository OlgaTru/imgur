const homeRoutes = require('./home_routes');
const postRoutes = require('./post_routes');

module.exports = function(app){
    homeRoutes(app);
    postRoutes(app);
};