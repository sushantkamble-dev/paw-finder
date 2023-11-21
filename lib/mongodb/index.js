import {MongoClient} from 'mongodb';

const URI = process.env.MONGODB_URI;
const options = {};

if(!URL) throw Error('Please add your MongoDB URI to .env')

let client = new MongoClient(URI, options);
let clientPromise;

clientPromise = client.connect()

export default clientPromise