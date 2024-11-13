const xml2js = require('xml2js')
const axios = require('axios')
let functions = {}

const atlanticUrl = 'https://www.nhc.noaa.gov/xml/TWOAT.xml'
const eastPacificUrl = 'https://www.nhc.noaa.gov/xml/TWOEP.xml'
const centralPacificUrl = 'https://www.nhc.noaa.gov/xml/TWOCP.xml'

functions.init = async function() {
    console.log('[TropiTracker]: Loaded outlook functions');
}

functions.getAtlanticOutlook = async function() {
    return await getOutlookFromLink(atlanticUrl);
}

functions.getEastPacificOutlook = async function() {
    return await getOutlookFromLink(eastPacificUrl);
}

functions.getCentralPacificOutlook = async function() {
    return await getOutlookFromLink(centralPacificUrl);
}

async function getOutlookFromLink(url) {
    const response = await axios.get(url);
    const parsedResponse = await xml2js.parseStringPromise(response.data);
    
    const outlookData = parsedResponse.rss.channel[0].item[0].description[0];
    return outlookData;
}

class outlooks {constructor() {this.functions = functions}}
module.exports = outlooks;