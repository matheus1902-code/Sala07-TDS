function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resp = document.getElementById("respSoma")
    resp.textContent = numero1 + numero2
}

function sub(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respSub")
    resp.textContent = numero1 - numero2
}

function div(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    var resp = document.getElementById("respDiv")
    
    if(numero2 !== 0){
        resp.textContent = numero1 / numero2
    }else{
        resp.textContent = "Não se divide por 0"
    }
}

function multi(){
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("respMulti")
    resp.textContent = numero1 * numero2
}