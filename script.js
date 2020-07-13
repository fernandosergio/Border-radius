let sec = window.document.getElementById('sec')
var texto = window.document.getElementById('input')

function copia() {

    texto.select()
    texto.setSelectionRange(0, 99999)
    document.execCommand('copy')

}

function raio() {
    let supesq = window.document.getElementById('seinput')
    let supdir = window.document.getElementById('sdinput')
    let infesqe = window.document.getElementById('ieinput')
    let infdir = window.document.getElementById('idinput')
    let se = Number(supesq.value)
    let sd = Number(supdir.value)
    let ie = Number(infesqe.value)
    let id = Number(infdir.value)
    if (se === sd && se === ie && se === id) {
        texto.innerHTML = ''
        texto.innerHTML += `-webkit-border-radius: ${se}px;&#013;`
        texto.innerHTML += `-moz-border-radius: ${se}px;&#013;`
        texto.innerHTML += `border-radius: ${se}px;&#013;`
        atualiza1(se)
    } else {
        texto.innerHTML = ''
        texto.innerHTML += `-webkit-border-radius: ${se}px ${sd}px ${id}px ${ie}px;&#013;`
        texto.innerHTML += `-moz-border-radius: ${se}px ${sd}px ${id}px ${ie}px;&#013;`
        texto.innerHTML += `border-radius: ${se}px ${sd}px ${id}px ${ie}px;&#013;`
        atualiza4(se, sd, id, ie)
    }

}

function atualiza1(se = 0) {
    sec.style.borderRadius = `${se}px`
}


function atualiza4(se = 0, sd = 0, id = 0, ie = 0) {
    sec.style.borderRadius = `${se}px ${sd}px ${id}px ${ie}px`
}