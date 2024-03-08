function add(n1: number, n2: number) : number
{
    return n1 + n2;
}

function mult(n1: number, n2: number): number
{
    return n1 * n2;
}
const result1 : number = add(4, 9);
const result2 : number = mult(4, 9);

const nome : string = "Cesaltino";
const names = ['Cesaltino', 'Felix', 'Domingos', 'Francisco'];
const fullName: string = nome.concat(" Domingos", " Francisco", " Felix")
const sliceNAme: string = nome.slice(3,8)
const isTino: boolean = names.includes("tino");
console.log(result1);
console.log(result2);
console.log("Name: " + fullName);
console.log("Slice Name: " + sliceNAme);
console.log("isTino: " + isTino);