import assert from "assert"
import { getCollection } from './db.mjs';

const productDB = getCollection("Products")

function validateProduct(product){
    // passar að user hefur allt essential
	assert(product.name, "product has to have a name")
	assert(product.shortDescription, "product has to have a shortDescription")
	assert(product.description, "product has to have a description")
	assert(product.category, "product has to have a category")
	assert(product.price, "product has to have a price")
	assert(product.image, "product has to have a image")
}

export class Product {
    // til að gera Product object
    id = 0; // auto generated
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
    // finnur product með id
	const product = await productDB.find({
		id: id
	}).next()
	return new Product(product)
}

export async function insertProduct(product) {
    // bætir product í db
	if (product instanceof Product)
    // passar að það er product object
	    await productDB.insertOne(product)
    else   
        error(`cannot insert product of type ${typeof(product)}`)
}

export async function createProduct(data) {
    // validatar product
	validateProduct(data)
	return new Product(data)
}
getProduct(1).then((product) => { 
    console.log(product)
})
getProduct(2).then((product) => { 
    console.log(product)
})


/*
createProduct({
    name : "Nauta hakk",
    shortDescription : "Hakk úr nautakjöti",
    description : "Hakk úr nautakjöti",
    category:  ["Naut", "Hakk", "Kjöt"],
    price : "2000",
    image : "https://www.kjothollin.is/wp-content/uploads/2020/04/nautahakk.jpg"
}).then((product) => {
    insertProduct(product)
})

createProduct({
    name : "Geita breki",
    shortDescription : "Geita salats ostur",
    description : "Geita ostur fyrir salat, mjög líkur feta",
    category:  ["Geit", "Ostur", "Afurð"],
    price : "2300",
    image : "https://geit.is/wp-content/uploads/j%C3%B3hanna-fetar-220x300.jpg"
}).then((product) => {
    insertProduct(product)
})

til að prufa kóðann láttu 
node products.mjs
í cmd
*/