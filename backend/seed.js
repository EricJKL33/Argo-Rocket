const mongoose = require("mongoose");
const Rocket = require("./models/Rocket");

mongoose.connect("mongodb://localhost/your_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const rockets = [
  {
    name: "Falcon 1",
    active: true,
    firstFlight: new Date("2006-03-24"),
    country: "United States",
    description:
      "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.",
    coverUrl: "https://example.com/falcon1.jpg",
  },
  {
    name: "Falcon 9",
    active: true,
    firstFlight: new Date("2010-06-04"),
    country: "United States",
    description:
      "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
    coverUrl: "https://example.com/falcon9.jpg",
  },
  {
    name: "Falcon Heavy",
    active: true,
    firstFlight: new Date("2018-02-06"),
    country: "United States",
    description:
      "With the ability to lift into orbit nearly 64 metric tons (141,000 lb)---a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
    coverUrl: "https://example.com/falconheavy.jpg",
  },
  {
    name: "Starship",
    active: true,
    firstFlight: new Date("2020-08-04"),
    country: "United States",
    description:
      "Starship is the fully reusable second stage and has an integrated payload section. Starship serves as a large, long-duration spacecraft capable of carrying passengers or cargo to Earth orbit, planetary destinations, and between destinations on Earth.",
    coverUrl: "https://example.com/starship.jpg",
  },
  {
    name: "Dragon",
    active: true,
    firstFlight: new Date("2010-12-08"),
    country: "United States",
    description:
      "Dragon is a free-flying spacecraft designed to deliver both cargo and people to orbiting destinations. Dragon made history in 2012 when it became the first commercial spacecraft in history to deliver cargo to the International Space Station and safely return cargo to Earth, a feat previously achieved only by governments.",
    coverUrl: "https://example.com/dragon.jpg",
  },
];

Rocket.insertMany(rockets)
  .then(() => {
    console.log("Data seeding successful");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Data seeding error: ", error);
  });
