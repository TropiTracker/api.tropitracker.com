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
    const response = await axios.get(atlanticUrl);
    const parsedResponse = await xml2js.parseStringPromise(response.data);
    
    const outlookData = parsedResponse.rss.channel[0].item[0].description[0];
    return outlookData;
}

class outlooks {constructor() {this.functions = functions}}
module.exports = outlooks;