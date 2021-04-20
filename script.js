var cartaUm = {
    nome: "Seiya",
    imagem: `https://i.pinimg.com/474x/d4/12/1f/d4121f8b52c5add8ecb3ac3256591399.jpg`,
    atributos: {
      cosmos: 93,
      forca: 96,
      celebs: 40
    }
  }
  var cartaDois = {
    nome: "Shun",
    imagem : `https://i.pinimg.com/474x/4c/be/78/4cbe7837c936f1fdb1021c98a177195a.jpg`,
    atributos : {
      cosmos: 86,
      forca: 94,
      celebs: 36
    }
  }
  var cartaTres = {
    nome: "Hyoga",
    imagem: `https://i.pinimg.com/474x/65/1d/e6/651de61469eb9bf2c8368a04ad21b7d3.jpg`,
    atributos: {
      cosmos: 87,
      forca: 95,
      celebs: 39
    }
  }
  var cartaQuatro = {
    nome: "Ikki",
    imagem: `https://i.pinimg.com/474x/79/67/b7/7967b70aed81fcb909eb78af52fd79be.jpg`,
    atributos: {
      cosmos: 89,
      forca: 97,
      celebs: 39
    }
  }
  var cartaCinco = {
    nome: "Shiryu",
    imagem: `https://i.pinimg.com/474x/f2/3c/21/f23c21f8bb1963190a1d2629ab2e1f80.jpg`,
    atributos: {
      cosmos: 86,
      forca: 96,
      celebs: 41
    }
  }
  var cartaSeis = {
    nome: "Jabu",
    imagem: `https://i.pinimg.com/474x/e0/43/ac/e043ac0b3125acebc3e10c90e18df69e.jpg`,
    atributos: {
      cosmos: 80,
      forca: 80,
      celebs: 30
    }
  }
  var cartaSete = {
    nome: "Kiki",
    imagem: `https://upload.wikimedia.org/wikipedia/it/thumb/1/1c/ICDZ_Kiki.PNG/260px-ICDZ_Kiki.PNG`,
    atributos: {
      cosmos: 50,
      forca: 60,
      celebs: 25
    }
  }
  var cartaOito = {
    nome: "Geki",
    imagem: `https://i.pinimg.com/474x/7f/0e/21/7f0e21571c7ed6e34140ddc8942f40da.jpg`,
    atributos: {
      cosmos: 78,
      forca: 85,
      celebs: 25
    }
  }
  var cartas = [cartaUm, cartaDois, cartaTres, cartaQuatro, cartaCinco, cartaSeis, cartaSete, cartaOito];
  var cartaJogador, cartaMaquina;
  var numeroCarta;
  var pontosJogador = 0, pontosMaquina = 0;
  
  exibirQuantidadeDeCartas()
  
  // Funções
  function exibirQuantidadeDeCartas() {
      var divQuantidadeCartas = document.getElementById("quantidade-cartas");
  
      divQuantidadeCartas.innerHTML = `<p>Quantidade de cartas disponíveis: ${cartas.length}</p>`;
  }
  
  function sortearCarta() {
    document.getElementById("resultado").innerHTML = "";
  
    cartaMaquina = receberCartaSorteada();
    cartas.splice(numeroCarta, 1);
  
    cartaJogador = receberCartaSorteada();
    cartas.splice(numeroCarta, 1);
    
    exibirQuantidadeDeCartas()
    exibirCartaJogador()
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled= false;
  }
  
  function receberCartaSorteada() {
      numeroCarta = parseInt(Math.random() * cartas.length);
  
      return cartas[numeroCarta];
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
  
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`;
    inserirNomeDaCarta(divCartaJogador, cartaJogador)
    exibirAtributosCartaJogador(divCartaJogador, cartaJogador)
  }
  
  function inserirNomeDaCarta(divCarta, carta) {
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var nome = `<p class="carta-subtitle">${carta.nome}</p>`;
    
    divCarta.innerHTML = moldura + nome;
  }
  
  function exibirAtributosCartaJogador(divCarta, carta) {
    var divOpcoes = `<div id="opcoes" class="carta-status">`;
    
    for (var atributo in carta.atributos) {
      divOpcoes += `<input type="radio" id="${atributo}" name="atributo" value="${atributo}"> <label for="${atributo}">${atributo} ${carta.atributos[atributo]}</label> <br>`;
    }
    divOpcoes += "</div>";
    
    divCarta.innerHTML += divOpcoes;
  }
  
  //Função jogar
  function jogar() {
    var atributoSelecionado = atributoEscolhido()
    
    exibirResultado(atributoSelecionado)
    exibirPlacar()
    exibirCartaMaquina()
    
    document.getElementById("btnJogar").disabled = true;
  
    cartas.length < 2 ? exibirResultadoFinal() : document.getElementById("btnProximaRodada").disabled = false;
  }
  
  function atributoEscolhido() {
    var atributosRadio = document.getElementsByName("atributo");
    var atributoSelecionado = "";
    
    for (var i = 0; i < atributosRadio.length; i++) {
      if (atributosRadio[i].checked) {
        atributoSelecionado = atributosRadio[i].value;
      }
    }
    return atributoSelecionado;
  }
  
  function exibirResultado(atributoSelecionado) {
    var divResultado = document.getElementById("resultado");
  
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      divResultado.innerHTML = `<p class="resultado-final">Ganhou!</p>`;  
      pontosJogador++;
    } else if (cartaMaquina.atributos[atributoSelecionado] > cartaJogador.atributos[atributoSelecionado]) {
      divResultado.innerHTML = `<p class="resultado-final">Perdeu!</p>`;  
      pontosMaquina++;
    } else { 
      divResultado.innerHTML = `<p class="resultado-final">Empatou...</p>`;
    }
  }
  
  function exibirPlacar() {
      var divPlacar = document.getElementById("placar");
      divPlacar.innerHTML = `<p>Jogador ${pontosJogador} x ${pontosMaquina} Máquina</p>`;
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`;
    inserirNomeDaCarta(divCartaMaquina, cartaMaquina)
    exibirAtributosCartaMaquina(divCartaMaquina, cartaMaquina)
  }
  
  function exibirResultadoFinal() {
      document.getElementById("btnProximaRodada").disabled = true;
  
      if (pontosJogador > pontosMaquina) {
          document.getElementById("resultado").innerHTML = "<p class='resultado-final'>Você venceu da Máquina!</p>";
      } else if (pontosJogador < pontosMaquina) {
          document.getElementById("resultado").innerHTML = "<p class='resultado-final'>Você perdeu para Máquina, tente novamente...</p>";
      } else {
          document.getElementById("resultado").innerHTML = "<p class='resultado-final'>Empate, tente novamente...</p>";
      }
  }
  
  function exibirAtributosCartaMaquina(divCarta, carta) {
    var divOpcoes = `<div class="carta-status">`;
    
    for(var atributo in carta.atributos) {
      divOpcoes += `<span class="carta-maquina">${atributo} ${carta.atributos[atributo]}</span> <br>`;
    }
    divOpcoes += "</div>";
    divCarta.innerHTML += divOpcoes;
  }
  
  //Função proximaRodada
  function proximaRodada() {
      document.getElementById("btnProximaRodada").disabled = true;
      
      document.getElementById("resultado").innerHTML = "<p class='resultado-final'>Sortear outra carta</p>";
      
      document.getElementById("cartas").innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`;
      
      document.getElementById("btnSortear").disabled = false;
  }