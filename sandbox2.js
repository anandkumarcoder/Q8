const input = document.querySelector("#input");
const btnApi = document.querySelector(".btn-api");
const output = document.querySelector(".output");


const serverURL = "https://lessonfourapi.tanaypratap.repl.co//yoda.json"

function getText (text){
    return serverURL +  "?" +"text=" + text
}



function errorHandler (error){

output.innerText = error.message
}

function apiHandler (){

fetch (serverURL)
.then(response => response.json())
.then(json => console.log(json))
.catch(errorHandler)
}
btnApi.addEventListener("click", apiHandler)