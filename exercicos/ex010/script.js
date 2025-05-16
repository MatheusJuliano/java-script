function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input[name= "txtano"]')
    var res = document.getElementById('res')
    if (fano.value.length == 0 ||Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','imagens')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 14){
                //crianca
                img.setAttribute('src','imagens/menino.png')
            } else if(idade <= 30) {
                //jovem
                img.setAttribute('src','imagens/homem20.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','imagens/homem30.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/homem60.png')
            }
        } else if( fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 14) {
                //crianca
                img.setAttribute('src','imagens/menina.png')
            } else if(idade <= 30) {
                //jovem
                img.setAttribute('src','imagens/mulher20.png')
            } else if ( idade < 50){
                //aduto
                img.setAttribute('src','imagens/mulher40.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/mulher60.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
       
    }
}