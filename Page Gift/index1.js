let mainContent = document.getElementById("main-content")
let set = setInterval(function(){
  let newH3 = document.createElement("h3");
  let textNode = document.createTextNode("Tu pagal ahe total mad🤪🥴");
  newH3.appendChild(textNode);
  mainContent.appendChild(newH3);
}, 1000) 

let getButton = document.getElementById("btn1")
$("#btn1").hide();
setTimeout(function(){
  $("#btn1").show();
}, 9000)

function stopFunction(){
    clearInterval(set)
}  