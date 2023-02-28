function pesquisacep(cep){
    let cepfinal = cep
    let validarcep = /^[0-9]{5}-[0-9]{3}$/

    if(cepfinal != ""){
        if(validarcep.test(cepfinal)){
        let script = document.createElement('script')
        script.src = 'https://viacep.com.br/ws/'+ cepfinal + '/json/?callback=callback_name'
        document.body.appendChild(script)
        }
        else{
            window.alert('Cep inválido!')
        }
    }
    else{
        limpar()
    }
}

function callback_name(objetocep){
    if (!("erro" in objetocep)){
    document.getElementById('rua').value = (objetocep.logradouro)
    document.getElementById('complemento').value = (objetocep.complemento)
    document.getElementById('bairro').value = (objetocep.bairro)
    document.getElementById('uf').value = (objetocep.uf)
    document.getElementById('ddd').value = (objetocep.ddd)
}
else{
    limpar()
    window.alert('Cep não encontrado')
}
}

function incluir(){
    let table = document.getElementById('tabelausuarios')
    let numerolinhas = table.rows.length
    let linha = table.insertRow(numerolinhas)
    let campo1 = linha.insertCell(0)
    let campo2 = linha.insertCell(1)
    let campo3 = linha.insertCell(2)
    let campo4 = linha.insertCell(3)
    let campo5 = linha.insertCell(4)
    let campo6 = linha.insertCell(5)
    let campo7 = linha.insertCell(6)
    let campo8 = linha.insertCell(7)
    let campo9 = linha.insertCell(8)
    let campo10 = linha.insertCell(9)
    let campo11 = linha.insertCell(10)
    campo1.innerHTML = document.getElementById('nome').value
    campo2.innerHTML = document.getElementById('email').value
    campo3.innerHTML = document.getElementById('data').value
    campo4.innerHTML = document.getElementById('cpf').value
    campo5.innerHTML = document.getElementById('cep').value
    campo6.innerHTML = document.getElementById('rua').value
    campo7.innerHTML = document.getElementById('bairro').value
    campo8.innerHTML = document.getElementById('complemento').value
    campo9.innerHTML = document.getElementById('uf').value
    campo10.innerHTML = document.getElementById('ddd').value
    campo11.innerHTML = "<button onclick='removerlinha(this)' id='remover' class='btn btn-danger'>Remover</button>"
    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('data').value = ""
    document.getElementById('cpf').value = ""
    document.getElementById('cep').value = ""
    document.getElementById('rua').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('complemento').value = ""
    document.getElementById('uf').value = ""
    document.getElementById('ddd').value = ""

}

function removerlinha(linha){
    let i = (linha.parentNode.parentNode).rowIndex
    document.getElementById('tabelausuarios').deleteRow(i)
}

function limpar(){
    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('data').value = ""
    document.getElementById('cpf').value = ""
    document.getElementById('cep').value = ""
    document.getElementById('rua').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('complemento').value = ""
    document.getElementById('uf').value = ""
    document.getElementById('ddd').value = ""
    document.getElementById('localidade').value = ""
}
