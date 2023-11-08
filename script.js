function sumar() 
{
            
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

  
    if (!isNaN(num1) && !isNaN(num2)) 
    {
        var suma = num1 / num2;
        document.getElementById("resultado").innerHTML = suma;
    } 
    else 
    {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa números válidos.";
    }
}