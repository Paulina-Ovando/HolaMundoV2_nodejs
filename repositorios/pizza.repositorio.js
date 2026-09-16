import { MongoClient, ObjectId } from 'mongodb';

const cliente = new MongoClient("mongodb://root:123@localhost:27017/");
const db = cliente.db("prueba"); 
const pizzasDb = db.collection("pizzas"); 

export async function obtenerTodasLasPizzasAsync() {
    return await pizzasDb.find({}).toArray();
}

export async function obtenerPizzaPorIdAsync(id) {
    return await pizzasDb.findOne({ _id: new ObjectId(id) });
}

export async function agregarPizzaAsync(pizza) {
    const resultado = await pizzasDb.insertOne(pizza);
    return resultado.insertedId;
}

export async function actualizarPizzaAsync(id, pizza) {
    delete pizza._id; // Evita el error de intentar modificar el _id inmutable
    return await pizzasDb.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: pizza }, { returnDocument: 'after' });
}

export async function eliminarPizzaAsync(id) {
    const resultado = await pizzasDb.deleteOne({ _id: new ObjectId(id) });
    return resultado.deletedCount > 0;
}