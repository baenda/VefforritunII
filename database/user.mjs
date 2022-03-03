import bcrypt from "bcrypt"
import assert from "assert"
import { getCollection } from './db.mjs';

const userDB = getCollection("Users")

function validateUser(user){ 
    // passar að user hefur allt essential
	assert(user.name, "user has to have a name")
    assert(user.email, "user has to have a email")
	assert(user.address, "user has to have a address")
	assert(user.zip, "user has to have a zip")
	assert(user.region, "user has to have a region")
}

export class User {
    // til að gera User object
    name;
    email;
    passwordHash;
    address;
    zip;
    region;
    cart = {};
    constructor(data){
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.zip = data.zip;
        this.region = data.region;
        this.passwordHash = data.passwordHash;
    }
}

export async function getUser(username) {
    // Sækir user með nafni
	const user = await userDB.find({
		name: username
	}).next()
	return new User(user)
}

export async function insertUser(user) {
    // bætir user í db
	if (user instanceof User)
    // passar að það er User object
	    await userDB.insertOne(user)
    else   
        error(`cannot insert user of type ${typeof(user)}`)
}

export async function createUser(data, password) {
    // Encryptar user password
	validateUser(data)
	const hashedPassword = await bcrypt.hash(password, 12)
    data.passwordHash = hashedPassword
	return new User(data)
}

getUser("testuser").then((user) => { 
    console.log(user)
})
getUser("elias").then((user) => { 
    console.log(user)
})

/*  Example command til að gera user
createUser({
    name: "elias",
    email: "eliasah@live.com",
    passwordHash: "$2a$12$R9h/cIPz0gi.URNNX3kh2OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW",
    address: "Bergstaðastræti 27",
    zip: "101",
    region: "rvk",
    cart: {
        //id: amount
        "1": 5
    }
}, "my password").then((user) => {
    insertUser(user)
})

til að prufa kóðann láttu 
node user.mjs
í cmd
*/
