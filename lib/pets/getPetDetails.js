import clientPromise from "../mongodb";
import { ObjectId } from "mongodb";
let client;
let db;
let Pets;
let Shelters;

const init = async () => {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("paw-finder");
    Pets = await db.collection("pets");
    Shelters = await db.collection("shelters");
  } catch (error) {
    throw new Error("Failed to establish connection to db");
  }
};

(async () => {
  await init();
})();

const getPetDetails = async (req) => {
  try {
    if (!Pets) await init();
    let results = [];
    results = await Pets
      .findOne({_id: new ObjectId(req.body.petId)})
    const shelterID = new ObjectId(results.shelterProfile)
    results.shelter = await Shelters.findOne({_id:shelterID})
      return {results: results}
  } catch (err) {
    return { err: `Failed to fetch Pets: ${err}` };
  }
};

export default getPetDetails;
