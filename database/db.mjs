import { MongoClient, ServerApiVersion } from "mongodb"

const connectionURI = "mongodb+srv://admin:k2rTeuAsvMPOjeio@joemama.foql4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(connectionURI, { serverApi: ServerApiVersion.v1 })
await client.connect()

const DB = client.db("Development")

export function getCollection(name) {
	return DB.collection(name)
}