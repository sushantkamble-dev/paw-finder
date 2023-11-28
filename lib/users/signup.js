import clientPromise from "../mongodb";
import { encryptPassword } from "../auth/passwordUtils";

let client;
let db;
let users;

const init = async () => {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("paw-finder");
    users = await db.collection("users");
  } catch (error) {
    throw new Error("Failed to establish connection to db");
  }
};

(async () => {
    await init();
  })();

export async function createUser (firstName, lastName, email, password) {
  try {
    if (!users) await init();
    // check if user already exists
    const userExists = await users.findOne({emailId: email});
    if (userExists) {
      return { err: "An account with this email already exists" };
    }
    const encryptedPassword = await encryptPassword(password);
    const userDoc = {
        firstName: firstName,
        imageUrl: "",
        lastName: lastName,
        emailId: email,
        password: encryptedPassword,
        address: "",
        zipcode: "",
        surveyAnswers: {
          q1: "",
          q2: "",
          q3: "",
          q4: "",
          q5: "",
          q6: "",
          q7: "",
          q8: "",
          q9: "",
          q10: "",
          q11: ""
        }
        // add other fields to signup!!
    }
    const user = await users.insertOne(userDoc);
    return { results: user };

  } catch (err) {
    return { err: `Couldn't create user: ${err}` };
  }

}