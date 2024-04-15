const mongoose = require("mongoose");
const Rocket = require("./models/Rocket");

mongoose.connect("mongodb://localhost:27017/rockets");

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
    active: false,
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
    active: false,
    firstFlight: new Date("2010-12-08"),
    country: "United States",
    description:
      "Dragon is a free-flying spacecraft designed to deliver both cargo and people to orbiting destinations. Dragon made history in 2012 when it became the first commercial spacecraft in history to deliver cargo to the International Space Station and safely return cargo to Earth, a feat previously achieved only by governments.",
    coverUrl: "https://example.com/dragon.jpg",
  },
  {
    name: "Atlas V",
    active: true,
    firstFlight: new Date("2002-08-21"),
    country: "United States",
    description:
      "Atlas V is an expendable launch system and the fifth major version in the Atlas rocket family. It is manufactured by ULA, a partnership between Lockheed Martin and Boeing.",
    coverUrl: "https://example.com/atlasv.jpg",
  },
  {
    name: "Delta IV",
    active: true,
    firstFlight: new Date("2002-11-20"),
    country: "United States",
    description:
      "Delta IV is an expendable launch system in the Delta rocket family. The rocket's main components are designed by Boeing's Defense, Space & Security division and built in the United Launch Alliance (ULA) facility in Decatur, Alabama.",
    coverUrl: "https://example.com/deltaiv.jpg",
  },
  {
    name: "Ariane 5",
    active: false,
    firstFlight: new Date("1996-06-04"),
    country: "European Union",
    description:
      "Ariane 5 is a European heavy-lift launch vehicle that is part of the Ariane rocket family, an expendable launch system designed by the Centre national d'études spatiales (CNES).",
    coverUrl: "https://example.com/ariane5.jpg",
  },
  {
    name: "Proton-M",
    active: true,
    firstFlight: new Date("2001-04-07"),
    country: "Russia",
    description:
      "The Proton-M, (Протон-М) GRAU index 8K82M or 8K82KM, is a Russian heavy-lift launch vehicle derived from the Soviet-developed Proton. It is built by Khrunichev, and launched from sites 81 and 200 at the Baikonur Cosmodrome in Kazakhstan.",
    coverUrl: "https://example.com/protonm.jpg",
  },
  {
    name: "H-IIA",
    active: false,
    firstFlight: new Date("2001-08-29"),
    country: "Japan",
    description:
      "H-IIA (H2A) is an active expendable launch system operated by Mitsubishi Heavy Industries (MHI) for the Japan Aerospace Exploration Agency. The liquid-fueled H-IIA rockets have been used to launch satellites into geostationary orbit, to launch a lunar orbiting spacecraft, and to launch Akatsuki, which studied Venus.",
    coverUrl: "https://example.com/h2a.jpg",
  },
];

mongoose.connection.once('open', async () => {
  try {
    await Rocket.insertMany(rockets);
    console.log('Rockets data has been inserted');
  } catch (error) {
    console.error('Error inserting data: ', error);
  } finally {
    mongoose.connection.close();
  }
});
