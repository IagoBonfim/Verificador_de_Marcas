function descobrir(){
    var nome = document.querySelector("div#nome")
    var res = document.querySelector("div#bandeira")
    var vMarca = document.getElementsByName('radmarca')
    var imgBandeira = document.createElement('img')
    imgBandeira.setAttribute('id', 'foto')
    for(var m of vMarca){
        if(vMarca[0].checked){
            imgBandeira.setAttribute('src', 'img/ferrari.png')
            nome.innerHTML = "Itália!"
            res.innerHTML = ""
            res.append(imgBandeira)
        }else if(vMarca[1].checked){
            imgBandeira.setAttribute('src', 'img/fiat.png')
            nome.innerHTML = "Itália!"
            res.innerHTML = ""
            res.append(imgBandeira)
        }else if(vMarca[2].checked){
            imgBandeira.setAttribute('src', 'img/ford.png')
            nome.innerHTML = "Estados Unidos!"
            res.innerHTML = ""
            res.append(imgBandeira)
        }else if(vMarca[3].checked){
            imgBandeira.setAttribute('src', 'img/mercedes.png')
            nome.innerHTML = "Alemanha!"
            res.innerHTML = ""
            res.append(imgBandeira)
            
        }else if (vMarca[4].checked){
            imgBandeira.setAttribute('src', 'img/volkswagen.png')
            nome.innerHTML = "Alemanha!" 
            res.innerHTML = ""
            res.append(imgBandeira) 
           
        }else{
            alert("Selecione uma marca para continuar")
            return
        }
    }
    
}