const db = require("../config/connection");
const { User } = require("../models");
const { Location } = require("../models");
const userSeeds = require("./userSeeds.json");
const locationSeeds = require("./locationSeed.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Location.deleteMany({});

    await User.create(userSeeds);
    await Location.create(locationSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
