//class creation
function Estabelecimento(nome,orcamento,percentualDeCorte,textoIntrodutorio){
    this.nome = nome;
    this.orcamento = orcamento;
    this.percentualDeCorte = percentualDeCorte;
    this.textoIntrodutorio = textoIntrodutorio;
};


//estabelecendo variaveis

//lista os estados
let vetorEstados = $(".estado");

// estadoSelecionado configura o que vai aparecer na página de acordo com o estado. mais informações na documentação do github
let estadoSelecionado;






//-------------TABELAS----------------//

//eventos das tabelas

for (let index = 0; index < vetorEstados.length; index++){
    vetorEstados[index].addEventListener("click",function (){
        console.log("click funcionando bro");
        $(".estados").fadeOut();
    });
};


//------------------INSTANCIAS--------------------//

//-------Amapá---------//

let UF_Amapa = [];






//-------------------FUNÇÕES GERAIS----------------//

function showButtons(){

};