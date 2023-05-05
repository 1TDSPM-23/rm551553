console.log("Olá Mundo!");
 //declarar uma variável
 ///    var nr1 = "10";
 ///    var nr2 = "5";

 //imprimir as variáveis com o objeo console
 ///    console.log(nr1);
 ///    console.log(nr2);

 //Realizando as operações básicas com esses valores:
 //+ _ - _ * _ e /

 //adição
 //realize a concatenação com o texto resultado:
 //Ex: console.log(Resultado nr1 + nr2);
 ///    console.log(nr1 + nr2);
 ///    console.log("Resultado: " + (parseInt (nr1) + parseInt(nr2)));
 ///    console.log(`RESULTADO ADIÇÃO : (${parseInt (nr1) + parseInt (nr2)})`);


 //Subtração
 ///    console.log(`RESULTADO SUBTRAÇÃO : (${parseInt (nr1) - parseInt (nr2)})`);


 //Multiplicação
 ///    console.log(`RESULTADO MULTIPLICAÇÃO : (${parseInt (nr1) * parseInt (nr2)})`);


 //Divisão
 ///    console.log(`RESULTADO DIVISÃO : (${parseInt (nr1) / parseInt (nr2)})`);


 //Resto da ivisão
 ///    console.log(`RESTO DA DIVISÃO : (${parseInt (nr1) % parseInt (nr2)})`);

 //Descobrindo se um número é par ou impar
 //Utilizando operador ternário ( ? ).
 ///    var nr1 = "10";
 ///    var nr2 = "5";
 ///    var resultado;

 ///    resultado = !(parseInt(nr1)%parseInt(nr2)) ? "PAR" : "IMPAR";
 ///    console.log(`O Número é : ${resultado}`);

    //DIFERENÇA ENTRE VAR/LET/CONST
  ///      let nome1 = "Beatriz";

   ///    if(nome != ""){
      ///     let nome = "Robson";
   ///   }
    //Qual o nome será impresso
    ///  console.log(nome);

    ///  let nom2 = "Matheus";

    //REGRAS DO CONST
    //1ª Regra = Incializar na declaração
    ///    const nome3 = "Violante";
    //2ª Regra = Não pode ser alterado durante o fluxo do programa.
    ///     const nome4 = "Joathan";

    let frutas = ["banana", "maça", "morano", "carambola", "acerola", "laranja"];

    console.log(frutas);
    console.table(frutas);
    console.log(frutas[4]);

    //Adicionar um item ao final do array com o método push(iten)
    frutas.push("melão");
    console.log(frutas);
    //Adicionar um item no inicio do array com o método push(iten)
    frutas.unshft("cajú");
    console.log(frutas);
    //Remover um item no inicio do array com o método pop()
    frutas.pop();
    console.log(frutas);
    //Remover um item no inicio do array com o método shift()
    frutas.shift();
    console.log(frutas);

    //Para localizar um item dentro do array, utilizando o método indexOf(itenNome)
    let indice = frutas.indexOf("morango");
    console.log(frutas[indice]);

    //Para localizar um item dentro do array, e apagar ele utilizamos o método splice(indice do item, quatiade de vezes que o indice será removido)
    //OBS: utilize o método indexOf(itenNOme) para obter o indice do item
    let indice = frutas.indexOf("carambola");
    console.log("Fruta Q estava no indice anes da remoção : " + frutas[indice]);
    frutas.splice(indice,1);
    console.log("Frutas q ficou no indice após remoção : " + frutas[indice]);

    frutas.forEach( (frutas)=>{console.log("oha ele : " + frutas);} );