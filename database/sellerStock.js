import bcrypt from "bcrypt"
import assert from "assert"
import { getCollection } from './db.mjs';

const stockDB = getCollection("Stock")

function validateStock(stock){
	assert(stock.id, "stock has to have a id")
}

export class Stock {
    id = 0;
    products = {};
    constructor(data){
        this.id = data.id;
        this.products = data.products;
    }
}

export async function getStock(stockId) {
	const stock = await stockDB.find({
		id: stockId
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
