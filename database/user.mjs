import bcrypt from "bcrypt"
import assert from "assert"
import { getCollection } from './db.mjs';

const userDB = getCollection("Users")

function validateUser(user){
	assert(user.name, "user has to have a name")
	assert(user.address, "user has to have a address")
	assert(user.zip, "user has to have a zip")
	assert(user.region, "user has to have a region")
}

export class User {
    uid;
    name;
    passwordHash;
    address;
    zip;
    region;
    cart = {};
    constructor(data){
        this.name = data.name;
        this.address = data.address;
        this.zip = data.zip;
        this.region = data.region;
        this.passwordHash = data.passwordHash;
    }
}

export async function getUser(username) {
	const user = await userDB.find({
		name: username
	}).next()
	return new User(user)
}

export async function insertUser(user) {
	if (user instanceof User)
	    await userDB.insertOne(user)
    else   
        error(`cannot insert user of type ${typeof(user)}`)
}

export async function createUser(data, password) {
	validateUser(data)
	const hashedPassword = await bcrypt.hash(password, 12)
    data.passwordHash = hashedPassword
	return new User(data)
}

getUser("elias").then((user) => {
    console.log(user)
})

/*
createUser({
    name: "elias",
    passwordHash: "$2a$12$R9h/cIPz0gi.URNNX3kh2OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW",
    address: "tækniskóli 3",
    zip: "229",
    region: "hfj",
    cart: {
        //id: amount
        "1": 5
    }
}, "my password").then((user) => {
    insertUser(user)
})
*/
