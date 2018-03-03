module.exports = function (app) {
    app.get('/posts', function (req, res) {
        res.render('base-layout', {
            title: 'NEW'
        });
    });
}