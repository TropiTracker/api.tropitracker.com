const fs = require('fs');
const express = require('express');
const outlooks = new (require('./lib/outlooks.js'));
const cyclones = new (require('./lib/cyclones.js'));
const app = express();
const port = 8484;

outlooks.functions.init();
cyclones.functions.init();

var json;

async function loadApi() {
    const atlanticOutlook = await outlooks.functions.getAtlanticOutlook();
    const eastPacificOutlook = await outlooks.functions.getEastPacificOutlook();
    const centralPacificOutlook = await outlooks.functions.getCentralPacificOutlook();

    const activeStorms = await cyclones.functions.getAllStorms();

    json = {
        outlooks: {
            atlanticOutlook: atlanticOutlook, 
            eastPacificOutlook: eastPacificOutlook, 
            centralPacificOutlook: centralPacificOutlook
        },
        activeStorms
    }

    fs.writeFileSync('index.json', JSON.stringify(json, null, 2));
}

loadApi();

// app.get('/index.json', async (req, res) => {
//     res.json(json); // ngl i dont even know if this is necessary
// })

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// })