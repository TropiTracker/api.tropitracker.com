const express = require('express');
const outlooks = new (require('./lib/outlooks.js'))
const app = express();
const port = 8484;

outlooks.functions.init();

app.get('/', async (req, res) => {
    const outlookData = await outlooks.functions.getAtlanticOutlook();
    console.log(outlookData)
    res.json({ data: outlookData });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})