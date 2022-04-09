//document.getElementById

document.getElementById("location");


//document.getElementsByClassName

document.getElementsByClassName("p.name");


//document.getElementsByTagName

document.getElementsByTagName("p");


//querySelector

document.querySelector("p[id = location]");

//querySelectorAll

document.querySelectorAll("p");



function changeColor() {
    console.log("Heading 1");
}

const paragraphLoc = document.getElementById("location");

paragraphLoc.onclick = function(event) {
    console.log("Clicking on a paragraph", event);
};