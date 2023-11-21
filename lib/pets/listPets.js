import clientPromise from "../mongodb";

let client;
let db;
let Pets;

const init = async () => {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("paw-finder");
    Pets = await db.collection("pets");
  } catch (error) {
    throw new Error("Failed to establish connection to db");
  }
};

(async () => {
  await init();
})();

const listPets = async () => {
  try {
    if (!Pets) await init();
    let results = [];

    await Pets
      .find()
      .forEach((pet) => results.push(pet))

      return {results: results}
  } catch (err) {
    return { err: "Failed to fetch Pets" };
  }
};

export default listPets;
