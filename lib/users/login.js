import clientPromise from "../mongodb";
import { verifyPassword } from "../auth/passwordUtils";

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

export async function login(email, password) {
  try {
    if (!users) await init();
    // find email in db
    const user = await users.findOne({emailId: email});
    // if user not found
    if (!user) {
      return { err: "User not found" };
    }
    // if found, check password
    if (await verifyPassword(user.password, password)) {
        // obfuscate password
        user.password = "";
        return { results: user };
    }
    // if password not correct
    return { err: "Wrong password" };

  } catch (err) {
    return { err: `Login failed: ${err}` };
  }
}