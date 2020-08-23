// Section para alterar o border-radius
let sec = window.document.getElementById('sec')

// Textarea, button e p para copiar e colar o texto
var texto = window.document.getElementById('input')
let botao = window.document.getElementById('botao')
let con = window.document.getElementById('confirmado')

// Div e inputs type="checkbox" para comppatibilidade
var botoes = window.document.querySelector('div#compatibilidade')
let caixas = ''
botoes.addEventListener('change', () => {
    caixas = document.querySelectorAll('input[type="checkbox"]')
        /*if (caixas[0].checked == true) {
            console.log('opa webkit')
        } else {
            console.log('não opa webkit')
        }
        if (caixas[1].checked == true) {
            console.log('opa gecko')
        } else {
            console.log('não opa gecko')
        }
        if (caixas[2].checked == true) {
            console.log('opa css')
        } else {
            console.log('não opa css')
        }*/
})

// Função para copiar e colar do textarea
botao.addEventListener('click', () => {
    texto.select()
    texto.setSelectionRange(0, 99999)
    document.execCommand('copy')
    botao.style.backgroundColor = '#adff2f'
    con.innerHTML += 'Copiado!'
})

// Função para alterar o border radius e o textarea
function raio() {
    let inputs = window.document.querySelectorAll('input[type=number]')

    let se = Number(inputs[0].value)
    let sd = Number(inputs[1].value)
    let ie = Number(inputs[2].value)
    let id = Number(inputs[3].value)
    console.log(se, sd, ie, id)

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

function textoWebkit() {

}

// Função para atualizar todas as bordas
function atualiza1(se = 0) {
    sec.style.borderRadius = `${se}px`
    botao.style.backgroundColor = '#cecece'
    con.innerHTML = ''
}

// Função para atualizar uma borda
function atualiza4(se = 0, sd = 0, id = 0, ie = 0) {
    sec.style.borderRadius = `${se}px ${sd}px ${id}px ${ie}px`
    botao.style.backgroundColor = '#cecece'
    con.innerHTML = ''
}