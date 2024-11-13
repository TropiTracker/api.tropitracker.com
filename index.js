const fs = require('fs')
const express = require('express');
const outlooks = new (require('./lib/outlooks.js'))
const app = express();
const port = 8484;

outlooks.functions.init();

app.get('/index.json', async (req, res) => {
    const atlanticOutlook = await outlooks.functions.getAtlanticOutlook();
    const eastPacificOutlook = await outlooks.functions.getEastPacificOutlook();
    const centralPacificOutlook = await outlooks.functions.getCentralPacificOutlook();

    const json = {
        outlooks: {
            atlanticOutlook: atlanticOutlook, 
            eastPacificOutlook: eastPacificOutlook, 
            centralPacificOutlook: centralPacificOutlook
        }
    }

    fs.writeFileSync('index.json', JSON.stringify(json, null, 2));

    res.json(json); // ngl i dont even know if this is necessary
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})