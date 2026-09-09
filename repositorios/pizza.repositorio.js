// Esta es la capa donde persiste los datos

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// La IA le da la conexión a MongoDB 

let pizzas = [{ id : 1, nombre: "Hawaiiana", descripcion: "Pizza con piña y jamón" }]

/**
 * Regresa una lista de las pizzas
 * @returns []
 */
export async function obtenerTodasLasPizzasAsync() {
    // await sleep(2000); // Simula un retraso de 2 segundos
    return pizzas;
}

/**
 * Regresa la pizza del id buscado o undefined si no existe
 * @param {*} id
 */
export async function obtenerPizzaPorIdAsync(id) {
    /*
    await sleep(1000);
    const pizza = pizzas.find(x => x.id == id);
    */
    return pizza;
}

export async function agregarPizzaAsync(pizza) {
    /*
    await sleep(1000);
    pizzas.push(pizza);
    */
}

export async function actualizarPizzaAsync(pizza) {
    // await sleep(1000);
    
    // Buscar las pizzas
    // Actualizar los datos

    /*
    const index = pizzas.findIndex(x => x.id == pizza.id);
    if (index !== -1) {
        pizzas[index] = pizza;
    }
    */
}
