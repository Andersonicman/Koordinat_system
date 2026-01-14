var i = 0;
var a = [];
function konum(event)
{
    
    var x = event.clientX;
    var y = event.clientY;

    document.getElementById("x").value = x;
    document.getElementById("y").value = y;

    a.push(x);
    a.push(y);
    

}

function ekle(event)
{
    event.stopPropagation()
    var sresim ;
    for(var k = 0 ; k < document.getElementsByName("resim").length ; k++)
    {
        if(document.getElementsByName("resim")[k].checked)
        {
            sresim = document.getElementsByName("resim")[k].value;

        }
    }

    if(!sresim)
    {
        alert("Lütfen bir resim seçiniz!")
        return;
    }

    var yazi = "";
    for(var j = 0 ; j < a.length ; j+=2)
    {
        
        yazi += "<img src = '" + sresim + "' style = 'position: absolute; left:" + a[j] +"px ; top: "+ a[j+1] +"px;' >"
         
    }
    document.body.innerHTML += yazi; 
}

function yapma(event)
{
    event.stopPropagation();
}
