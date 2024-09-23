const main = {
    getHomeData: (req, res) => {
        res.render('index');
    },

    postData: (req, res) => {
        const name = req.body.name;
    res.render('get', { name: name });
    },
};

module.exports = main;