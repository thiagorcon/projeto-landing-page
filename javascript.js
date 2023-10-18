let campoNovo = document.createElement('div')
let dadosNome = document.getElementById('idNome')
let dadosSobreNome = document.getElementById('idSobrenome')
let textoCadastro = document.createTextNode (`Prezado(a) ${dadosNome} ${dadosSobreNome} , ficamos muito grato com seu cadastro em nosso site. Aproveite nossas promoções e dicas de alimentação. Siga-nos na nossas redes socias.`)
let texto = campoNovo.appendChild(textoCadastro)

texto.insertAdjacentElement('beforebegin',campoNovo)
let teste = document.getElementById('idMeuCadastro')
campoNovo =  teste.innerHTML

