//class creation
function Estabelecimento(nome,orcamento,valorCorteBruto,percentualDeCorte){
    this.nome = nome;
    this.orcamento = orcamento;
    this.valorCorteBruto = valorCorteBruto;
    this.percentualDeCorte = percentualDeCorte;
};


//estabelecendo variaveis

//isso só existe pq ficar digitando todos eles é um saco, pqp
let stringEstados = ["Acre","Alagoas","Amapá","Amazonas","Bahia",'Ceara','Distrito Federal','Espírito Santo',
'Goiás','Maranhão','Mato Grosso',"Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná",
"Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia",
"Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

//seleciona os estados no site
let vetorEstados = $(".estado");

// estadoSelecionado configura o que vai aparecer na página de acordo com o estado. mais informações na documentação do github
let estadoSelecionado;
let estadoMouseoverString;

//verificando o estado do menu
let menuDeBotoes = false;


//-------------------------BOTÕES--------------------//


let listaBotoes = $(".options button");
let estabelecimentoSelecionado;
for (let index = 0; index < listaBotoes.length; index++) {
        listaBotoes[index].addEventListener("click",()=>{
            estabelecimentoSelecionado = listaBotoes[index].getAttribute("id");
        });  
};







//-------------TABELAS----------------//

//eventos das tabelas

for (let index = 0; index < vetorEstados.length; index++){
    vetorEstados[index].addEventListener("click",function (){
        console.log("click funcionando bro");
        estadoSelecionado =  vetorEstados[index].getAttribute("id");
        menuDeBotoes = true;
        showButtons(menuDeBotoes);
    });
    vetorEstados[index].addEventListener("mouseover",function(event){
        estadoMouseoverString = ' <img src="./assets/images/' + vetorEstados[index].getAttribute("id") +'.png"> ';
        vetorEstados[index].innerHTML  = estadoMouseoverString + stringEstados[index];

    });
};


//------------------INSTANCIAS--------------------//

//----------Acre-----------//
let UF_AC = new Estabelecimento("Universidade Federal do Acre","58.672.830","3.834.634","7%");
let IF_AC = new Estabelecimento("Instituto Federal do Acre","33.925.222","1.772.736","5%");

//------Alagoas--------//

let UF_AL = new Estabelecimento("Universidade Federal de Alagoas", "113.366.154", "10.091.228", "9%")
let IF_AL = new Estabelecimento("Instituto Federal de Alagoas", "85.485.553", "3.501.883", "4%")

//-------Amapá---------//

let UF_AP = new Estabelecimento("Fundação Universidade Federal do Amapá", "151.722.981", "8.677.758", "6%");
let IF_AP =new Estabelecimento("Instituto Federal do Amapá", "32.648.274", "7.293.760", "22%");


//------Amazonas------//

let UF_AM = new Estabelecimento("Universidade Federal Rural da Amazônia", "49.016.973", "3.804.307", "8%")






//-------------------FUNÇÕES GERAIS----------------//

function showButtons(menu){
    if(menu){
        $(".estados").fadeOut();    
        $(".options").fadeIn();
    }
    else{
        $(".options").fadeOut();
        $(".estados").fadeIn();
    }
};


function showInfo(estabelecimento,estado){

}