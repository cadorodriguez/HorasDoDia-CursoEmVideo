function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var nome = prompt('Ola! Como Posso te chamar?')
    if(nome == 'Rosalvo' || nome == 'rosalvo'){
        nome = `\u{1F347} ${nome} \u{1F347}`
    }if(nome == '' || nome == null){
        msg.innerHTML =`Agora são ${hora} horas e ${minuto} minutos`
    } else {
        msg.innerHTML =`${nome}, Agora são ${hora} horas e ${minuto} minutos`
    }
    
    
  
    if (hora >= 0 && hora <= 12) {
        // Manhã
        msg1.innerHTML = 'Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = '#ffa500'
    } else if ( hora >= 12 && hora < 18) {
        // Tarde
        msg1.innerHTML = 'Boa Tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#A87461'
    } else {
        // Noite
        msg1.innerHTML = 'Boa Noite!'
        img.src = 'noite.png'
        document.body.style.background = '#635300'
    }
}

