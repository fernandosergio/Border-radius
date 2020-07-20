let sec = window.document.getElementById('sec')
var texto = window.document.getElementById('input')

// função que copia para area de transferência
function copia() {

    texto.select()
    texto.setSelectionRange(0, 99999)
    document.execCommand('copy')

}
// função que escreve na textarea o codigo e atualiza o section com os valores informados 
function raio() {
    
    // pega os ids dos 4 inputs
    let supesq = window.document.getElementById('seinput')
    let supdir = window.document.getElementById('sdinput')
    let infesqe = window.document.getElementById('ieinput')
    let infdir = window.document.getElementById('idinput')
    
    // transforma os valores em numeros
    let se = Number(supesq.value)
    let sd = Number(supdir.value)
    let ie = Number(infesqe.value)
    let id = Number(infdir.value)
    
    // verifica se todos os valores são iguais
    if (se === sd && se === ie && se === id) {
        
        // escreve na textarea, o codigo com todos os valores iguais e atualiza a section
        texto.innerHTML = ''
        texto.innerHTML += `-webkit-border-radius: ${se}px;&#013;`
        texto.innerHTML += `-moz-border-radius: ${se}px;&#013;`
        texto.innerHTML += `border-radius: ${se}px;&#013;`
        atualiza1(se)
    } else {
        
        // escreve na textarea, o codigo com valores diferentes e atualiza a section
        texto.innerHTML = ''
        texto.innerHTML += `-webkit-border-radius: ${se}px ${sd}px ${id}px ${ie}px;&#013;`
        texto.innerHTML += `-moz-border-radius: ${se}px ${sd}px ${id}px ${ie}px;&#013;`
        texto.innerHTML += `border-radius: ${se}px ${sd}px ${id}px ${ie}px;&#013;`
        atualiza4(se, sd, id, ie)
    }

}

// função que atualiza o border-radius de todos os cantos da section
function atualiza1(se = 0) {
    sec.style.borderRadius = `${se}px`
}

// função que atualiza o border-radius de cada canto conforme o valor informado para cada um 
function atualiza4(se = 0, sd = 0, id = 0, ie = 0) {
    sec.style.borderRadius = `${se}px ${sd}px ${id}px ${ie}px`
}
