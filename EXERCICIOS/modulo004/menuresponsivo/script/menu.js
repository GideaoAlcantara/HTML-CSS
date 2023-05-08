
//funcao ao clicar no menu ambuguer faz aparecer as opcoes
function menu(){
    let item = window.document.getElementById('item')
    if ( item.style.display == 'block') {
        item.style.display='none'
    } else {
        item.style.display='block' 
    }
}
//funcao que faz tirar o erro do menu ambuguer ao cliacr e aumentar a tela
function mudoutamanho() {
    if (window.innerWidth >= 770) {
           item.style.display = 'block'
    } else {
        item.style.display='none'
    }
}