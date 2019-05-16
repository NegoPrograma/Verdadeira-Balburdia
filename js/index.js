//class creation
function Estabelecimento(nome,orcamento,percentualDeCorte,valorCorteBruto){
    this.nome = nome;
    this.orcamento = orcamento;
    this.percentualDeCorte = percentualDeCorte;
    this.valorCorteBruto = valorCorteBruto;
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
let UF_Acre = new Estabelecimento("Universidade Federal do Acre","58.672.830","7%","3.834.634");
let IF_Acre = new Estabelecimento("Instituto Federal do Acre");

//-------Amapá---------//

let UF_Amapa = [];
let IF_Amapa = [];






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