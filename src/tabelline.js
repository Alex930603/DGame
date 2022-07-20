function tabelline(){
    var i=0;
    var j=0;
    var risultato;
    for(i=0;i<11;i++)
        {
       risultato = i*j;
       document.getElementById("tab").innerHTML = " | " + risultato;
       if(i==10)
            {
                console.log("ciao");
                i=0;
                j++;
            }
        else if (j>9)
            {
                break;
            }

        }
}

