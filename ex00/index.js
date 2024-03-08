function add(n1, n2) {
    return n1 + n2;
}
function mult(n1, n2) {
    return n1 * n2;
}
var result1 = add(4, 9);
var result2 = mult(4, 9);
var nome = "Cesaltino";
var names = ["Celson", "Cesaltino", "Felix"];
var fullName = nome.concat(" Domingos", " Francisco", " Felix");
var sliceNAme = nome.slice(3, 8);
var isTino = names.includes("tino");
console.log(result1);
console.log(result2);
console.log("Name: " + fullName);
console.log("Slice Name: " + sliceNAme);
console.log("isTino: " + isTino);
