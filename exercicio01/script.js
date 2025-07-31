function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")
    // console.log(numero1, numero2)
    resposta.textContent = numero1 + numero2
    // resposta.innerHTML = numero1 + numero2
    // resposta.innerText = numero1 + numero2
}

function sub(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respSub")
    resp.textContent = numero3 - numero4
}

function multi(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var resp = document.getElementById("respMulti")
    resp.textContent = numero5 * numero6
}

function div(){
    var numero9 = parseFloat(document.getElementById("n9").value)
    var numero10 = parseFloat(document.getElementById("n10").value)
    var resp = document.getElementById("respDiv")
    if(numero10 !== 0){
        resp.textContent = numero9 / numero10
    }else{
        resp.textContent = "não se divide por 0"
    }
}

//arrow function
const media = () => {
    var nota1 = parseFloat(document.getElementById('m1').value)
    var nota2 = parseFloat(document.getElementById('m2').value)
    var nota3 = parseFloat(document.getElementById('m3').value)
    var nota4 = parseFloat(document.getElementById('m4').value)
    var nota5 = parseFloat(document.getElementById('m5').value)
    var media = document.getElementById('media')
    media.innerHTML = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
    var resposta = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
        if(resposta >= 7){
            media.style.color = 'green'
            media.style.backgroundColor = 'lightgreen'
        }else{
            media.style.color = 'red'
            media.style.backgroundColor = 'lightpink'
        }
}



