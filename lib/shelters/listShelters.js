import clientPromise from "../mongodb";

let client;
let db;
let shelters;

const init = async () => {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("paw-finder");
    shelters = await db.collection("shelters");
  } catch (error) {
    throw new Error("Failed to establish connection to db");
  }
};

(async () => {
  await init();
})();

const listShelters = async () => {
  try {
    if (!shelters) await init();
    let results = [];

    await shelters
      .find()
      .forEach((shelter) => results.push(shelter))

      return {results: results}
  } catch (err) {
    return { err: "Failed to fetch shelters" };
  }
};

export default listShelters;
