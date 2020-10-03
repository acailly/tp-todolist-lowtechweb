const path = require("path");
const outputDir = path.join(__dirname, "..", "dist", "no-js");

const rimraf = require("rimraf");
rimraf.sync(outputDir);

const scrape = require("website-scraper");
const options = {
  urls: ["http://localhost:5000/list"],
  directory: outputDir,
};

scrape(options, (error, result) => {
  if (error) {
    console.log(error);
    return;
  }

  const express = require("express");
  const app = express();
  const bodyParser = require("body-parser");
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(outputDir));
  app.listen(5001, () => {
    console.log("No JS snapshot available at http://localhost:5001/");
  });
});
