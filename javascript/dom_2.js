let paraName = document.createElement("p");

paraName.textContent = "My name is Simeon";
paraName.className = "name";
div.append(paraName);

// Create an array containing a list of your favorite 
//     books. The length of the array should be 10.
//   - Loop through the array then display each book on our 
//     webpage just like we did in class.

const favBooks = [
    "Harry Potter",
    "James Bond",
    366,
    "Ali & Simbi",
    "Voyage of Simbad",
    "Famous Five",
    "Half of a Yellow Sun",
    "Nearly All Men in Lagos are Mad",
    "Harry Potter",
    "Harry Potter",
];

for(let index = 0; index < favBooks.length; index++){
    alert(favBooks[index]);
}