import clientPromise from "../mongodb";
import { ObjectId } from "mongodb";

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

export async function updateQuiz (quiz, id) {
  try {
    if (!users) await init();

    const quizDoc = {
      $set: {
        surveyAnswers: quiz
      }
    }
    const result = await users.updateOne({_id: new ObjectId(id)}, quizDoc);
    return { results: result }

    } catch (err) {
      return { err: `Couldn't update quiz: ${err}` };
  }
}

export async function updateProfile (profile, id) {
  try {
    if (!users) await init();

    const userDoc = {
      $set: profile
    }
    const result = await users.updateOne({_id: new ObjectId(id)}, userDoc);
    return { results: result }

    } catch (err) {
      return { err: `Couldn't create user: ${err}` };
  }
}