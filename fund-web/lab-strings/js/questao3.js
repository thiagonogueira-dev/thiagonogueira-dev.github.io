let btSeparar = document.getElementById("separar");

btSeparar.onclick = function(){
    let texto = document.getElementById("texto").value;
    let separadas = document.getElementById("palavras");
    let textoArray = texto.split(" ");

    

    separadas.innerHTML = textoArray[0].charAt(0);
}