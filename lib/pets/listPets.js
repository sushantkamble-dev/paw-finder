import clientPromise from "../mongodb";

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

const listPets = async (query) => {
  try {
    if (!Pets || !Shelters) await init();


    // get shelters from the requested location
    let filteredShelters = [];
    if (query.city) {
      await Shelters.find().forEach((item) => {
        if (item.Location.includes(query.city)) {
          filteredShelters.push(item);
        }
      });

    } else {
      throw new Error("please provide a city");
    }

    // find the pets in the shelters based on filters
    let filteredPets = [];
    if (filteredShelters.length > 0) {
      let allPets = [];
      await Pets.find().forEach((pet) => allPets.push(pet));


      let filters = {
        sortBy: query.sortBy ? query.sortBy : "ASC",
        breed: query.breed ? query.breed : "any",
        age: query.age ? query.age : "any",
        size: query.size ? query.size : "any",
        gender: query.gender ? query.gender : "any",
      };

      // filter cats and dogs
      if (query.type === "cat") {
        filteredPets = allPets.filter((pet) => pet.type === "cat");
      } else {
        filteredPets = allPets.filter((pet) => pet.type === "dog");
      }

      if(filters.breed !=='any'){
        filteredPets = allPets.filter((pet) => pet.breed === filters.breed);
      }
      if(filters.age !=='any'){
        filteredPets = allPets.filter((pet) => pet.age === filters.age);
      }
      if(filters.size !== 'any'){
        filteredPets = allPets.filter((pet) => pet.size === filters.size);
      }
      if(filters.gender !== 'any'){
        filteredPets = allPets.filter((pet) => pet.gender === filters.gender);
      }

    }

    return { results: filteredPets };
  } catch (err) {
    return { errMsg: "Failed to fetch Pets", err };
  }
};

export default listPets;
