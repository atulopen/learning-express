function get(req, res) {
    return res.end('Albert is a very good human being!')
}

function post(req, res) {
    return res.end('Updating message ....')
}

module.exports = {
    get,
    post
}