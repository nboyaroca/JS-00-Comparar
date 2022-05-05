function comparar(num) {
    let input=document.getElementById("input");
    if (isNaN(num)===false){
        if (num>5){
            input.value="";
        return "el número " + num + " és més gran que 5." 
        }
        
        if (num<5){
            input.value="";
        return "el número " + num + " és més petit que 5."    
        }
        
        if (num=5){
            input.value="";
        return "el número introduït és 5"    
        } 
    }
    
    else {
        alert("cal introduir un número")
        input.value="";
        return ""
    }

}

let click = document.getElementById("button") //click és la variable on guardem el boto
click.addEventListener("click", () =>{
    let input=document.getElementById("input")  //a la variable input li guardem l'input cridat amb "getElementById" que tenim a html
    let numeroIntroduit=input.value //el valor de l'input el guardem dins una variable "numeroIntroduit"
    resposta(numeroIntroduit)
})

function resposta(x) {
    let DOMresposta = document.getElementById("resposta")
    DOMresposta.innerHTML = comparar(x);
    
}

