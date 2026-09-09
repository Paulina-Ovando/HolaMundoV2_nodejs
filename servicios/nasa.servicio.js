const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
console.log(response)
const json = await response.json()