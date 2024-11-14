const xml2js = require('xml2js')
const axios = require('axios')

let functions = {}

const currentStormsSampleUrl = 'https://www.nhc.noaa.gov/productexamples/NHC_JSON_Sample.json'
const currentStormsUrl = 'https://www.nhc.noaa.gov/CurrentStorms.json'

functions.init = async function() {
    console.log('[TropiTracker]: Loaded active cyclone functions');
}

functions.getAllStorms = async function() {
    const response = (await axios.get(currentStormsUrl)).data.activeStorms;

    for (const storm of response) {
        const detailedUrl = `https://www.nhc.noaa.gov/nhc_${storm.binNumber.toLowerCase()}.xml`;
        const unparsedDetails = (await axios.get(detailedUrl));
        const parsedDetails = (await xml2js.parseStringPromise(unparsedDetails.data)).rss.channel[0].item[0]['nhc:Cyclone'][0];

        var atcf = parsedDetails['nhc:atcf'][0];
        var fourDigitAtcf;
        if (parsedDetails['nhc:atcf'][0].includes("AL")) {
            fourDigitAtcf = "AT" + parsedDetails['nhc:atcf'][0].slice(2, 4);
        } else {
            fourDigitAtcf = parsedDetails['nhc:atcf'][0].slice(0, 4);
        }

        const details = [{
            type: parsedDetails['nhc:type'][0],
            name: parsedDetails['nhc:name'][0],
            wallet: parsedDetails['nhc:wallet'][0],
            atcf: atcf,
            datetime: parsedDetails['nhc:datetime'][0],
            wind: parsedDetails['nhc:wind'][0],
            pressure: parsedDetails['nhc:pressure'][0],
            center: parsedDetails['nhc:center'][0],
            movement: parsedDetails['nhc:movement'][0],
            headline: parsedDetails['nhc:headline'][0],
            coneTrack: `https://www.nhc.noaa.gov/storm_graphics/${fourDigitAtcf}/${atcf}_5day_expCone.png`,
            satelliteGif: `https://cdn.star.nesdis.noaa.gov/FLOATER/data/${atcf}/GEOCOLOR/${atcf}-GEOCOLOR-1000x1000.gif`,
            irSatelliteGif: `https://cdn.star.nesdis.noaa.gov/FLOATER/data/${atcf}/13/${atcf}-13-1000x1000.gif`,
        }]

        return details;
    }
}

class cyclones {constructor() {this.functions = functions}}
module.exports = cyclones;