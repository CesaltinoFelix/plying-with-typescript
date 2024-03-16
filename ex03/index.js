class Pessoa {
     constructor(nome, idade, hobbies)
     {
        this.nome = nome;
        this.idade = idade;
        this.hobbies = hobbies;
     }
}

const pessoas = [
    new Pessoa("Cesaltino Felix", 29, ['jogar futibol', 'cantar', 'dancar']),
    new Pessoa("Fernando Felix", 20, ['dancar']),
    new Pessoa("Francisca Felix", 22, ['estudar', 'ler livros', 'jogar video game']),
    new Pessoa("Maira Felix", 12, ['dancar', 'estudar ingles']),
];

const newPessoas = pessoas.filter((pessoa) => {
    return pessoa.idade >= 22;
})

newPessoas.forEach((pessoa, index) =>{
    console.log("NOME: " + pessoa.nome + ", IDADE: " + pessoa.idade);
    console.log("       HOBBIES:");
    pessoa.hobbies.forEach((hobbie, index)=>{
        console.log("               - " + hobbie);        

    })
})
//push
//filter find include
// map foreach 
//pop spread reverse
//slice
