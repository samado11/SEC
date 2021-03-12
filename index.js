const scrape = require('website-scraper');

let options = {
    urls: ['https://www.evolis.com/markets/corporate-card-printing'],
    directory: './node-homepage/markets/corporate-card-printing',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});