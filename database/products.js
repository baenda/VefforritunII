import assert from "assert"
import { getCollection } from './db.mjs';

const productDB = getCollection("Products")

function validateProduct(product){
	assert(product.name, "product has to have a name")
	assert(product.shortDescription, "product has to have a shortDescription")
	assert(product.description, "product has to have a description")
	assert(product.category, "product has to have a category")
	assert(product.price, "product has to have a price")
	assert(product.image, "product has to have a image")
}

export class Product {
    id = 0; //auto generated
    name;
    shortDescription;
    description;
    category = [];
    price;
    image;
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.shortDescription = data.shortDescription;
        this.description = data.description;
        this.category = data.category;
        this.price = data.price;
        this.image = data.image;
    }
}

export async function getProduct(id) {
	const product = await userDB.find({
		id: id
	}).next()
	return new Product(product)
}

export async function searchProducts(query, page) {
    page = page || 0
    const pipeline = [
        {
            $search: {
                "text": {
                    "path": "name",
                    "query": query,
                    "fuzzy": {},
                }
            }
        },
        {
            $limit: 20
        },
        {
            $project: {
                "id": 1,
                "name": 1,
                "price": 1,
                "shortDescription": 1,
                "description": 1,
                "image": 1,
                "category": 1
            }
        }
    ]

    const products = await productDB.aggregate(pipeline).skip(20*page).toArray();
    
    // remember to convert products list from Document[] -> Product[]
    return products
}

export async function getProductsByCategory(category, page) {
    page = page || 0
    const products = await productDB.find({
        category: category
    }).skip(20*page).limit(20).toArray()

    // remember to convert products list from Document[] -> Product[]
    return products
}

export async function insertProduct(product) {
	if (product instanceof Product)
	    await productDB.insertOne(product)
    else   
        error(`cannot insert product of type ${typeof(product)}`)
}

export async function createProduct(data) {
	validateProduct(data)
	return new Product(data)
}
