


//estabelecendo variaveis

//isso só existe pq ficar digitando todos eles é um saco, pqp
let stringEstados = ["Acre","Alagoas","Amapá","Amazonas","Bahia",'Ceara','Distrito Federal','Espírito Santo',
'Goiás','Maranhão','Mato Grosso',"Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná",
"Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia",
"Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

let stringEstadosAbreviados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",];

//seleciona os estados no site
let vetorEstados = $(".estado");

// estadoSelecionado configura o que vai aparecer na página de acordo com o estado. mais informações na documentação do github
let estadoSelecionado;

//verificando o estado do menu
let menuDeBotoes = false;


//-------------------------BOTÕES--------------------//


let listaBotoes = $(".options button");
let estabelecimentoSelecionado;


//----comportamento das opções---//

for (let index = 0; index < listaBotoes.length; index++) {
        listaBotoes[index].addEventListener("click",()=>{
            estabelecimentoSelecionado = listaBotoes[index].getAttribute("id");
            selecionador(estadoSelecionado,estabelecimentoSelecionado);
        });
       
    };

let returnButton = $(".returnButton button");
returnButton.click(()=>{
    menuDeBotoes = false;
    showButtons(menuDeBotoes);
    $(".data-place").html("");
});





//-------------TABELAS----------------//
//setando background
let actualBackImage = "";
for (let index = 0; index < vetorEstados.length; index++){
    actualBackImage = "url('../assets/images/" + stringEstadosAbreviados[index] + ".jpg'";
    vetorEstados[index].style.backgroundImage = actualBackImage;
};


//eventos das tabelas

for (let index = 0; index < vetorEstados.length; index++){
    vetorEstados[index].addEventListener("click",function (){
        console.log("click funcionando bro");
        estadoSelecionado =  vetorEstados[index].getAttribute("id");
        menuDeBotoes = true;
        showButtons(menuDeBotoes);
    });
};





//-------------------FUNÇÕES GERAIS----------------//

$(".options").fadeOut();

function showButtons(menu){
    if(menu){
        $(".estados").fadeOut();
        setTimeout(()=>{
            $(".options").fadeIn();
            $(".second-section-header").text("Selecione o tipo de estabelecimento:");
        },500);    
    }
    else{
        $(".options").fadeOut();
        setTimeout(()=>{
            $(".estados").fadeIn();
            $(".second-section-header").text("Selecione o estado desejado:");
        },500);
    }
};

