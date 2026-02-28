import { act } from "react";
import { start } from "repl";

import { Catalog, ToyLine } from "./data.types";

const _frontCover: ToyLine = {
  id: "frontCover",
  slug: "front-cover",
  name: "Front Cover",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const actionMan: ToyLine = {
  id: "actionMan",
  slug: "action-man",
  name: "Action Man",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const aliens: ToyLine = {
  id: "aliens",
  slug: "aliens",
  name: "Aliens",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const badBeast: ToyLine = {
  id: "badBeast",
  slug: "badBeast",
  name: "Bad Beast",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const batmanAndRobin: ToyLine = {
  id: "batmanAndRobin",
  slug: "batman-and-robin",
  name: "Batman & Robin",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const batmanForever: ToyLine = {
  id: "batmanForever",
  slug: "batman-forever",
  name: "Batman Forever",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const batmanReturns: ToyLine = {
  id: "batmanReturns",
  slug: "batman-returns",
  name: "Batman Returns",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const batmanTheAnimatedSeries: ToyLine = {
  id: "batmanTheAnimatedSeries",
  slug: "batman-the-animated-series",
  name: "Batman: The Animated Series",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const beastWars: ToyLine = {
  id: "beastWars",
  slug: "beast-wars",
  name: "Beast Wars",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const beetlejuice: ToyLine = {
  id: "beetlejuice",
  slug: "beetlejuice",
  name: "Beetlejuice",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const billAndTedsExcellentAdventure: ToyLine = {
  id: "billAndTedsExcellentAdventure",
  slug: "bill-and-ted",
  name: "Bill & Ted's Excellent Adventure",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const blastJets: ToyLine = {
  id: "blastJets",
  slug: "blast-jets",
  name: "Blast Jets",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const boneAge: ToyLine = {
  id: "boneAge",
  slug: "bone-age",
  name: "Bone Age",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const buildingBlasters: ToyLine = {
  id: "buildingBlasters",
  slug: "building-blasters",
  name: "Building Blasters",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const capitolCritters: ToyLine = {
  id: "capitolCritters",
  slug: "capitol-critters",
  name: "Capitol Critters",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const carzillas: ToyLine = {
  id: "carzillas",
  slug: "carzillas",
  name: "Carzillas",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const congo: ToyLine = {
  id: "congo",
  slug: "congo",
  name: "Congo",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const cyberStrykeGear: ToyLine = {
  id: "cyberStrykeGear",
  slug: "cyber-stryke-gear",
  name: "Cyber Stryke Gear",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const dragonheart: ToyLine = {
  id: "dragonheart",
  slug: "dragonheart",
  name: "DragonHHeart",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const gargoyles: ToyLine = {
  id: "gargoyles",
  slug: "gargoyles",
  name: "Gargoyles",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const giJoe: ToyLine = {
  id: "giJoe",
  slug: "gi-joe",
  name: "G.I. Joe",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const giJoeExtreme: ToyLine = {
  id: "giJoeExtreme",
  slug: "gi-joe-extreme",
  name: "G.I. Joe Extreme",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const jurassicPark: ToyLine = {
  id: "jurassicPark",
  slug: "jurassic-park",
  name: "Jurassic Park",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const legendsOfBatman: ToyLine = {
  id: "legendsOfBatman",
  slug: "legends-of-batman",
  name: "Legends of Batman",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const legendsOfTheDarkKnight: ToyLine = {
  id: "legendsOfTheDarkKnight",
  slug: "legends-of-the-dark-knight",
  name: "Legends of the Dark Knight",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const maskSplitSeconds: ToyLine = {
  id: "maskSplitSeconds",
  slug: "mask-split-seconds",
  name: "M.A.S.K. Split Seconds",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const megaForce: ToyLine = {
  id: "megaForce",
  slug: "mega-force",
  name: "Mega Force",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const microVerse: ToyLine = {
  id: "microVerse",
  slug: "microverse",
  name: "MicroVerse",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const mortalKombat: ToyLine = {
  id: "mortalKombat",
  slug: "mortal-kombat",
  name: "Mortal Kombat",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const nerf: ToyLine = {
  id: "nerf",
  slug: "nerf",
  name: "Nerf",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const policeAcademy: ToyLine = {
  id: "policeAcademy",
  slug: "police-academy",
  name: "Police Academy",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const predator: ToyLine = {
  id: "predator",
  slug: "predator",
  name: "Predator",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const ratFink: ToyLine = {
  id: "ratFink",
  slug: "rat-fink",
  name: "Rat Fink",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const ricochet: ToyLine = {
  id: "ricochet",
  slug: "ricochet",
  name: "Ricochet",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const robinHood: ToyLine = {
  id: "robinHood",
  slug: "robin-hood",
  name: "Robin Hood: Prince of Thieves",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const roboCopAndTheUltraPolice: ToyLine = {
  id: "roboCopAndTheUltraPolice",
  slug: "robocop",
  name: "RoboCop and the Ultra Police",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const savageMondoBlitzers: ToyLine = {
  id: "savageMondoBlitzers",
  slug: "savage-mondo-blitzers",
  name: "Savage Mondo Blitzers",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const shadowStrikers: ToyLine = {
  id: "shadowStrikers",
  slug: "shadow-strikers",
  name: "Shadow Strikers",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const shaqAttack: ToyLine = {
  id: "shaqAttaq",
  slug: "shaq-attaq",
  name: "Shaq Attaq",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const silverhawks: ToyLine = {
  id: "silverhawks",
  slug: "silverhawks",
  name: "Silverhawks",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const skyball: ToyLine = {
  id: "skyball",
  slug: "skyball",
  name: "Skyball",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const skyCommanders: ToyLine = {
  id: "skyCommanders",
  slug: "sky-commanders",
  name: "Sky Commanders",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const ssp: ToyLine = {
  id: "ssp",
  slug: "ssp",
  name: "SSP Super Sonic Power",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const startingLineup: ToyLine = {
  id: "startingLineup",
  slug: "starting-lineup",
  name: "Starting Lineup",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const starWarsShadowsOfTheEmpire: ToyLine = {
  id: "starWarsShadowsOfTheEmpire",
  slug: "star-wars-shadows-of-the-empire",
  name: "Star Wars: Shadows of the Empire",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const starWarsThePowerOfTheForce: ToyLine = {
  id: "starWarsThePowerOfTheForce",
  slug: "star-wars-the-power-of-the-force",
  name: "Star Wars: The Power of the Force",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const superman: ToyLine = {
  id: "superman",
  slug: "superman",
  name: "Superman",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const swampThing: ToyLine = {
  id: "swampThing",
  slug: "swamp-thing",
  name: "Swamp Thing",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const technoZoids: ToyLine = {
  id: "technoZoids",
  slug: "techno-zoids",
  name: "Techno Zoids",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const terminator2: ToyLine = {
  id: "terminator2",
  slug: "terminator-2",
  name: "Terminator 2",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const theAdventuresOfbatmanAndRobin: ToyLine = {
  id: "theAdventuresOfbatmanAndRobin",
  slug: "the-adventures-of-batman-and-robin",
  name: "The Adventures of Batman and Robin",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const theClaw: ToyLine = {
  id: "theClaw",
  slug: "the-claw",
  name: "The Claw",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const theDarkKnightCollection: ToyLine = {
  id: "theDarkKnightCollection",
  slug: "the-dark-knight",
  name: "The Dark Knight Collection",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const theLostWorld: ToyLine = {
  id: "theLostWorld",
  slug: "the-lost-world",
  name: "The Lost World: Jurassic Park",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const theMask: ToyLine = {
  id: "theMask",
  slug: "the-mask",
  name: "The Mask",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const theRealGhostbusters: ToyLine = {
  id: "theRealGhostbusters",
  slug: "ghostbusters",
  name: "The Real Ghostbusters",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const theShadow: ToyLine = {
  id: "theShadow",
  slug: "the-shadow",
  name: "The Shadow",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const tonka: ToyLine = {
  id: "tonka",
  slug: "tonka",
  name: "Tonka",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const totalJustice: ToyLine = {
  id: "totalJustice",
  slug: "total-justice",
  name: "Total Justice",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const transformers: ToyLine = {
  id: "transformers",
  slug: "transformers",
  name: "Transformers",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const vrTroopers: ToyLine = {
  id: "vrTroopers",
  slug: "vr-troopers",
  name: "VR Troopers",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const waterworld: ToyLine = {
  id: "waterworld",
  slug: "waterworld",
  name: "Waterworld",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const winnersCircle: ToyLine = {
  id: "winnersCircle",
  slug: "winners-circle",
  name: "Winner's Circle",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const xrc: ToyLine = {
  id: "xrc",
  slug: "xrc",
  name: "XRC",
  description:
    "Kenner’s The Real Ghostbusters toy line translated the cartoon into colorful, slime-filled action figures and imaginative ghosts. Prioritizing playful creativity over screen accuracy, the range became iconic for its bold designs and stands as a hallmark of inventive 1980s toy design.",
};

const data: Catalog[] = [
  {
    catalogNumber: "881232000",
    id: "1988-1",
    year: "1988",
    width: 1280,
    height: 880,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description:
          "The 1988 Action Toy Guide contains the lines The Real Ghostbusters, Bone Age, Silverhawks, Starting Lineup, Sky Commanders and M.A.S.K. Split Seconds",
      },
      {
        fileName: "02",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "03",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "04",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "05",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "06",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "07",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "08",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "09",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "10",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "11",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "12",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "13",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "14",
        toyLine: silverhawks,
        description: "",
      },
      {
        fileName: "15",
        toyLine: silverhawks,
        description: "",
      },
      {
        fileName: "16",
        toyLine: silverhawks,
        description: "",
      },
      {
        fileName: "17",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "18",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "19",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "20",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "21",
        toyLine: skyCommanders,
        description: "",
      },
      {
        fileName: "22",
        toyLine: skyCommanders,
        description: "",
      },
      {
        fileName: "23",
        toyLine: skyCommanders,
        description: "",
      },
      {
        fileName: "24",
        toyLine: skyCommanders,
        description: "",
      },
      {
        fileName: "25",
        toyLine: maskSplitSeconds,
        description: "",
      },
      {
        fileName: "26",
        toyLine: maskSplitSeconds,
        description: "",
      },
      {
        fileName: "27",
        toyLine: maskSplitSeconds,
        description: "",
      },
      {
        fileName: "28",
        toyLine: maskSplitSeconds,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "881232010",
    id: "1988-2",
    year: "1988",
    width: 1280,
    height: 880,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "03",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "04",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "05",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "06",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "07",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "08",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "09",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "10",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "11",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "12",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "13",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "14",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "15",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "16",
        toyLine: silverhawks,
        description: "",
      },
      {
        fileName: "17",
        toyLine: silverhawks,
        description: "",
      },
      {
        fileName: "18",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "19",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "20",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "21",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "22",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "23",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "24",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "25",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "26",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "27",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "28",
        toyLine: skyball,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "881232020",
    id: "1988-3",
    year: "1988",
    width: 1280,
    height: 880,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "03",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "04",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "05",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "06",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "07",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "08",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "09",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "10",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "11",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "12",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "13",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "14",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "15",
        toyLine: boneAge,
        description: "",
      },
      {
        fileName: "16",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "17",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "18",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "19",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "20",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "21",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "22",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "23",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "24",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "25",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "26",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "27",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "28",
        toyLine: skyball,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "881233000",
    id: "1989",
    year: "1989",
    width: 1280,
    height: 880,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "03",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "04",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "05",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "06",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "07",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "08",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "09",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "10",
        toyLine: buildingBlasters,
        description: "",
      },
      {
        fileName: "11",
        toyLine: buildingBlasters,
        description: "",
      },
      {
        fileName: "12",
        toyLine: buildingBlasters,
        description: "",
      },
      {
        fileName: "13",
        toyLine: megaForce,
        description: "",
      },
      {
        fileName: "14",
        toyLine: megaForce,
        description: "",
      },
      {
        fileName: "15",
        toyLine: megaForce,
        description: "",
      },
      {
        fileName: "16",
        toyLine: megaForce,
        description: "",
      },
      {
        fileName: "17",
        toyLine: megaForce,
        description: "",
      },
      {
        fileName: "18",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "19",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "20",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "21",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "22",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "23",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "24",
        toyLine: policeAcademy,
        description: "",
      },
      {
        fileName: "25",
        toyLine: policeAcademy,
        description: "",
      },
      {
        fileName: "26",
        toyLine: policeAcademy,
        description: "",
      },
      {
        fileName: "27",
        toyLine: policeAcademy,
        description: "",
      },
      {
        fileName: "28",
        toyLine: blastJets,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "881242000",
    id: "1990-1",
    year: "1990",
    width: 1280,
    height: 880,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "03",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "04",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "05",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "06",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "07",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "08",
        toyLine: ratFink,
        description: "",
      },
      {
        fileName: "09",
        toyLine: ratFink,
        description: "",
      },
      {
        fileName: "10",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "11",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "12",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "13",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "14",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "15",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "16",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "17",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "18",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "19",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "20",
        toyLine: megaForce,
        description: "",
      },
      {
        fileName: "21",
        toyLine: megaForce,
        description: "",
      },
      {
        fileName: "22",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "23",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "24",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "25",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "26",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "27",
        toyLine: shadowStrikers,
        description: "",
      },
      {
        fileName: "28",
        toyLine: shadowStrikers,
        description: "",
      },
      {
        fileName: "29",
        toyLine: shadowStrikers,
        description: "",
      },
      {
        fileName: "30",
        toyLine: policeAcademy,
        description: "",
      },
      {
        fileName: "31",
        toyLine: policeAcademy,
        description: "",
      },
      {
        fileName: "32",
        toyLine: policeAcademy,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "881242020",
    id: "1990-2",
    year: "1990",
    width: 1280,
    height: 880,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: theDarkKnightCollection,
        description: "",
      },
      {
        fileName: "03",
        toyLine: theDarkKnightCollection,
        description: "",
      },
      {
        fileName: "04",
        toyLine: theDarkKnightCollection,
        description: "",
      },
      {
        fileName: "05",
        toyLine: theDarkKnightCollection,
        description: "",
      },
      {
        fileName: "06",
        toyLine: ratFink,
        description: "",
      },
      {
        fileName: "07",
        toyLine: ratFink,
        description: "",
      },
      {
        fileName: "08",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "09",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "10",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "11",
        toyLine: roboCopAndTheUltraPolice,
        description: "",
      },
      {
        fileName: "12",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "13",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "14",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "15",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "16",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "17",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "18",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "19",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "20",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "21",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "22",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "23",
        toyLine: shadowStrikers,
        description: "",
      },
      {
        fileName: "24",
        toyLine: shadowStrikers,
        description: "",
      },
      {
        fileName: "25",
        toyLine: shadowStrikers,
        description: "",
      },
      {
        fileName: "26",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "27",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "28",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "29",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "30",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "31",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "32",
        toyLine: theRealGhostbusters,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "881253000",
    id: "1991",
    year: "1991",
    width: 1280,
    height: 880,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: theDarkKnightCollection,
        description: "",
      },
      {
        fileName: "03",
        toyLine: theDarkKnightCollection,
        description: "",
      },
      {
        fileName: "04",
        toyLine: theDarkKnightCollection,
        description: "",
      },
      {
        fileName: "05",
        toyLine: theDarkKnightCollection,
        description: "",
      },
      {
        fileName: "06",
        toyLine: theDarkKnightCollection,
        description: "",
      },
      {
        fileName: "07",
        toyLine: theDarkKnightCollection,
        description: "",
      },
      {
        fileName: "08",
        toyLine: theDarkKnightCollection,
        description: "",
      },
      {
        fileName: "09",
        toyLine: robinHood,
        description: "",
      },
      {
        fileName: "10",
        toyLine: robinHood,
        description: "",
      },
      {
        fileName: "11",
        toyLine: robinHood,
        description: "",
      },
      {
        fileName: "12",
        toyLine: swampThing,
        description: "",
      },
      {
        fileName: "13",
        toyLine: swampThing,
        description: "",
      },
      {
        fileName: "14",
        toyLine: swampThing,
        description: "",
      },
      {
        fileName: "15",
        toyLine: swampThing,
        description: "",
      },
      {
        fileName: "16",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "17",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "18",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "19",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "20",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "21",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "22",
        toyLine: beetlejuice,
        description: "",
      },
      {
        fileName: "23",
        toyLine: billAndTedsExcellentAdventure,
        description: "",
      },
      {
        fileName: "24",
        toyLine: billAndTedsExcellentAdventure,
        description: "",
      },
      {
        fileName: "25",
        toyLine: billAndTedsExcellentAdventure,
        description: "",
      },
      {
        fileName: "26",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "27",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "28",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "29",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "30",
        toyLine: theRealGhostbusters,
        description: "",
      },
      {
        fileName: "31",
        toyLine: theClaw,
        description: "",
      },
      {
        fileName: "32",
        toyLine: theClaw,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "881261010",
    id: "1992",
    year: "1992",
    width: 1280,
    height: 880,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: batmanReturns,
        description: "",
      },
      {
        fileName: "03",
        toyLine: batmanReturns,
        description: "",
      },
      {
        fileName: "04",
        toyLine: batmanReturns,
        description: "",
      },
      {
        fileName: "05",
        toyLine: batmanReturns,
        description: "",
      },
      {
        fileName: "06",
        toyLine: batmanReturns,
        description: "",
      },
      {
        fileName: "07",
        toyLine: batmanReturns,
        description: "",
      },
      {
        fileName: "08",
        toyLine: batmanReturns,
        description: "",
      },
      {
        fileName: "09",
        toyLine: terminator2,
        description: "",
      },
      {
        fileName: "10",
        toyLine: terminator2,
        description: "",
      },
      {
        fileName: "11",
        toyLine: terminator2,
        description: "",
      },
      {
        fileName: "12",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "13",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "14",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "15",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "16",
        toyLine: savageMondoBlitzers,
        description: "",
      },
      {
        fileName: "17",
        toyLine: savageMondoBlitzers,
        description: "",
      },
      {
        fileName: "18",
        toyLine: savageMondoBlitzers,
        description: "",
      },
      {
        fileName: "19",
        toyLine: robinHood,
        description: "",
      },
      {
        fileName: "20",
        toyLine: robinHood,
        description: "",
      },
      {
        fileName: "21",
        toyLine: robinHood,
        description: "",
      },
      {
        fileName: "22",
        toyLine: capitolCritters,
        description: "",
      },
      {
        fileName: "23",
        toyLine: capitolCritters,
        description: "",
      },
      {
        fileName: "24",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "25",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "26",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "27",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "28",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "29",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "30",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "31",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "32",
        toyLine: theClaw,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "881261020",
    id: "1993",
    year: "1993",
    width: 1280,
    height: 880,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: jurassicPark,
        description: "",
      },
      {
        fileName: "03",
        toyLine: jurassicPark,
        description: "",
      },
      {
        fileName: "04",
        toyLine: jurassicPark,
        description: "",
      },
      {
        fileName: "05",
        toyLine: jurassicPark,
        description: "",
      },
      {
        fileName: "06",
        toyLine: jurassicPark,
        description: "",
      },
      {
        fileName: "07",
        toyLine: theClaw,
        description: "",
      },
      {
        fileName: "08",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "09",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "10",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "11",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "12",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "13",
        toyLine: terminator2,
        description: "",
      },
      {
        fileName: "14",
        toyLine: terminator2,
        description: "",
      },
      {
        fileName: "15",
        toyLine: terminator2,
        description: "",
      },
      {
        fileName: "16",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "17",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "18",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "19",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "20",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "21",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "22",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "23",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "24",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "25",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "26",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "27",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "28",
        toyLine: aliens,
        description: "",
      },
      {
        fileName: "29",
        toyLine: aliens,
        description: "",
      },
      {
        fileName: "30",
        toyLine: aliens,
        description: "",
      },
      {
        fileName: "31",
        toyLine: aliens,
        description: "",
      },
      {
        fileName: "32",
        toyLine: badBeast,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "88126600",
    id: "1994",
    year: "1994",
    width: 1280,
    height: 880,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: legendsOfBatman,
        description: "",
      },
      {
        fileName: "03",
        toyLine: legendsOfBatman,
        description: "",
      },
      {
        fileName: "04",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "05",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "06",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "07",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "08",
        toyLine: aliens,
        description: "",
      },
      {
        fileName: "09",
        toyLine: predator,
        description: "",
      },
      {
        fileName: "10",
        toyLine: carzillas,
        description: "",
      },
      {
        fileName: "11",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "12",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "13",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "14",
        toyLine: shaqAttack,
        description: "",
      },
      {
        fileName: "15",
        toyLine: shaqAttack,
        description: "",
      },
      {
        fileName: "16",
        toyLine: technoZoids,
        description: "",
      },
      {
        fileName: "17",
        toyLine: technoZoids,
        description: "",
      },
      {
        fileName: "18",
        toyLine: jurassicPark,
        description: "",
      },
      {
        fileName: "19",
        toyLine: jurassicPark,
        description: "",
      },
      {
        fileName: "20",
        toyLine: jurassicPark,
        description: "",
      },
      {
        fileName: "21",
        toyLine: jurassicPark,
        description: "",
      },
      {
        fileName: "22",
        toyLine: theShadow,
        description: "",
      },
      {
        fileName: "23",
        toyLine: theShadow,
        description: "",
      },
      {
        fileName: "24",
        toyLine: theShadow,
        description: "",
      },
      {
        fileName: "25",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "26",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "27",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "28",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "29",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "30",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "31",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "32",
        toyLine: ricochet,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "088126900",
    id: "1995-1",
    year: "1995",
    width: 1280,
    height: 800,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: batmanForever,
        description: "",
      },
      {
        fileName: "03",
        toyLine: batmanForever,
        description: "",
      },
      {
        fileName: "04",
        toyLine: batmanForever,
        description: "",
      },
      {
        fileName: "05",
        toyLine: legendsOfBatman,
        description: "",
      },
      {
        fileName: "06",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "07",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "08",
        toyLine: giJoe,
        description: "",
      },
      {
        fileName: "09",
        toyLine: giJoe,
        description: "",
      },
      {
        fileName: "10",
        toyLine: vrTroopers,
        description: "",
      },
      {
        fileName: "11",
        toyLine: vrTroopers,
        description: "",
      },
      {
        fileName: "12",
        toyLine: vrTroopers,
        description: "",
      },
      {
        fileName: "13",
        toyLine: waterworld,
        description: "",
      },
      {
        fileName: "14",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "15",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "16",
        toyLine: gargoyles,
        description: "",
      },
      {
        fileName: "17",
        toyLine: gargoyles,
        description: "",
      },
      {
        fileName: "18",
        toyLine: gargoyles,
        description: "",
      },
      {
        fileName: "19",
        toyLine: congo,
        description: "",
      },
      {
        fileName: "20",
        toyLine: theMask,
        description: "",
      },
      {
        fileName: "21",
        toyLine: theMask,
        description: "",
      },
      {
        fileName: "22",
        toyLine: mortalKombat,
        description: "",
      },
      {
        fileName: "23",
        toyLine: transformers,
        description: "",
      },
      {
        fileName: "24",
        toyLine: xrc,
        description: "",
      },
      {
        fileName: "25",
        toyLine: xrc,
        description: "",
      },
      {
        fileName: "26",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "27",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "28",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "29",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "30",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "31",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "32",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "33",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "34",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "35",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "36",
        toyLine: nerf,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "088126901",
    id: "1995-2",
    year: "1995",
    width: 1280,
    height: 800,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: batmanForever,
        description: "",
      },
      {
        fileName: "03",
        toyLine: batmanForever,
        description: "",
      },
      {
        fileName: "04",
        toyLine: batmanForever,
        description: "",
      },
      {
        fileName: "05",
        toyLine: legendsOfBatman,
        description: "",
      },
      {
        fileName: "06",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "07",
        toyLine: batmanTheAnimatedSeries,
        description: "",
      },
      {
        fileName: "08",
        toyLine: giJoeExtreme,
        description: "",
      },
      {
        fileName: "09",
        toyLine: giJoeExtreme,
        description: "",
      },
      {
        fileName: "10",
        toyLine: giJoeExtreme,
        description: "",
      },
      {
        fileName: "11",
        toyLine: giJoeExtreme,
        description: "",
      },
      {
        fileName: "12",
        toyLine: beastWars,
        description: "",
      },
      {
        fileName: "13",
        toyLine: beastWars,
        description: "",
      },
      {
        fileName: "14",
        toyLine: superman,
        description: "",
      },
      {
        fileName: "15",
        toyLine: superman,
        description: "",
      },
      {
        fileName: "16",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "17",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "18",
        toyLine: theMask,
        description: "",
      },
      {
        fileName: "19",
        toyLine: theMask,
        description: "",
      },
      {
        fileName: "20",
        toyLine: gargoyles,
        description: "",
      },
      {
        fileName: "21",
        toyLine: gargoyles,
        description: "",
      },
      {
        fileName: "22",
        toyLine: gargoyles,
        description: "",
      },
      {
        fileName: "23",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "24",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "25",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "26",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "27",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "28",
        toyLine: xrc,
        description: "",
      },
      {
        fileName: "29",
        toyLine: xrc,
        description: "",
      },
      {
        fileName: "30",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "31",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "32",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "33",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "34",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "35",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "36",
        toyLine: nerf,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "88127300",
    id: "1996",
    year: "1996",
    width: 1280,
    height: 880,
    pages: [
      {
        fileName: "01",
        toyLine: _frontCover,
        description: "",
      },
      {
        fileName: "02",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "03",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "04",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "05",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "06",
        toyLine: starWarsShadowsOfTheEmpire,
        description: "",
      },
      {
        fileName: "07",
        toyLine: gargoyles,
        description: "",
      },
      {
        fileName: "08",
        toyLine: batmanForever,
        description: "",
      },
      {
        fileName: "09",
        toyLine: batmanForever,
        description: "",
      },
      {
        fileName: "10",
        toyLine: batmanForever,
        description: "",
      },
      {
        fileName: "11",
        toyLine: legendsOfBatman,
        description: "",
      },
      {
        fileName: "12",
        toyLine: theAdventuresOfbatmanAndRobin,
        description: "",
      },
      {
        fileName: "13",
        toyLine: totalJustice,
        description: "",
      },
      {
        fileName: "14",
        toyLine: beastWars,
        description: "",
      },
      {
        fileName: "15",
        toyLine: beastWars,
        description: "",
      },
      {
        fileName: "16",
        toyLine: superman,
        description: "",
      },
      {
        fileName: "17",
        toyLine: superman,
        description: "",
      },
      {
        fileName: "18",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "19",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "20",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "21",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "22",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "23",
        toyLine: ssp,
        description: "",
      },
      {
        fileName: "24",
        toyLine: xrc,
        description: "",
      },
      {
        fileName: "25",
        toyLine: xrc,
        description: "",
      },
      {
        fileName: "26",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "27",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "28",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "29",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "30",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "31",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "32",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "33",
        toyLine: dragonheart,
        description: "",
      },
      {
        fileName: "34",
        toyLine: actionMan,
        description: "",
      },
      {
        fileName: "35",
        toyLine: giJoeExtreme,
        description: "",
      },
      {
        fileName: "36",
        toyLine: startingLineup,
        description: "",
      },
    ],
  },
  {
    catalogNumber: "088127800",
    id: "1997",
    year: "1997",
    width: 2140,
    height: 800,
    pages: [
      {
        fileName: "01",
        toyLine: legendsOfTheDarkKnight,
        description: "",
      },
      {
        fileName: "02",
        toyLine: batmanAndRobin,
        description: "",
      },
      {
        fileName: "03",
        toyLine: batmanAndRobin,
        description: "",
      },
      {
        fileName: "04",
        toyLine: totalJustice,
        description: "",
      },
      {
        fileName: "05",
        toyLine: superman,
        description: "",
      },
      {
        fileName: "06",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "07",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "08",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "09",
        toyLine: starWarsThePowerOfTheForce,
        description: "",
      },
      {
        fileName: "10",
        toyLine: theLostWorld,
        description: "",
      },
      {
        fileName: "11",
        toyLine: theLostWorld,
        description: "",
      },
      {
        fileName: "12",
        toyLine: beastWars,
        description: "",
      },
      {
        fileName: "13",
        toyLine: startingLineup,
        description: "",
      },
      {
        fileName: "14",
        toyLine: microVerse,
        description: "",
      },
      {
        fileName: "15",
        toyLine: microVerse,
        description: "",
      },
      {
        fileName: "16",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "17",
        toyLine: tonka,
        description: "",
      },
      {
        fileName: "18",
        toyLine: ssp,
        description: "",
      },
      {
        fileName: "19",
        toyLine: winnersCircle,
        description: "",
      },
      {
        fileName: "20",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "21",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "22",
        toyLine: nerf,
        description: "",
      },
      {
        fileName: "23",
        toyLine: cyberStrykeGear,
        description: "",
      },
      {
        fileName: "24",
        toyLine: xrc,
        description: "",
      },
    ],
  },
];

export default data;
