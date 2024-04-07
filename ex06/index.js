const { rejects } = require("assert");
const { resolve } = require("path");

class Pessoa{
    constructor(nome, nacionalidade, idade)
    {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.idade = idade;
    }
}

const dados = new Pessoa("Cesaltino Felix", "angolana", 24)

function mostrarInfo(dados, callback){
 return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(`
            ################### MINHAS INFORMACOES ==================
            
            Nome: ${dados.nome}
            Nacionalidade: ${dados.nacionalidade}
            Idade: ${dados.idade}
            
            `)
            let enviou = true
            if (enviou)
            resolve()
            else
            reject("ERRO")  
        }, 2000)
    })
    
}

mostrarInfo(dados)
.then(()=> console.log("As informacoes foram apresentadas com SUCESSO!"))
.catch((err)=> console.log( err + "As informacoes foram apresentadas com FALHA!"))