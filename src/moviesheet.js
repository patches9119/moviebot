const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();

const creds = require('../client_secret.json');
const doc = new GoogleSpreadsheet('1ELvIIi_zAlwULvND9AWG8QnElHpeYyBZyL2LSZbdoeg');

function printSubmission(movie) {

}

function printAllMovies(sheet, rows) {

}

async function accessSpreadsheet() {
    await doc.useServiceAccountAuth({
        client_email: creds.client_email,
        private_key: creds.private_key,
      });
    
      await doc.loadInfo(); // loads document properties and worksheets
    //   console.log(doc.title);
    
      const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    //   console.log(sheet.title);
    //   console.log(sheet.rowCount);

    const rows = await sheet.getRows();
    // console.log(rows);
    // rows.forEach(row => {
    //     console.log(row.MovieName);
    // })


    // const cells = await sheet.loadCells({
    //     'min-row': 2,
    //     'max-row': 6,
    //     'min-col': 2,
    //     'max-col': 4,
    // });

    // for(const cell of cells) {
    //     console.log('${cell.row}, ${cell.col}: ${cell.value}');
    // }

}

accessSpreadsheet();





//DISCORD BOT PROGRAMMED HERE


// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);


