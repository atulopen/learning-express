const express = require('express');
const friendsRouter = require('./routes/friend.route');
const messageRouter = require('./routes/message.route');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messageRouter);


app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
});