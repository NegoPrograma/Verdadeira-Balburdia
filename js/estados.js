//class creation
function Estabelecimento(nome,orcamento,valorCorteBruto,percentualDeCorte){
    this.nome = nome;
    this.orcamento = orcamento;
    this.valorCorteBruto = valorCorteBruto;
    this.percentualDeCorte = percentualDeCorte;
};

/* prepara o coração, developer,
 pois abaixo você verá o desespero de alguém que ainda não sabe nada de back e precisa guardar dados
desde antes, já peço perdão pelos seus olhos */



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

let IF_MT = new Estabelecimento("Instituto Federal do Mato Grosso", "91.581.787", "7.948.384", "9%");

let UF_MT = new Estabelecimento("Fundação Universidade Federal de Mato Grosso", "111.390.989", "4.232.340", "4%");


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
,new Estabelecimento("Instituto Federal do Sudeste de Minas Gerais", "54.509.734", "2.481.015","5%")
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


//Paraná

let UF_PR = [new Estabelecimento("Universidade Federal da Integração Latino Americana", "43.792.107", "1.488.500", "3%")
,new Estabelecimento("Universidade Federal do Paraná", "213.536.833", "10.173.529", "5%")
,new Estabelecimento("Universidade Tecnológica Federal do Paraná", "150.351.584", "4.056.637", "3%")
];

let IF_PR = new Estabelecimento("Instituto Federal do Paraná", "78.775.619", "2.799.352", "4%");

//pernambuco

let UF_PE = [new Estabelecimento("Universidade Federal de Pernambuco", "186.364.085", "5.653.591", "3%")
,new Estabelecimento("Universidade Federal Rural de Pernambuco", "78.297.097", "2.396.806", "3%")
];

let IF_PE = [new Estabelecimento("Instituto Federal de Pernambuco", "79.100.872", "3.307.664", "4%")
,new Estabelecimento("Instituto Federal do Sertão Pernambucano", "32.185.666", "2.471.086", "8%")
];

//Piauí

let IF_PI = new Estabelecimento("Instituto Federal do Piauí", "69.784.170", "2.998.761", "4%");

let HP_PI = new Estabelecimento("Hospital Universitário da Fundação Universidade Federal do Piauí", "7.069.490", "7.041.353", "100%");

//RJ

let UF_RJ = [new Estabelecimento("Fundação Universidade do Rio de Janeiro","69.352.230", "117.271", "0%")
,new Estabelecimento("Universidade Federal Fluminense", "242.030.710", "44.345.866", "18%")
,new Estabelecimento("Universidade Federal do Rio de Janeiro", "443.025.271", "16.018.256", "4%")
,new Estabelecimento("Universidade Federal Rural", "do Rio de Janeiro ","71.766.994","375.426", "1%")
];

let IF_RJ = [new Estabelecimento("Colégio Pedro II ","72.963.101", "728.716", "1%")
,new Estabelecimento("Centro Federal de Educação Tecnológica Celso Suckow da Fonseca", "56.737.785", "1.404.124", "2%")
,new Estabelecimento("Instituto Federal Fluminense", "71.864.878", "2.560.120", "4%")
,new Estabelecimento("Instituto Federal do Rio de Janeiro", "83.181.097", "1.848.567", "2%")
];

let HP_RJ = [new Estabelecimento("Hospital Universitário Gaffree e Guinle", "27.660.905", "18.521.898", "67%")
,new Estabelecimento("Complexo Hospitalar e de Saúde da Universidade Federal do Rio de Janeiro", "7.282.285", "3.521.898", "48%")
];

//RN


let UF_RN = [new Estabelecimento("Universidade Federal do Rio Grande do Norte", "206.055.237", "10.336.367", "5%")
,new Estabelecimento("Universidade Federal Rural do Semi-Árido", "51.060.860", "1.500.000", "3%")
];

let IF_RN = new Estabelecimento("Instituto Federal do Rio Grande do Norte", "102.421.740", "2.919.198", "3%");


//RS

let UF_RS = [new Estabelecimento("Fundação Universidade Federal de Ciências da Saúde de Porto Alegre", "35.872.241", "1.500.000", "4%")
,new Estabelecimento("Universidade Federal de Santa Maria", "142.964.016", "6.680.753", "5%")
,new Estabelecimento("Fundação Universidade Federal de Pelotas", "86.954.588", "5.974.027", "7%")
,new Estabelecimento("Universidade Federal do Rio Grande do Sul", "211.767.249", "4.490.484", "2%")   
,new Estabelecimento("Fundação Universidade Federal do Rio Grande", "73.745.030", "3.771.300", "5%")
,new Estabelecimento("Fundação Universidade Federal do Pampa", "56.371.149", "3.000.000", "5%")
];

let IF_RS = [
new Estabelecimento("Instituto Federal do Rio Grande do Sul", "68.293.421", "2.473.954", "4%")
,new Estabelecimento("Instituto Federal Sul-rio-grandense", "62.382.995", "2.920.812", "5%")
,new Estabelecimento("Instituto Federal Farroupilha", "57.074.760", "2.337.564", "4%")
];

//RO

let UF_RO = new Estabelecimento("Fundação Universidade Federal de Rondônia", "41.929.455", "1.400.000", "3%")
let IF_RO = new Estabelecimento("Instituto Federal de Rondônia", "66.888.563", "9.409.504", "14%")


//RR

let UF_RR   =new Estabelecimento("Fundação Universidade Federal de Roraima", "51.521.316", "8.554.250", "17%")
let IF_RR   =new Estabelecimento("Instituto Federal de Roraima", "27.747.636", "2.387.469", "9%")


//SC

let UF_SC =[new Estabelecimento("Universidade Federal de Santa Catarina", "207.046.321", "14.257.829", "7%")
,new Estabelecimento("Universidade Federal da Fronteira Sul", "61.121.946", "1.262.858", "2%")
]
let IF_SC = [new Estabelecimento("Instituto Federal Catarinense", "72.674.936", "6.211.493", "9%")
,new Estabelecimento("Instituto Federal de Santa Catarina", "82.885.474", "2.874.280", "3%")
]


//SP

let UF_SP = [new Estabelecimento("Fundação Universidade Federal do ABC", "63.102.720", "6.400.628", "10%")
,new Estabelecimento("Universidade Federal de São Paulo", "135.073.629", "3.206.884", "2%")
,new Estabelecimento("Fundação Universidade Federal de São Carlos", "67.420.224", "2.044.612", "3%")
];
let IF_SP = new Estabelecimento("Instituto Federal de São Paulo", "138.563.306", "2.166.776", "2%");

//SE

let UF_SE = new Estabelecimento("Fundação Universidade Federal de Sergipe", "135.686.423", "4.023.549", "3%")
;

let IF_SE = new Estabelecimento("Instituto Federal de Sergipe", "40.560.458", "2.649.248", "7%")

//TO

let UF_TO =new Estabelecimento("Fundação Universidade Federal do Tocantins", "93.046.336", "21.384.651", "23%")

let IF_TO = new Estabelecimento("Instituto Federal do Tocantins", "47.806.352", "2.071.103", "4%")


//juntando tudo num trem só

let UFs = [UF_AC,UF_AL,UF_AP,UF_AM,UF_BA,UF_CE,UF_DF,UF_ES,UF_GO,UF_MA,UF_MT,UF_MS,UF_MG,UF_PA,UF_PB,UF_PR,UF_PE,UF_RJ,UF_RN,UF_RS,UF_RO,UF_RR,UF_SC,UF_SP,UF_SE,UF_TO];

let IFs = [IF_AC,IF_AL,IF_AP,IF_BA,IF_CE,IF_DF,IF_ES,IF_GO,IF_MA,IF_MT,IF_MS,IF_MG,IF_PA,IF_PB,IF_PR,IF_PE,IF_PI,IF_RJ,IF_RN,IF_RS,IF_RO,IF_RR,IF_SC,IF_SP,IF_SE,IF_TO];

let HPs = [HP_MS,HP_PI,HP_RJ];



//é agora, estamos prestes a fazer a lendária função principal, tudo que você sofreu e odiou até então passa a ter significado! boa sorte.
//pqp é muito trabalho braçal, nisso que dá fazer as coisas sem planejar, seu arrombado


function showInfo(place){
   let atributo=[]*4;
   let stringAtributo;
   if(!null){
      if(place.constructor === Array){
         for (let index = 0; index < place.length; index++) {
            atributo[0] = place[index].nome;
            atributo[1] = place[index].orcamento;
            atributo[2] = place[index].valorCorteBruto;
            atributo[3] = place[index].percentualDeCorte;
            stringAtributo = '<div class="data-box"> <h2 class="data-header>' + atributo[0] + '</h2> <ul class="list-group"> <li class="list-group-item">'+ atributo[1] +'</li> <li class="list-group-item">' + atributo[2]+ '<li class="list-group-item">' + atributo[3] + '</ul></div>';
            $(".data-place").innerHtml += stringAtributo;
         };
      }
      else{
         atributo[0] = place.nome;
         atributo[1] = place.orcamento;
         atributo[2] = place.valorCorteBruto;
         atributo[3] = place.percentualDeCorte;
         stringAtributo = '<div class="data-box"> <h2 class="data-header>' + atributo[0] + '</h2> <ul class="list-group"> <li class="list-group-item">'+ atributo[1] +'</li> <li class="list-group-item">' + atributo[2]+ '<li class="list-group-item">' + atributo[3] + '</ul></div>';
         $(".data-place").innerHtml += stringAtributo;     
      };
   }
   else{
      $(".data-place").html("<h2> nenhum corte aqui meu parceiro</h2>");
   }
}

function selecionador(estadoSelecionado,opcaoSelecionada){
    switch(opcaoSelecionada){
        case "universidades":
                switch(estadoSelecionado){
                     case "acre":
                           showInfo(UF_AC);
                           console.log(UF_AC);

                        break;
                     case "alagoas":
                           showInfo(UF_AL);
                     
                        break;
                     case "amapa":
                           showInfo(UF_AP);

                        break;
                     case "amazonas":
                           showInfo(UF_AM);
                        break;
                     case "bahia":
                           showInfo(UF_BA);

                        break;
                     case "ceara":
                           showInfo(UF_CE);
                     
                        break;
                     case "df":
                           showInfo(UF_DF);

                        break;
                     case "espiritosanto":
                           showInfo(UF_ES);
                     
                        break;
                     case "goias":
                           showInfo(UF_GO);

                        break;
                     case "maranhao":
                           showInfo(UF_MA);
                     
                        break;
                     case "matogrosso":
                           showInfo(UF_MT);

                        break;
                     case "matogrossodosul":
                           showInfo(UF_MS);
                     
                        break;
                     case "minasgerais":
                           showInfo(UF_MG);

                        break;
                     case "para":
                           showInfo(UF_PA);
                     
                        break;
                     case "paraiba":
                           showInfo(UF_PB);

                        break;
                     case "parana":
                           showInfo(UF_PR);
                     
                        break;
                     case "pernambuco":
                           showInfo(UF_PE);

                        break;
                     case "piaui":
                           showInfo(null);
                     
                        break;
                     case "riodejaneiro":
                           showInfo(UF_RJ);

                        break;
                     case "riograndedonorte":
                           showInfo(UF_RN);
                     
                        break;
                     case "riograndedosul":
                           showInfo(UF_RS);
                     
                        break;
                     case "rondonia":
                           showInfo(UF_RO);
                     
                        break;
                     case "roraima":
                           showInfo(UF_RR);
                     
                        break;
                     case "santacatarina":
                           showInfo(UF_SC);
                     
                        break;
                     case "saopaulo":
                           showInfo(UF_SP);
                     
                        break;
                     case "sergipe":
                           showInfo(UF_SE);
                     
                        break;
                     case "tocantins":
                           showInfo(UF_TO);
                     
                        break;
                }
        break;
        case "instituicoes":
            switch(estadoSelecionado){
               case "acre":
                     showInfo(IF_AC);

                  break;
               case "alagoas":
                     showInfo(IF_AL);
               
                  break;
               case "amapa":
                     showInfo(IF_AP);

                  break;
               case "amazonas":
                     showInfo(null);
               
                  break;
               case "bahia":
                     showInfo(IF_BA);

                  break;
               case "ceara":
                     showInfo(IF_CE);
               
                  break;
               case "df":
                     showInfo(IF_DF);

                  break;
               case "espiritosanto":
                     showInfo(IF_ES);
               
                  break;
               case "goias":
                     showInfo(IF_GO);

                  break;
               case "maranhao":
                     showInfo(IF_MA);
               
                  break;
               case "matogrosso":
                     showInfo(IF_MT);

                  break;
               case "matogrossodosul":
                     showInfo(IF_MS);
               
                  break;
               case "minasgerais":
                     showInfo(IF_MG);

                  break;
               case "para":
                     showInfo(IF_PA);
               
                  break;
               case "paraiba":
                     showInfo(IF_PB);

                  break;
               case "parana":
                     showInfo(IF_PR);
               
                  break;
               case "pernambuco":
                     showInfo(IF_PE);

                  break;
               case "piaui":
                     showInfo(IF_PI);
               
                  break;
               case "riodejaneiro":
                     showInfo(IF_RJ);

                  break;
               case "riograndedonorte":
                     showInfo(IF_RN);
               
                  break;
               case "riograndedosul":
                     showInfo(IF_RS);
               
                  break;
               case "rondonia":
                     showInfo(IF_RO);
               
                  break;
               case "roraima":
                     showInfo(IF_RR);
               
                  break;
               case "santacatarina":
                     showInfo(IF_SC);
               
                  break;
               case "saopaulo":
                     showInfo(IF_SP);
               
                  break;
               case "sergipe":
                     showInfo(IF_SE);
               
                  break;
               case "tocantins":
                     showInfo(IF_TO);
               
                  break;

         }


        break;

        case "hospitais":
            switch(estadoSelecionado){
               case "acre":
                     showInfo(null);

                  break;
               case "alagoas":
                     showInfo(null);
               
                  break;
               case "amapa":
                     showInfo(null);

                  break;
               case "amazonas":
                     showInfo(null);
               
                  break;
               case "bahia":
                     showInfo(null);

                  break;
               case "ceara":
                     showInfo(null);
               
                  break;
               case "df":
                     showInfo(null);

                  break;
               case "espiritosanto":
                     showInfo(null);
               
                  break;
               case "goias":
                     showInfo(null);

                  break;
               case "maranhao":
                     showInfo(null);
               
                  break;
               case "matogrosso":
                     showInfo(null);

                  break;
               case "matogrossodosul":
                     showInfo(HP_MS);
               
                  break;
               case "minasgerais":
                     showInfo(null);

                  break;
               case "para":
                     showInfo(null);
               
                  break;
               case "paraiba":
                     showInfo(null);

                  break;
               case "parana":
                     showInfo(null);
               
                  break;
               case "pernambuco":
                     showInfo(null);

                  break;
               case "piaui":
                     showInfo(HP_PI);
               
                  break;
               case "riodejaneiro":
                     showInfo(HP_RJ);

                  break;
               case "riograndedonorte":
                     showInfo(null);
               
                  break;
               case "riograndedosul":
                     showInfo(null);
               
                  break;
               case "rondonia":
                     showInfo(null);
               
                  break;
               case "roraima":
                     showInfo(null);
               
                  break;
               case "santacatarina":
                     showInfo(null);
               
                  break;
               case "saopaulo":
                     showInfo(null);
               
                  break;
               case "sergipe":
                     showInfo(null);
               
                  break;
               case "tocantins":
                     showInfo(null);
               
                  break;

         }
        break;
    }
}