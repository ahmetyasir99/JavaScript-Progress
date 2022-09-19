// Örneğin database'e yapılan sorgularda gelen verinin işleneceği
// kodların veri gelmeden çalışmaması ve bu sayede hata vermemesi için
// verilerin gelip değişkene atanacağı kodları asenkron yaparız


async function fetchPost() {
    // response değişkeni datanın json formatındaki halidir
    const response = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
    //const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    //const data = await response.json()  // .then olmassa kullanılır

    console.log(response)
}

fetchPost()