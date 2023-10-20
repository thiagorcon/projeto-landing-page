//let nome =  document.getElementById('idNome')
     // let texto = document.getElementById('idMeuCadastro')
     // texto.innerHTML =  nome.value  


function enviar(event) {
     event.preventDefault() 
     let campoNovo = document.createElement('div')
     let dadosNome = document.getElementById('idNome').value
     let dadosSobreNome = document.getElementById('idSobrenome').value
     let cidade = document.getElementById('idCidade').value
     let expressao = document.getElementById('idExpressao').value
     let textoCadastro = document.createTextNode(`Prezado(a) ${expressao} ${dadosNome} ${dadosSobreNome}, morador do ${cidade}, ficamos muito grato com seu cadastro em nosso site. Aproveite nossas promoções e dicas de alimentação. Siga-nos na nossas redes socias.`)
     
     campoNovo.appendChild(textoCadastro)
  
     let teste = document.getElementById('idMeuCadastro')
     teste.insertAdjacentElement('beforeend', campoNovo)    
     
     
}

function enviarEmail() {
     // alert('Obrigado por entra em contato' ) 
     let email = document.getElementById('email').value
     if(email ==''){
          alert('Por favor digite um enereço de e-mail')
     } else {
          alert(`Entraremos em contato através do endereço ${email}`)
     }

}

// function acesso(event){
//      event.preventDefault() 
//      let campoNovo = document.createElement('div')
//      let dadosNome = document.getElementById('idLogin').value
//      let senha = document.getElementById('btn').value
//      let expressao = document.getElementById('idLista').value
//      let listagem = document.getElementById('listaClientes').value
//      // let textoCadastro = document.createTextNode(`Prezado(a) ${expressao} ${dadosNome} ${dadosSobreNome} , ficamos muito grato com seu cadastro em nosso site. Aproveite nossas promoções e dicas de alimentação. Siga-nos na nossas redes socias.`)
//      if(dadosNome === 'adm' && senha == 123) {
          
//      }

     
//      campoNovo.appendChild(textoCadastro)
  
//      let teste = document.getElementById('idLista')
//      teste.insertAdjacentElement('beforeend', campoNovo) 
//}

