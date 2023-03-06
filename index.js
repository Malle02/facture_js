
 function calculer()
 {   
     let total = 0 
     let listeprix = document.getElementsByClassName("prix_uni")
     let listeqte = document.getElementsByClassName("qte")
     let listetotal = document.getElementsByClassName("totalLigne")

     for (let i = 0; i < listeprix.length; i++){
         listetotal[i].value = parseInt(listeqte[i].value) * parseInt(listeprix[i].value)
         total= total + parseInt(listetotal[i].value)
     }

    

    
    // deuxième tableau

     let soustotal = total
     Stotal.value = soustotal

   let moinsRemise = Stotal.value - (Stotal.value * (Number(document.getElementById("remise").value)/100))
    moinsR.value = moinsRemise

   let Totaxe = soustotal * (Number(document.getElementById("tauxD").value)/100)
    Ttaxe.value = Totaxe

    let Solde = moinsRemise + Totaxe + (Number(document.getElementById("expedito").value))
    Sol.value = Solde
 }


 function ajout_ligne()
 {
     const newli = document.getElementById("modeleligne").cloneNode(true);
     const lastli = document.getElementById("lastligne");
     const pere = document.getElementById("table2").firstChild.nextSibling;

     pere.insertBefore(newli, lastli)
}
 
function remplir()
{ 
    const desctab = new Array("Telephone ", "Ordinateur", "sourie", "chargeur", "clé USB ", "ecran pc", "play-station");
    let listeprix = document.getElementsByClassName("prix_uni");
    let listeqte = document.getElementsByClassName("qte");
    let listedesc = document.getElementsByClassName("desc");

    for (let i = 0; i < listedesc.length; i++)
    {
        let idc = Math.floor(desctab.length * Math.random());
        listedesc[i].value = desctab[idc];

        let qte = Math.floor(10 * Math.random() + 1);
        let prix = Math.floor(100 * Math.random() + 1);
        listeqte[i].value = qte;
        listeprix[i].value = prix;

    }
     
}
function Annuler()

    
	{
		window.location.reload();
	}
