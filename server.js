const express = require('express');
const friendsRouter = require('./routes/friend.route');
const messageRouter = require('./routes/message.route');
const path = require("path");

const PORT = 3001;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const startTime = Date.now();
    next();
    const endTime = Date.now() - startTime;
    console.log(`This request takes ${endTime} ms`);
})

app.use('/friends', friendsRouter);
app.use('/messages', messageRouter);

app.use('/site', express.static(path.join(__dirname, 'public')))


app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
});