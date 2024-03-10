import { readFile, writeFile } from "fs/promises";
import { Turma } from "./Turma";
import {alunos} from "./dados/dados.aluno";
import { Aluno } from "./Aluno";
import { Professor } from "./Professor";
import { professores } from "./dados/dados.professor";
async function salvarDados(dados: Turma) {
  const turmas: Turma[] = await lerDados();
  turmas.push(dados);
  const dadosString = JSON.stringify(turmas);
  try {
    await writeFile("./dados/dados.turma.json", dadosString);
  } catch (error) {
    console.log(error);
  }
}

async function lerDados(): Promise<Turma[]> {
  try {
    const dados = await readFile("./dados/dados.turma.json");
    const turmas = JSON.parse(dados.toString());
    return turmas;
  } catch (error) {
    console.log(error);
    return [];
  }
}
function mostrarInformacao() : void{
    
let turmas: Promise<Turma[]> = lerDados();
turmas.then((turmas) => {
    turmas.forEach((turma : Turma) => {
        console.log("=======================================================");
        console.log("ID: " + turma.id + " - " + "TURMA: " + turma.nome + " - " + "CLASSE: " + turma.classe + " - " + "CURSO: " + turma.curso);
        console.log("");
        console.log("           ALUNOS");
        turma.idAlunos.forEach((id : number) => {
            alunos.forEach((aluno : Aluno) =>{
                if(aluno.id == id){
                    console.log(`           ${aluno.toString()}`)
                }
            })
        })
        console.log("");
        console.log("                      PROFESSORES");
            professores.forEach((professor : Professor) =>{
                professor.turmas.forEach((id : number) =>{
                    if(id == turma.id){
                        console.log(`                       ${professor.toString()}`)
                    }
                })
            })
        console.log("=======================================================");
        console.log("");
        console.log("");
        console.log("");
    })
})
}

// const dados = new Turma(2, 'M12A', 11, 'Mecanica', [5, 6, 7]);
// salvarDados(dados).then(()=>{
//     mostrarInformacao();
// });

// const dados2 = new Turma(3, 'M12B', 11, 'Mecanica', [1, 2, 3]);

function dadosForm(): void
{
    const id = Number((<HTMLInputElement>document.getElementById("id"))?.value);
    const nome = (<HTMLInputElement>document.getElementById("nome"))?.value;
    const classe = Number((<HTMLInputElement>document.getElementById("classe"))?.value);
    const idAlunosForm: Array<string> = ((<HTMLInputElement>document.getElementById("idAlunos"))?.value).split(',');
    const curso = (<HTMLInputElement>document.getElementById("curso"))?.value;
    let idAlunos: number[] = [];
    console.log(`${id} - ${nome} - ${classe} - ${idAlunos} - ${curso}`);
    idAlunosForm.forEach((id) =>{
        idAlunos.push(parseInt(id));
    })

    salvarDados(new Turma(id, nome, classe, curso, idAlunos));
    console.clear();    
    mostrarInformacao();
    
    
}
mostrarInformacao();
