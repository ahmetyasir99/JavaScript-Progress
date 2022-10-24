'use strict'
console.log("ben bir arıyım")

const numbers = [175, 50, 25];

console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
   //return total + num //bu durumda array'ı toplar, arraydaki ilk iki elemandan başlar
   // total 175 ve num 50'dir daha sonra 175-50 = 125, 125 total olur ve yeni numara 25'tir
   // 125-25 = 100 sonucu elde edilir
    return total - num;
}

const numbers2 = [1, 3, 5,7];

function sqrt(num) {
    //arraydaki tüm elemanlar için aynı işlemi yaptırır
    return num*num
}

function sum10(num) {
    //arraydaki tüm elemanlar için aynı işlemi yaptırır
    return num+10
}
console.log(numbers2)
console.log(numbers2.map(sqrt))
console.log(numbers2.map(sum10))

fetch('https://jsonplaceholder.typicode.com/users').then(res =>{
    return res.json()
}).then(res => {
    console.log(res)

    res.forEach(element => {
        console.log(element.id)
    });
}).catch(e => console.log(e))

class person {
    constructor(p1, p2, p3) {
        this.name = p1;
        this.age = p2;
        this.weight = p3;
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    setName(name) {
        this.name = name
    }
    setAge(age) {
        this.age = age
    }
    setWeight(weight) {
        this.weight = weight
    }
}

const mehmet = new person("hazal","22","50")
mehmet.setAge(24)

console.log(mehmet.age)

const button = document.querySelector('#button')
button.onclick =  () => {
    console.log("basıldı")
}


fetch('https://dummyjson.com/products/1', {
    mode: 'no-cors'
})
.then(res => res.json())
.then(json => console.log(json))
            