const input = document.querySelector("#input");
const btnApi = document.querySelector(".btn-api");
const output = document.querySelector(".output");


// btnApi.addEventListener("click" , serverCall)
    
    


// function serverCall (){
//     try {
//         // const serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
    
//         fetch("https://lessonfourapi.tanaypratap.repl.co//yoda.json")
//         .then(response => response.json())
//         .then(json => console.log(json))
//     } catch (error) {
//         // console.log(error.message)

//         if(response.status === 301){
//             throw("use correct api link")
//         }

//         output.innerText = error
//     }
    
// }

//------ try and fecth used till here


const serverURL = "https://lessonfourapi.tanaypratap.repl.cotranslate/yoda.json"

function getText (){
        return serverURL +  "?" +"text=" + text
    }



function errorHandler (error){

    output.innerText = error.message
}

function apiHandler (){
   
    fetch (getText)
    .then(response => response.json())
    .then(json => console.log(json))
    // .catch(errorHandler)
    
    
}

btnApi.addEventListener("click", apiHandler)

// -------------

// btnApi.addEventListener("click", try {
//     const serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// function getText (text){
//     return serverURL +   +"text=" + text
// }
//     function apiHandler (){
          
//             fetch(getText(text))
//             .then(response => response.json())
//             .then(json => {
//                 output.innerText = json.contents.text})
//             }

// }
// catch (error){
//     console.log(error.message)

// }