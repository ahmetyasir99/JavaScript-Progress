//asenkron olarak istek tamamlandıktan sonra otomatik olarak devam
//edilecek fonksiyona yönlendirir
//new todo işlemi bitirince todoList fonksiyonunu otomatik olarak çağıracağız

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

function newTodo(todo) {

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            todos.push(todo);
            const e = true;
            if(!e){
                resolve("geçtin");
            }else{
                reject("Hata var...");
            }
        }, 2000);
    })
}

newTodo({ title: "Todo 4", description: "yemek ye" }).then(response => {
    // promise dönen fonksiyonda resolve olursa .then in içi çalışır
    // resolve içine gönderiken parametreler .then metodundaki parametre
    // kullanılarak çağırılabilir.
    todoList();
    console.log(response)
}).catch(e =>{
    // promise dönen fonksiyonda reject fonksiyonu çalışırsa .catch'in içindeki
    // işlemler yapılır. e parametresi içeri gönderilen parametreye eşittir
    console.log(e)
})

// Promise All

const p1 = Promise.resolve("P1")
const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("2.promise")
    }, 2000);
})

const p3 = 2142523
const p4 = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())

Promise.all([p1,p2,p3,p4]).then(promises =>{
    // tüm işlemlerin bitmesini bekleyip ortak olarak bir fonksiyon çalıştırıyor
    console.log("promises",promises)
})
