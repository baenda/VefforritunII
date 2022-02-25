import bcrypt from "bcrypt"
import assert from "assert"
import { getCollection } from './db.mjs';

const sellerDB = getCollection("Sellers")

function validateSeller(seller){
	assert(seller.name, "seller has to have a name")
	assert(seller.address, "seller has to have a address")
	assert(seller.zip, "seller has to have a zip")
	assert(seller.region, "seller has to have a region")
}

export class Seller {
    uid;
    name;
    passwordHash;
    address;
    zip;
    region;
    // Rafræn skilríki?
    constructor(data){
        this.name = data.name;
        this.address = data.address;
        this.zip = data.zip;
        this.region = data.region;
        this.passwordHash = data.passwordHash;
    }
}

export async function getSeller(username) {
	const seller = await sellerDB.find({
		name: username
	}).next()
	return new Seller(seller)
}

export async function insertSeller(seller) {
	if (seller instanceof Seller)
	    await sellerDB.insertOne(seller)
    else   
        error(`cannot insert user of type ${typeof(seller)}`)
}

export async function createSeller(data, password) {
	validateSeller(data)
	const hashedPassword = await bcrypt.hash(password, 12)
    data.passwordHash = hashedPassword
	return new Seller(data)
}
