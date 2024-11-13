const express = require('express');
const outlooks = new (require('./lib/outlooks.js'))
const app = express();
const port = 8484;

outlooks.functions.init();

app.get('/', async (req, res) => {
    const atlanticOutlook = await outlooks.functions.getAtlanticOutlook();
    const eastPacificOutlook = await outlooks.functions.getEastPacificOutlook();
    const centralPacificOutlook = await outlooks.functions.getCentralPacificOutlook();
    res.json({
        outlooks: {
            atlanticOutlook, 
            eastPacificOutlook, 
            centralPacificOutlook
        }
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})