function botao() {
    let men = window.document.querySelector('ul#menu')
    
    if (men.style.display=='block') {
           men.style.display='none'
    } else {
           men.style.display='block'
    }
}