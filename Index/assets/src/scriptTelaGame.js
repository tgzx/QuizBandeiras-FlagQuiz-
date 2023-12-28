
// Elementos HTML
var NumeroBandeira = document.getElementById("NumeroBanderia");
var cronometroElemento = document.getElementById("Cronometro");
var scoreNumero = document.getElementById("score");
var buttonNext = document.getElementById("btn-Next");
var imagemBandeira = document.getElementById("imagemBanderia");
var primeiraEscolha = document.getElementById("flag01");
var segundaEscolha = document.getElementById("flag02");
var terceiraEscolha = document.getElementById("flag03");
var quartaEscolha = document.getElementById("flag04");
var containerDiv = document.getElementById('container-div')
var linkVoltarTela = document.getElementById("voltarTela")


var valorRange = localStorage.getItem("valorDoRange") || 10;
// Arrays e Variáveis

const bandeirasArray = {
  "zw": "Zimbábue", "za": "África do Sul", "zm": "Zâmbia", "ye": "Iêmen", "ws": "Samoa", "vn": "Vietnã", "ve": "Venezuela", "va": "Cidade do Vaticano", "uz": "Uzbequistão", "uy": "Uruguai", "us": "Estados Unidos", "um": "Ilhas Menores Distantes dos EUA", "uk": "Reino Unido", "ae": "Emirados Árabes Unidos", "ua": "Ucrânia", "ug": "Uganda",
"tv": "Tuvalu", "tt": "Trinidad e Tobago", "tr": "Turquia", "tn": "Tunísia", "tm": "Turcomenistão", "tl": "Timor-Leste", "tk": "Tokelau", "tj": "Tajiquistão", "th": "Tailândia", "tg": "Togo", "tf": "Territórios Franceses do Sul", "td": "Chade", "tc": "Ilhas Turcas e Caicos", "sz": "Suazilândia", "sy": "Síria", "sx": "Sint Maarten", "sv": "El Salvador",
"st": "São Tomé e Príncipe", "ss": "Sudão do Sul", "sr": "Suriname", "so": "Somália", "sl": "Serra Leoa", "sk": "Eslováquia", "si": "Eslovênia", "sg": "Singapura", "se": "Suécia", "sd": "Sudão", "sc": "Seicheles", "sb": "Ilhas Salomão", "sa": "Arábia Saudita", "rw": "Ruanda", "rs": "Sérvia", "ro": "Romênia", "re": "Reunião",
"qa": "Catar", "py": "Paraguai", "pw": "Palau", "pt": "Portugal", "pr": "Porto Rico", "pn": "Pitcairn", "pm": "Saint Pierre e Miquelon", "pl": "Polônia", "pk": "Paquistão", "ph": "Filipinas", "pg": "Papua-Nova Guiné", "pf": "Polinésia Francesa", "pe": "Peru", "pa": "Panamá", "om": "Omã", "nz": "Nova Zelândia", "nu": "Niue",
"nr": "Nauru", "np": "Nepal", "no": "Noruega", "nl": "Países Baixos", "ni": "Nicarágua", "ng": "Nigéria", "nf": "Ilha Norfolk", "ne": "Níger", "nc": "Nova Caledônia", "na": "Namíbia", "mz": "Moçambique", "my": "Malásia", "mx": "México", "mw": "Malawi", "mv": "Maldivas", "mu": "Maurícia", "mt": "Malta", "ms": "Montserrat",
"mr": "Mauritânia", "mq": "Martinica", "mp": "Ilhas Marianas do Norte", "mo": "Macau", "mn": "Mongólia", "mm": "Mianmar (Birmânia)", "ml": "Mali", "mk": "Macedônia do Norte", "mh": "Ilhas Marshall", "mg": "Madagáscar", "md": "Moldávia", "mc": "Mónaco", "ma": "Marrocos", "ly": "Líbia", "lv": "Letônia", "lu": "Luxemburgo",
"lt": "Lituânia", "ls": "Lesoto", "lr": "Libéria", "lk": "Sri Lanka", "li": "Liechtenstein", "lc": "Santa Lúcia", "lb": "Líbano", "la": "Laos", "ky": "Ilhas Cayman", "kw": "Kuwait", "kr": "Coreia do Sul", "kp": "Coreia do Norte", "kn": "São Cristóvão e Nevis", "km": "Comores", "ki": "Quiribati", "kh": "Camboja", "kg": "Quirguistão",
"ke": "Quênia", "jp": "Japão", "je": "Jersey", "jm": "Jamaica", "it": "Itália", "is": "Islândia", "ir": "Irã", "iq": "Iraque", "io": "Território Britânico do Oceano Índico", "in": "Índia", "im": "Ilha de Man", "il": "Israel", "ie": "Irlanda", "id": "Indonésia", "hu": "Hungria", "ht": "Haiti", "hr": "Croácia", "hn": "Honduras",
"hm": "Ilha Heard e Ilhas McDonald", "hk": "Hong Kong", "gy": "Guiana", "gw": "Guiné-Bissau", "gu": "Guam", "gt": "Guatemala", "gs": "Ilhas Geórgia do Sul e Sandwich do Sul", "gr": "Grécia", "gq": "Guiné Equatorial", "gp": "Guadalupe", "gn": "Guiné", "gm": "Gâmbia", "gl": "Groenlândia", "gi": "Gibraltar", "gh": "Gana", "gg": "Guernsey",
"gf": "Guiana Francesa", "ge": "Geórgia", "gd": "Granada", "gb": "Reino Unido", "ga": "Gabão", "fr": "França", "fi": "Finlândia", "fj": "Fiji", "fk": "Ilhas Malvinas (Falkland)", "fim": "Micronésia", "fro": "Ilhas Faroé", "fo": "Ilhas Faroé", "fm": "Micronésia", "fk": "Ilhas Malvinas (Falkland)", "fj": "Fiji", "fi": "Finlândia", "fr": "França",
"gf": "Guiana Francesa", "pf": "Polinésia Francesa", "tf": "Territórios Franceses do Sul", "ga": "Gabão", "gm": "Gâmbia", "gh": "Gana", "gi": "Gibraltar", "gl": "Groenlândia", "gd": "Granada", "gb": "Reino Unido", "ga": "Gabão", "gn": "Guiné", "gp": "Guadalupe", "gq": "Guiné Equatorial", "gr": "Grécia", "gs": "Ilhas Geórgia do Sul e Sandwich do Sul",
"gt": "Guatemala", "gu": "Guam", "gw": "Guiné-Bissau", "gy": "Guiana", "hk": "Hong Kong", "hm": "Ilha Heard e Ilhas McDonald", "hn": "Honduras", "hr": "Croácia", "ht": "Haiti", "hu": "Hungria", "id": "Indonésia", "ie": "Irlanda", "ie": "Irlanda", "il": "Israel", "im": "Ilha de Man", "in": "Índia", "io": "Território Britânico do Oceano Índico",
"iq": "Iraque", "ir": "Irã", "is": "Islândia", "it": "Itália", "jm": "Jamaica", "je": "Jersey", "jp": "Japão", "jo": "Jordânia", "ke": "Quênia", "kg": "Quirguistão", "ki": "Quiribati", "ki": "Quiribati", "kp": "Coreia do Norte", "kr": "Coreia do Sul", "kw": "Kuwait", "ky": "Ilhas Cayman", "kz": "Cazaquistão", "la": "Laos", "lb": "Líbano",
"lc": "Santa Lúcia", "li": "Liechtenstein", "lk": "Sri Lanka", "lr": "Libéria", "ls": "Lesoto", "lt": "Lituânia", "lu": "Luxemburgo", "lv": "Letônia", "ly": "Líbia", "ma": "Marrocos", "mc": "Mónaco", "md": "Moldávia", "me": "Montenegro", "mf": "São Martinho", "mg": "Madagáscar", "mh": "Ilhas Marshall", "mk": "Macedônia do Norte", "ml": "Mali",
"mm": "Mianmar (Birmânia)", "mn": "Mongólia", "mo": "Macau", "mp": "Ilhas Marianas do Norte", "mq": "Martinica", "mr": "Mauritânia", "ms": "Montserrat", "mt": "Malta", "mu": "Maurícia", "mv": "Maldivas", "mw": "Malawi", "mx": "México", "my": "Malásia", "mz": "Moçambique", "na": "Namíbia", "nc": "Nova Caledônia", "ne": "Níger", "nf": "Ilha Norfolk",
"ng": "Nigéria", "ni": "Nicarágua", "nl": "Países Baixos", "no": "Noruega", "np": "Nepal", "nr": "Nauru", "nu": "Niue", "nz": "Nova Zelândia", "om": "Omã", "pa": "Panamá", "pe": "Peru", "pf": "Polinésia Francesa", "pg": "Papua-Nova Guiné", "ph": "Filipinas", "pk": "Paquistão", "pl": "Polônia", "pm": "Saint Pierre e Miquelon", "pn": "Pitcairn",
"pr": "Porto Rico", "pt": "Portugal", "pw": "Palau", "py": "Paraguai", "qa": "Catar", "re": "Reunião", "ro": "Romênia", "rs": "Sérvia", "ru": "Rússia", "rw": "Ruanda", "sa": "Arábia Saudita", "sb": "Ilhas Salomão", "sc": "Seicheles", "sd": "Sudão", "se": "Suécia", "sg": "Singapura", "sh": "Santa Helena", "si": "Eslovênia", "sj": "Svalbard e Jan Mayen",
"sk": "Eslováquia", "sl": "Serra Leoa","sg": "Singapura", "sx": "Sint Maarten", "sk": "Eslováquia", "si": "Eslovênia", "sb": "Ilhas Salomão", "so": "Somália", "za": "África do Sul",
"gs": "Geórgia do Sul e Ilhas Sandwich do Sul", "ss": "Sudão do Sul", "es": "Espanha", "lk": "Sri Lanka", "sd": "Sudão", "sr": "Suriname", "sj": "Svalbard e Jan Mayen", "sz": "Suazilândia", "se": "Suécia", "ch": "Suíça", "sy": "Síria", "tw": "Taiwan", "tj": "Tajiquistão", "tz": "Tanzânia", "th": "Tailândia", "tl": "Timor-Leste", "tg": "Togo",
"tk": "Tokelau", "to": "Tonga", "tt": "Trinidad e Tobago", "tn": "Tunísia", "tr": "Turquia", "tm": "Turcomenistão", "tc": "Ilhas Turks e Caicos", "tv": "Tuvalu", "ug": "Uganda", "ua": "Ucrânia", "ae": "Emirados Árabes Unidos", "gb": "Reino Unido", "us": "Estados Unidos", "um": "Ilhas Menores Distantes dos EUA", "uy": "Uruguai", "uz": "Uzbequistão", "vu": "Vanuatu",
"ve": "Venezuela", "vn": "Vietnã", "vi": "Ilhas Virgens dos EUA", "vg": "Ilhas Virgens Britânicas", "wf": "Wallis e Futuna", "eh": "Saara Ocidental", "ye": "Iêmen", "zm": "Zâmbia"
  
}
const codigoPaises = [
  "zw", "za", "zm", "ye", "ws", "vn", "ve", "va", "uz", "uy", "us", "um", "uk", "ae", "ua", "ug",
"tv", "tt", "tr", "tn", "tm", "tl", "tk", "tj", "th", "tg", "tf", "td", "tc", "sz", "sy", "sx", "sv",
"st", "ss", "sr", "so", "sl", "sk", "si", "sg", "se", "sd", "sc", "sb", "sa", "rw", "rs", "ro", "re",
"qa", "py", "pw", "pt", "pr", "pn", "pm", "pl", "pk", "ph", "pg", "pf", "pe", "pa", "om", "nz", "nu",
"nr", "np", "no", "nl", "ni", "ng", "nf", "ne", "nc", "na", "mz", "my", "mx", "mw", "mv", "mu", "mt",
"ms", "mr", "mq", "mp", "mo", "mn", "mm", "ml", "mk", "mh", "mg", "md", "mc", "ma", "ly", "lv", "lu",
"lt", "ls", "lr", "lk", "li", "lc", "lb", "la", "ky", "kw", "kr", "kp", "kn", "km", "ki", "kh", "kg",
"ke", "jp", "je", "jm", "it", "is", "ir", "iq", "io", "in", "im", "il", "ie", "id", "hu", "ht", "hr",
"hn", "hm", "hk", "gy", "gw", "gu", "gt", "gs", "gr", "gq", "gp", "gn", "gm", "gl", "gi", "gh", "gg",
"gf", "ge", "gd", "gb", "ga", "fr", "fi", "fj", "fk", "fim", "fro", "fo", "fm", "fk", "fj", "fi", "fr",
"gf", "pf", "tf", "ga", "gm", "gh", "gi", "gr", "gl", "gd", "gp", "gu", "gt", "gg", "gy", "ht", "hn",
"hm", "va", "hn", "hu", "is", "id", "ir", "iq", "ie", "ie", "il", "jp", "je", "jm", "jo", "kz", "ke",
"kg", "ki", "ki", "kp", "kr", "kr", "kw", "kg", "ky", "kg", "lk", "la", "lb", "ls", "lv", "lr", "ly",
"li", "lt", "lu", "mo", "mk", "mg", "mw", "my", "mv", "ml", "mt", "mh", "mq", "mr", "mu", "yt", "mx",
"fm", "md", "mc", "mn", "ms", "ma", "mz", "mm", "na", "nr", "np", "nl", "nc", "nz", "ni", "ne", "ng",
"nu", "nf", "mp", "no", "om", "pk", "pw", "ps", "pa", "pg", "py", "pe", "pn", "pf", "pl", "pt", "pr",
"qa", "re", "ro", "ru", "rw", "bl", "sh", "kn", "lc", "mf", "pm", "vc", "ws", "sm", "st", "sa", "sn",
"rs", "sc", "sl", "sg", "sx", "sk", "si", "sb", "so", "za", "gs", "ss", "es", "lk", "sd", "sr", "sj",
"sz", "se", "ch", "sy", "tw", "tj", "tz", "th", "tl", "tg", "tk", "to", "tt", "tn", "tr", "tm", "tc",
"tv", "ug", "ua", "ae", "gb", "us", "um", "uy", "uz", "vu", "ve", "vn", "vi", "vg", "wf", "eh", "ye",
"zm"
]

var elementosArray = [primeiraEscolha, segundaEscolha, terceiraEscolha, quartaEscolha];
let intervalId;
let numeroRodada = 0;
let contador =  0;


linkVoltarTela.addEventListener("click", ()=>{
  abrirModalFinal()
})


//Funcao abrir modal

function abrirModalFinal(){
    var elementoModal = document.createElement("dialog")
    elementoModal.classList.add("modal-aviso")
    elementoModal.setAttribute("id","tag-modal")
    var tituloModal = document.createElement("h1")
    tituloModal.textContent = "Parabens"
    var conteudoModal1 = document.createElement("p")
    conteudoModal1.textContent = `Voce acertou ${contador} de ${valorRange}`
    var conteudoModal2 = document.createElement("p")
    var btnElementReplay = document.createElement("button")
    btnElementReplay.classList.add("btn-modal")
    btnElementReplay.textContent = "Jogar novamente"
    btnElementReplay.addEventListener("click",()=>{
      location.reload()
    })
    var btnElementExit = document.createElement("button")
    btnElementExit.classList.add("btn-modal")
    var linkBtn = document.createElement("a")
    linkBtn.textContent = "Sair"
    linkBtn.href = "../index.html"
    linkBtn.style.textDecoration = "none"
    linkBtn.style.color = "black"


    containerDiv.appendChild(elementoModal)
    elementoModal.appendChild(tituloModal)
    elementoModal.appendChild(conteudoModal1)
    elementoModal.appendChild(conteudoModal2)
    elementoModal.appendChild(btnElementReplay)
    elementoModal.appendChild(btnElementExit)
    btnElementExit.appendChild(linkBtn)
}

//Abrir moldal aviso

function abrirModalAviso(){
  var elementoModal = document.createElement("dialog");
  elementoModal.classList.add("modal-aviso");
  elementoModal.setAttribute("id", "tag-modal");

  var conteudoModal1 = document.createElement("p");
  conteudoModal1.textContent = "O tempo acabou";

  var conteudoModal2 = document.createElement("p");
  conteudoModal2.textContent = "Aperte o botão para ir para a próxima rodada";

  var btnElementExit = document.createElement("button");
  btnElementExit.classList.add("btn-modal");
  btnElementExit.textContent = "OK";

  containerDiv.appendChild(elementoModal);
  elementoModal.appendChild(conteudoModal1);
  elementoModal.appendChild(conteudoModal2);
  elementoModal.appendChild(btnElementExit);

  btnElementExit.addEventListener("click", () => {
    elementoModal.remove();
    setTimeout(() => {
      atualizarRodada();
    }, 500);
  });
}


// Função para atualizar a rodada
function atualizarRodada() {
  primeiraEscolha.classList.remove("option-correto", "option-errado");
  segundaEscolha.classList.remove("option-correto", "option-errado");
  terceiraEscolha.classList.remove("option-correto", "option-errado");
  quartaEscolha.classList.remove("option-correto", "option-errado");
  primeiraEscolha.classList.add("option-estilo");
  segundaEscolha.classList.add("option-estilo");
  terceiraEscolha.classList.add("option-estilo");
  quartaEscolha.classList.add("option-estilo");

  if (numeroRodada < valorRange) {
    randomflag();
  }else if(numeroRodada == valorRange || cronometroContador == 0){
      abrirModalFinal()
      var minhaModal = document.getElementById("tag-modal")

      minhaModal.showModal()

  }
}

// Event Listener para o botão Next
buttonNext.addEventListener("click", atualizarRodada);

// Função para escolher bandeiras aleatórias
function randomflag() {
  let cronometroContador = 31;
  numeroRodada = numeroRodada + 1;
  NumeroBandeira.textContent = `${numeroRodada} de ${valorRange}`;
  clearInterval(intervalId);


  function Atualizarcronometro() {
    if (cronometroContador > 0) {
      cronometroContador--;
      cronometroElemento.textContent = `Tempo: ${cronometroContador} s `;
      if(cronometroContador == 0){
        abrirModalAviso()
      }
    }  }

  intervalId = setInterval(Atualizarcronometro, 1000);
  const numeroAleatorio = Math.floor(Math.random() * codigoPaises.length);
  var bandeira = codigoPaises[numeroAleatorio];
  imagemBandeira.src = `Index/assets/imgBandeiras/${bandeira}.png`;
  imagemBandeira.style.width = "250px";
  var nomebandeiraCorreto = bandeirasArray[bandeira];

  var posicaoCorreta = Math.floor(Math.random() * elementosArray.length);
  elementosArray[posicaoCorreta].textContent = nomebandeiraCorreto;

  for (var i = 0; i < elementosArray.length; i++) {
    if (i !== posicaoCorreta) {
      var nomeAleatorio = obterNomeAleatorioDiferente(nomebandeiraCorreto, bandeirasArray);
      elementosArray[i].textContent = nomeAleatorio;
    }
  }

  function obterNomeAleatorioDiferente(nomebandeiraCorreto, bandeirasArray) {
    var nomeAleatorio;
    do {
      nomeAleatorio = bandeirasArray[codigoPaises[Math.floor(Math.random() * codigoPaises.length)]];
    } while (nomeAleatorio === nomebandeiraCorreto);
    return nomeAleatorio;
  }

  let escolhaFeita = false;

  elementosArray.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      if (escolhaFeita) {
        return;
      }
      if (nomebandeiraCorreto === elemento.textContent) {
        contador = contador + 1;

        clearInterval(intervalId);

        elemento.classList.add("option-correto");
        console.log(elemento)

        console.log(contador);
        scoreNumero.textContent = `Score: ${contador}`;
      } else {
        console.log("Você errou!");

        clearInterval(intervalId);

        elemento.classList.add("option-errado")

        const opcaoCorreta = elementosArray.find((el) => el.textContent === nomebandeiraCorreto);
        opcaoCorreta.classList.add("option-correto");
      }

      escolhaFeita = true;
    });
  });
}

// Inicializar a primeira rodada
randomflag();
