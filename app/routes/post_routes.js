module.exports = function (app) {
    app.get('/posts', function (req, res) {
        res.render('layout', {
            title: 'Post'
        });
    });
}