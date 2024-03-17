var vezX = true;
var jogadas = 0;
var jogando = false;
var matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];
async function jogada(id_element, index)
{
    jogando = true;
    var valor = document.getElementById(`${id_element}`).textContent;
    if(valor == '')
    {
        let texto = (vezX) ? 'X' : 'O';
        document.getElementById(`${id_element}`).textContent = texto;
        vezX = !vezX;  

        if(id_element >= 6)
           matriz[2][index] = texto;
        else
        if(id_element >= 3)
           matriz[1][index] = texto;
        else
        if(id_element >= 0)
           matriz[0][index] =  texto;
    }

    jogadas++;
    verificarGanho(matriz)
}

function verificarGanho(matriz){
     
    //GANHO NA HORIZONTAL LINHA 0
    if(matriz[0][0] == matriz[0][1] && matriz[0][0] == matriz[0][2] && matriz[0][0])
    {
        alert(`PARABENS!!! O jagador ${matriz[0][0]} venceu!`);
        // reiniciar();
    }
    //GANHO NA HORIZONTAL LINHA 1
    else if(matriz[1][0] == matriz[1][1] && matriz[1][0] == matriz[1][2] && matriz[1][0])
    {
        alert(`PARABENS!!! O jagador ${matriz[1][0]} venceu!`);
        // reiniciar();
    }
    //GANHO NA HORIZONTAL LINHA 2
    else if(matriz[2][0] == matriz[2][1] && matriz[2][0] == matriz[2][2] && matriz[2][0])
    {
        alert(`PARABENS!!! O jagador ${matriz[2][0]} venceu!`);
        // reiniciar();
    }
     //GANHO NA VERTICAL COLUNA 0
    else if(matriz[0][0] == matriz[1][0] && matriz[0][0] == matriz[2][0] && matriz[0][0])
    {
        alert(`PARABENS!!! O jagador ${matriz[0][0]} venceu!`);
        // reiniciar();
    }
    //GANHO NA VERTICAL COLUNA 1
    else if(matriz[0][1] == matriz[1][1] && matriz[0][1] == matriz[2][1] && matriz[0][1])
    {
        alert(`PARABENS!!! O jagador ${matriz[0][1]} venceu!`);
        // reiniciar();
    }
    //GANHO NA VERTICAL COLUNA 2
    else if(matriz[0][2] == matriz[1][2] && matriz[0][2] == matriz[2][2] && matriz[0][2])
    {
        alert(`PARABENS!!! O jagador ${matriz[0][2]} venceu!`);
        // reiniciar();
    }
    //GANHO NA DIAGONAL PRINCIPAL
    else if(matriz[0][0] == matriz[1][1] && matriz[0][0] == matriz[2][2] && matriz[0][0])
    {
        alert(`PARABENS!!! O jagador ${matriz[0][0]} venceu!`);
        // reiniciar();
    }
    //GANHO NA DIAGONAL SECUNDARIA
    else if(matriz[0][2] == matriz[1][1] && matriz[0][2] == matriz[2][0] && matriz[0][2])
    {
        alert(`PARABENS!!! O jagador ${matriz[0][2]} venceu!`);
        // reiniciar();
    }else if(jogadas == 9){
        alert("EMPATE!!!");
        //reiniciar()
    }
}

function mudarJogador()
{
    if(!jogando){
        vezX = !vezX;
        document.getElementById("mudarJogador").textContent = vezX ? "MUDAR PRIMEIRO JOGADOR (O)" : "MUDAR PRIMEIRO JOGADOR (X)";
    }
}

function reiniciar()
{
    if(jogando){
        vezX = true;
        jogadas = 0;
        jogando = false;
        matriz = [
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ];
        document.getElementsByClassName("button")[0].textContent = ''
        document.getElementsByClassName("button")[1].textContent = ''
        document.getElementsByClassName("button")[2].textContent = ''
        document.getElementsByClassName("button")[3].textContent = ''
        document.getElementsByClassName("button")[4].textContent = ''
        document.getElementsByClassName("button")[5].textContent = ''
        document.getElementsByClassName("button")[6].textContent = ''
        document.getElementsByClassName("button")[7].textContent = ''
        document.getElementsByClassName("button")[8].textContent = ''
        document.getElementById("mudarJogador").textContent = "MUDAR PRIMEIRO JOGADOR (O)"; 
    }
}