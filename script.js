let divRef = document.querySelector("div");

let aquaButtonRef = document.getElementById("aqua");
let tealButtonRef = document.getElementById("teal");
let pinkButtonRef = document.getElementById("pink");
let purpleButtonRef = document.getElementById("purple");
let colorlessButtonRef = document.getElementById("colorless");

aquaButtonRef.onclick = function() {
    console.log("click");
    divRef.style.backgroundColor = "aqua";
    divRef.innerHTML = "aqua";
}

tealButtonRef.onclick = function() {
    divRef.style.backgroundColor = "teal";
    divRef.innerHTML = "teal";
}

pinkButtonRef.onclick = function() {
    divRef.style.backgroundColor = "pink";
    divRef.innerHTML = "pink";
}

purpleButtonRef.onclick = function() {
    divRef.style.backgroundColor = "purple";
    divRef.innerHTML = "purple";
}

colorlessButtonRef.onclick = function() {
    divRef.style.backgroundColor = "white";
    divRef.innerHTML = "colorless";
}