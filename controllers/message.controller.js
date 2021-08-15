const path = require('path');

function get(req, res) {
    return res.sendfile(path.join(__dirname, '..', 'public', 'images', 'myphoto.jpg'));
}

function post(req, res) {
    return res.end('Updating message ....')
}

module.exports = {
    get,
    post
}