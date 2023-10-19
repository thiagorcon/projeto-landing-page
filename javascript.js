//let nome =  document.getElementById('idNome')
     // let texto = document.getElementById('idMeuCadastro')
     // texto.innerHTML =  nome.value  


function enviar(event) {
     event.preventDefault() 
     let campoNovo = document.createElement('div')
     let dadosNome = document.getElementById('idNome').value
     let dadosSobreNome = document.getElementById('idSobrenome').value
     let expressao = document.getElementById('idExpressao').value
     let textoCadastro = document.createTextNode(`Prezado(a) ${expressao} ${dadosNome} ${dadosSobreNome} , ficamos muito grato com seu cadastro em nosso site. Aproveite nossas promoções e dicas de alimentação. Siga-nos na nossas redes socias.`)
     
     campoNovo.appendChild(textoCadastro)
  
     let teste = document.getElementById('idMeuCadastro')
     teste.insertAdjacentElement('beforeend', campoNovo)
         
}

