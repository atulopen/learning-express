const friends = require('../models/friends.model');

function get(req, res) {
    return res.json(friends);
}

function view(req, res) {
    const {friendId} = req.params;
    const friend = friends.find(fd => fd.id === Number(friendId));
    if (friend) {
        return res.json(friend);
    }
    return res.status(404).end();
}

function post(req, res) {
    const name = req.body.name;
    if (!name) {
        res.status(402);
        return res.json({error: 'The name field is required'})
    }

    const newFriend = {
        id: friends.length,
        name,
    }
    friends.push(newFriend);

    return res.json(newFriend);
}

module.exports = {
    get,
    post,
    view,
}