// Section para alterar o border-radius
let sec = window.document.getElementById('sec')

// Textarea, button e p para copiar e colar o texto
var texto = window.document.getElementById('input')
let botao = window.document.getElementById('botao')
let con = window.document.getElementById('confirmado')

// Div e inputs type="checkbox" para comppatibilidade
var botoes = window.document.querySelector('div#compatibilidade')
let caixas = document.querySelectorAll('input[type="checkbox"]')
botoes.addEventListener('change', () => {
    caixas = document.querySelectorAll('input[type="checkbox"]')
    raio()
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
    // Inputs type="number"
    let inputs = window.document.querySelectorAll('input[type=number]')
    let se = Number(inputs[0].value)
    let sd = Number(inputs[1].value)
    let ie = Number(inputs[2].value)
    let id = Number(inputs[3].value)

    // Reseta o texto do textarea e verifica qual checkbox está ativo e aciona sua função especifica
    texto.innerHTML = ''
    if (caixas[0].checked == true) {
        textoWebkit(se, sd, ie, id)
    }
    if (caixas[1].checked == true) {
        textoGecko(se, sd, ie, id)
    }
    if (caixas[2].checked == true) {
        textoCss(se, sd, ie, id)
    }

    // Atualiza os valores dos border radius
    atualiza(se, sd, id, ie)
}

// Função para mostrar webkit
function textoWebkit(se, sd, ie, id) {
    if (se === sd && se === ie && se === id) {
        // Caso todos os valores forem iguais
        texto.innerHTML += `-webkit-border-radius: ${se}px;&#013;`
    } else if (se === id && sd == ie) {
        // Caso os valores sup esq igual ao inf dir e sup dir igual ao inf esq
        texto.innerHTML += `-webkit-border-radius: ${se}px ${sd}px;&#013;`
    } else {
        // Caso todos sejam diferentes
        texto.innerHTML += `-webkit-border-radius: ${se}px ${sd}px ${id}px ${ie}px;&#013;`
    }
}

// Função para mostrar gecko
function textoGecko(se, sd, ie, id) {
    if (se === sd && se === ie && se === id) {
        texto.innerHTML += `-moz-border-radius: ${se}px;&#013;`
    } else if (se === id && sd == ie) {
        texto.innerHTML += `-moz-border-radius: ${se}px ${sd}px;&#013;`
    } else {
        texto.innerHTML += `-moz-border-radius: ${se}px ${sd}px ${id}px ${ie}px;&#013;`
    }
}

// função para mostrar css3
function textoCss(se, sd, ie, id) {
    if (se === sd && se === ie && se === id) {
        texto.innerHTML += `border-radius: ${se}px;&#013;`
    } else if (se === id && sd == ie) {
        texto.innerHTML += `border-radius: ${se}px ${sd}px;&#013;`
    } else {
        texto.innerHTML += `border-radius: ${se}px ${sd}px ${id}px ${ie}px;&#013;`
    }
}

// Função que atualiza as bordas
function atualiza(se = 0, sd = 0, id = 0, ie = 0) {
    sec.style.borderRadius = `${se}px ${sd}px ${id}px ${ie}px`
    botao.style.backgroundColor = '#cecece'
    con.innerHTML = ''
}