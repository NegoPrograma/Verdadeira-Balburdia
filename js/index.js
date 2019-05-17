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

//--Bahia--//

let UF_BA = [new Estabelecimento("Universidade Federal dos Vales do Jequitinhonha e Mucuri", "50.655.308", "1.500.000", "3%")
,new Estabelecimento("Universidade Federal do Recôncavo da Bahia", "51.747.760", "1.744.830", "3%")
,new Estabelecimento("Universidade Federal da Bahia", "203.881.325", "43.195.642", "21%")
,new Estabelecimento("Universidade Federal do Sul da Bahia", "32.429.663", "10.897.634", "34%")
,new Estabelecimento("Universidade Federal do Oeste da Bahia", "31.826.132", "3.000.000", "9%")
];

let IF_BA = [new Estabelecimento("Instituto Federal da Bahia", "89.694.607", "2.322.165", "3%")
,new Estabelecimento("Instituto Federal Baiano", "61.795.016", "3.727.010", "6%")
];

//--CEARA--//

let UF_CE = [new Estabelecimento("Universidade Federal do Cariri", "40.177.655", "9.983.363", "25%"),
new Estabelecimento("Universidade Federal do Ceará", "167.867.540", "8.483.363", "5%"),
new Estabelecimento("Universidade da Integração Internacional da Lusofonia Afro-Brasileira", "41.923.720", "2.000.000", "5%")
];

let IF_CE = new Estabelecimento("Instituto Federal do Ceará", "143.325.852", "24.203.528", "17%");

//-----DF-----//

let UF_DF = new Estabelecimento("Fundação Universidade de Brasília", "261.731.308", "38.264.737", "15%");

let IF_DF = new Estabelecimento("Instituto Federal de Brasília", "46.010.593", "5.060.188", "11%");

//--------ES---------//

let UF_ES = new Estabelecimento("Universidade Federal do Espírito Santo", "117.174.474", "3.565.746", "3%");
let IF_ES = new Estabelecimento("Instituto Federal do Espírito Santo", "116.844.127", "3.327.792", "3%");

//--------GO---------//

let UF_GO = [new Estabelecimento("Universidade Federal de Goiás", "126.370.349", "4.078.583", "3%")
,new Estabelecimento("Universidade Federal de Catalão", "17.063.722", "2.500.000", "15%")
,new Estabelecimento("Universidade Federal de Jataí", "18.903.407", "2.500.000", "13%")
];

let IF_GO = [new Estabelecimento("Instituto Federal de Goiás","57.281.134", "1.888.285", "3%")
,new Estabelecimento("Instituto Federal Goiano", "67.285.580", "4.956.791", "7%")
];



//Maranhão//

let IF_MA = new Estabelecimento("Instituto Federal do Maranhão", "109.099.986", "7.746.741", "7%");

let UF_MA = new Estabelecimento("Fundação Universidade Federal do Maranhão", "113.946.682", "7.058.172", "6%");

//MatoGrosso//

let IF_MT = new Estabelecimento("Instituto Federal do Mato Grosso", "91.581.787", "7.948.384", "9%")

let UF_MT = new Estabelecimento("Fundação Universidade Federal de Mato Grosso", "111.390.989", "4.232.340", "4%")


//--- MS----

let UF_MS = [new Estabelecimento("Fundação Universidade Federal de Mato Grosso do Sul", "155.503.395", "50.716.445", "33%")
,new Estabelecimento("Fundação Universidade Federal da Grande Dourados", "63.912.740", "18.998.870", "30%")
];

let IF_MS = new Estabelecimento("Instituto Federal do Mato Grosso do Sul", "40.356.527", "6.981.166", "17%");

let HP_MS = new Estabelecimento("Hospital Universitário da Universidade Federal da Grande Dourados", "32.119.181", "20.000.000", "62%")

//MG

let UF_MG = [new Estabelecimento("Universidade Federal do Triângulo Mineiro", "47.520.958", "183.478", "0%")
,new Estabelecimento("Universidade Federal de Alfenas", "37.303.209","456.183", "1%")
,new Estabelecimento("Fundação Universidade Federal de São João del-Rei", "84.009.408", "1.980.586", "2%")
,new Estabelecimento("Universidade Federal de Juiz de Fora", "240.455.830", "28.746.827", "12%")
,new Estabelecimento("Universidade Federal de Lavras", "82.938.960", "20.369.043", "25%")
,new Estabelecimento("Fundação Universidade Federal do Vale do São Francisco", "47.886.069", "8.530.114", "18%")
,new Estabelecimento("Universidade Federal de Itajubá", "41.465.229", "4.362.302", "11%")
,new Estabelecimento("Fundação Universidade Federal de Ouro Preto", "69.077.922", "3.890.544", "6%")
,new Estabelecimento("Universidade Federal de Uberlândia", "147.202.797", "3.045.385", "2%")
,new Estabelecimento("Fundação Universidade Federal de Viçosa", "106.501.668", "2.908.086", "3%")
];

let IF_MG = [new Estabelecimento("Instituto Federal do Sul de Minas Gerais", "59.254.324", "1.246.069", "2%")
,new Estabelecimento("Instituto Federal do Norte de Minas Gerais", "57.852.857", "2.153.519", "4%")
,new Estabelecimento("Instituto Federal do Triângulo Mineiro", "36.387.637", "2.174.111", "6%")
,new Estabelecimento("Centro Federal de Educação Tecnológica de Minas Gerais", "70.866.971", "3.098.765", "4%")
,new Estabelecimento("Instituto Federal do Sudeste de Minas Gerais 54",".509.734, "2".481.015, ""5%")
];

//Pará

let UF_PA =[new Estabelecimento("Universidade Federal do Oeste do Pará", "54.364.451", "7.409.367", "14%")
,new Estabelecimento("Universidade Federal do Sul e Sudeste do Pará", "33.923.732", "5.559.314", "16%")
,new Estabelecimento("Universidade Federal do Pará", "210.660.445", "3.311.175", "2%")
];

let IF_PA = new Estabelecimento("Instituto Federal do Pará", "78.914.386", "2.731.565", "3%");

//Paraíba

let UF_PB = [new Estabelecimento("Universidade Federal da Paraíba", "161.378.735", "5.645.537", "3%")
,new Estabelecimento("Universidade Federal de Campina Grande", "119.565.309", "2.650.406", "2%")
];

let IF_PB = new Estabelecimento("Instituto Federal da Paraíba", "79.287.705", "1.665.006", "2%")





//-------------------FUNÇÕES GERAIS----------------//

$(".options").fadeOut();




function showButtons(menu){
    if(menu){
        $(".estados").fadeOut();
        setTimeout(()=>{
            $(".options").fadeIn();
        },1500);    
    }
    else{
        $(".options").fadeOut();
        setTimeout(()=>{
            $(".estados").fadeIn();
        },1500);
    }
};


function showInfo(estabelecimento,estado){

}