var pimg = document.getElementById("kep")
var szo = document.getElementById("felirat")
var sza = document.getElementById("sorszam")

function PoloSzin()
{
    var opvalue = document.getElementById("option").value
    if (opvalue == 1)
    {
        pimg.src = "assets/images/polo-zold.png" 
        pimg.style = "filter: grayscale(0%);"
    } 
    else if (opvalue == 2)
    {
        pimg.src = "assets/images/polo-kek.png" 
        pimg.style = "filter: grayscale(0%);"
    } 
    else if (opvalue == 3)
    {
        pimg.src = "assets/images/polo-narancs.png" 
        pimg.style = "filter: grayscale(0%);"
    }
    else if (opvalue == 4)
    {
        pimg.src = "assets/images/polo-piros.png" 
        pimg.style = "filter: grayscale(0%);"
    }
    else 
    {
        pimg.src = "assets/images/polo-piros.png"
        pimg.style = "filter: grayscale(100%);"
    }
}

function PoloFelirat()
{
    szo.innerHTML = document.getElementById("feliratszov").value
    szo.style = "text-transform: uppercase"
}