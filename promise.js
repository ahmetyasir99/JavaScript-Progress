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




/* ============= CALLBACK BAŞKA KAYNAK ============== */



//callback bir fonksiyonun parametre olarak başka bir fonksiyonu almasıdır

const box = document.querySelector('.box')

// CALLBACK HELL öğrneği. Sıralı işlemlerde promise kullanılmaz ise böyle bir
// sonuç ortaya çıkıyor, ayrıca bir işlem bitmeden diğeri de başlayabilir.
/*
setTimeout(() =>{
    box.classList.add('bigger')

    setTimeout(() => {
        box.classList.add('circle')

        setTimeout(() => {
            box.classList.add('move')

            setTimeout(() => {
                box.classList.add('colored')

                setTimeout(() => {
                    box.classList.remove('colored')

                    setTimeout(() => {
                        box.classList.remove('move')

                        setTimeout(() => {
                            box.classList.remove('circle')

                            setTimeout(() => {
                                box.classList.remove('bigger')
                            }, 1500);
                        }, 1500);
                    }, 1500);
                }, 1500);
            }, 1500);
        }, 1500);
    }, 1500);
}, 1500)
*/

new Promise((resolve,reject) => {
    //işlem başarılı bitmiş ise resolve'u çalıştır
    //resolve ve rejectin içine yazılanlar bir sonraki aşamada alınabilir
    //yani .then() ve .catch()'de yakalanabilir.
    //işlemde hata varsa reject'i çalıştır
    //ard arda chain olarak .then().then() kullanılabilir. daha sonra gelen
    //.then() bir önceki then() işleminden return edilen datayı alabilir.  
    resolve("çözüldü")

    reject("hata var")
})
.then(data => {
    console.log(data)
    return 'dönen değer'
}).then(data => {console.log(data)})
.catch(data => {//reject dönerse hiçbir then çalışmadan catch çalışır
    console.log(data)
}).finally(() => console.log("işlem bitti")) //finally ne olursa olsun işlemin sonunda çalışır

const wait = ms => new Promise((resolve,reject) =>  setTimeout(resolve,ms))


function wait2(ms) {
    //wait fonksiyonunun aynısı
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}

wait(1000)
.then(()=>{
    box.classList.add('bigger')
    return wait(500) //returne bunu koymazsak direk resolve döndürerek
    //diğer fonksiyonu ardından çalıştırır. ama bu şekilde bir sonraki
    //then wait(500)'ün resolve döndürmesini bekleyecektir.
})
.then(()=>{
    box.classList.add('circle')
    return wait(500)
})
.then(()=>{
    box.classList.add('move')
    return wait(500)
})
.then(()=>{
    box.classList.add('colored')
    return wait(500)
})
.finally(()=> console.log('animasyon bitti'))