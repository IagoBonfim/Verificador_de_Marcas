function descobrir(){
    var res = document.querySelector("div#bandeira")
    var vMarca = document.getElementsByName('radmarca')
    if(vMarca.checked == null){
        alert("Selecione uma marca para continuar")
    }else{
        var imgBandeira = document.createElement('img')
         imgBandeira.setAttribute('id', 'foto')
        if(vMarca[0].checked){
            imgBandeira.setAttribute('src', 'img/ferrari.png')
            res.innerHTML = "Itália!"
        }else if(vMarca[1].checked){
            imgBandeira.setAttribute('src', 'img/fiat.png')
            res.innerHTML = "Itália!"
        }else if(vMarca[2].checked){
            imgBandeira.setAttribute('src', 'img/ford.png')
            res.innerHTML = "Estados Unidos!"
        }else if(vMarca[3].checked){
            imgBandeira.setAttribute('src', 'img/mercedes.png')
            res.innerHTML = "Alemanha!"
        }else{
            imgBandeira.setAttribute('src', 'img/volkswagen.png')
            res.innerHTML = "Alemanha!"

        }
    }
}