const todos = [
    { title: "Todo 1", description: "JS çalış" },
    { title: "Todo 2", description: "HTML çalış" },
    { title: "Todo 3", description: "CSS çalış" },
]

const todoListElement = document.querySelector("#todoList")

function todoList() {
    setTimeout(() => {
        let todoItems = ""
        todos.forEach(item => {
            todoItems += `
            <li>
                <b>${item.title}</b>
                <p>${item.description}</p>
            </li>
            `
        })
        todoListElement.innerHTML = todoItems;
    }, 1000);
}

function newTodo(todo,callback) {
    setTimeout(() => {
        todos.push(todo)
        callback() //callback parametresinde yazılı fonksiyonu çalıştırır
    }, 2000);
}
newTodo({ title: "Todo 4", description: "yemek ye" }, todoList)

todoList();

