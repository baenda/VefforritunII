import assert from "assert"
import { getCollection } from './db.mjs';

const stockDB = getCollection("Stock")

function validateStock(stock){
	assert(stock.uid, "stock has to have a id")
}

export class Stock {
    uid;
    products = {};
    constructor(data){
        this.uid = data.uid;
        this.products = data.products;
    }
}

export async function getStock(userId) {
	const stock = await stockDB.find({
		uid: userId
	}).next()
	return new Stock(stock)
}

export async function insertStock(stock) {
	if (stock instanceof Stock)
	    await stockDB.insertOne(stock)
    else   
        error(`cannot insert stock of type ${typeof(stock)}`)
}

export async function createStock(data) {
	validateStock(data)
	return new Stock(data)
}   
