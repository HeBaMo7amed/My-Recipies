let myhptt = new XMLHttpRequest ;
let row = document.querySelector(".row")
let selectedFood = document.querySelector("select")
let inputFood = document.querySelector("input")
inputFood.addEventListener("blur",function(){
    getData(this.value)
})
selectedFood.addEventListener("change",function(){
    getData(this.value)
})
getData('pizza')
function getData(dataa) {
    myhptt.open ("Get",`https://forkify-api.herokuapp.com/api/search?q=${dataa}`)
myhptt.send()
myhptt.addEventListener("readystatechange",function(){
    if(this.readyState==4){
        let allData = JSON.parse(myhptt.response)
        showData(allData.recipes)
    }
})
}
function showData(data) {
    let cartona = ''
    for(let index = 0 ; index < data.length ; index++){
        cartona += `
             <div class="col-md-4">
                <img class="w-100 mb-2" src="${data[index].image_url}" alt="">
                <p><b>Titel</b>${data[index].title}</p>
                <p><b>ID</b>${data[index].recipe_id}</p>
                <p><b>Publisher</b>${data[index].publisher}</p>
            </div>
        `
    } 

row.innerHTML = cartona;
}