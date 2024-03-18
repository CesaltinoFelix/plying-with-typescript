

// function sendEmail(para, conteudo, callback){
//     setTimeout(() =>{
//         console.log("Enviando...")
//         let enviado = true;

const { rejects } = require("assert");

//         if(enviado) callback(para, conteudo, "email enviado")
//         else callback("falha no envio :(")
//     }, 2000)
// }

// sendEmail("cesaltino@gmail.com", "Esse email vai para a minha namorada!", (para, conteudo, feedback)=>{
//     console.log(`
//     --------------------------------------
//     Para: ${para}

//     Conteudo: ${conteudo}
//     --------------------------------------
// ${feedback}
//     `)
// })


function sendEmail(para, corpo){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log("Enviando...");
            var enviado = true;
    
            if(enviado) resolve()
            else reject("Algo deu errado!")
        },2000)
    })
}

sendEmail("celson", "Hello World")
.then(()=>{
    console.log("Deu tudo certo");
}).catch((err)=>{
    console.log(err);
})