const fs = require('fs');
const express = require('express');
const outlooks = new (require('./lib/outlooks.js'));
const cyclones = new (require('./lib/cyclones.js'));
const app = express();
const port = 8484;

outlooks.functions.init();
cyclones.functions.init();

var json;
var jsonHurricanes;
var jsonTropicalStorms;
var jsonTropicalDepressions;
var jsonOutlooks;

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

async function loadHurricanes() {
    const activeHurricanes = await cyclones.functions.getHurricanes();

    jsonHurricanes = {
        activeHurricanes
    }

    fs.writeFileSync('hurricanes.json', JSON.stringify(jsonHurricanes, null, 2));
}

loadHurricanes();

async function loadTropicalStorms() {
    const activeStorms = await cyclones.functions.getTropicalStorms();

    jsonTropicalStorms = {
        activeStorms
    }

    fs.writeFileSync('tropical-storms.json', JSON.stringify(jsonTropicalStorms, null, 2));
}

loadTropicalStorms();

async function loadTropicalDepressions() {
    const activeDepressions = await cyclones.functions.getTropicalDepressions();
    const potentialCyclones = await cyclones.functions.getPotentialCyclones();

    jsonTropicalDepressions = {
        activeDepressions: activeDepressions,
        potentialCyclones: potentialCyclones
    }

    fs.writeFileSync('tropical-depressions.json', JSON.stringify(jsonTropicalDepressions, null, 2));
}

loadTropicalDepressions();

async function loadOutlooks() {
    const atlanticOutlook = await outlooks.functions.getAtlanticOutlook();
    const eastPacificOutlook = await outlooks.functions.getEastPacificOutlook();
    const centralPacificOutlook = await outlooks.functions.getCentralPacificOutlook();

    jsonOutlooks = {
        outlooks: {
            atlanticOutlook: atlanticOutlook,
            eastPacificOutlook: eastPacificOutlook,
            centralPacificOutlook: centralPacificOutlook
        }
    }

    fs.writeFileSync('outlooks.json', JSON.stringify(jsonOutlooks, null, 2));
}

loadOutlooks();

// De-note when testing

// app.get('/index.json', async (req, res) => {
//     res.json(json);
// })

// app.get('/hurricanes.json', async (req, res) => {
//     res.json(jsonHurricanes);
// })

// app.get('/tropical-storms.json', async (req, res) => {
//     res.json(jsonTropicalStorms);
// })

// app.get('/tropical-depressions.json', async (req, res) => {
//     res.json(jsonTropicalDepressions);
// })

// app.get('/outlooks.json', async (req, res) => {
//     res.json(jsonOutlooks);
// })

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// })