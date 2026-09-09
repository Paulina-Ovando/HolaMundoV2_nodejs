const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let pizzas = [
    { id : 1, nombre: "Hawaiiana", descripcion: "Pizza con piña y jamón" }
]

/**
 * Regresa todas las pizzas
 * @returns {Array} pizzas
 */
export async function obtenerTodasLasPizzasAsync() {
    await sleep(2000); // Simula un retraso de 2 segundos
    
    return pizzas;
}

/**
 * Regresa la pizza del id buscado
 * @param {*} id
 * @returns pizza
 */
export async function obtenerPizzaPorIdAsync(id) {
    await sleep(1000);
    const pizza = pizzas.find(x => x.id == id);

    return pizza;
}

/**
 * Agrega una pizza al arreglo de pizzas
 * @param {*} pizza
 * @returns id de la pizza agregada
 */
export async function agregarPizzaAsync(pizza) {
    await sleep(1000);
    pizzas.push(pizza);

    return pizzas.length // Devuelve el id de la pizza agregada
}

/**
 * Actualiza la pizza del id buscado
 * @param {*} id
 * @param {*} pizza
 * @returns pizza actualizada o undefined si no se encuentra
 */
export async function actualizarPizzaAsync(id, pizza) {
    const index = pizzas.findIndex(x => x.id == id);
    if(index == -1)
        return undefined
    pizzas[index].nombre = pizza.nombre;
    pizzas[index].descripcion = pizza.descripcion;

    return pizzas[index];
}

/**
 * Elimina la pizza del id buscado
 * @param {*} id
 * @returns true si se eliminó, false si no se encontró
 */
export async function eliminarPizzaAsync(id) {
    // await sleep(1000);
    const index = pizzas.findIndex(x => x.id == id);
    if (index === -1) {
        return false;
    }
    pizzas.splice(index, 1); // Se agrega el "1" para decirle a splice que solo elimine 1 elemento
    return true;
}
