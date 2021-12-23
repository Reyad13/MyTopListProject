function afficherInfos() {
    var carteInfos = document.getElementById("carte-infos")
    var div = document.createElement("div")
    div.setAttribute("class", "carte-info")


    
    let bdd = JSON.parse(localStorage.bdd)
    //Récupère le titre dans le localStorage
    var monTitre = localStorage.getItem('titre');
    // Filtre le tableau afin de récuperer les infos du titre que l'on a choisit
    var newbdd = bdd.filter(function(mesInfosTop){
         return mesInfosTop.titre == monTitre;
        });
    var elements = []
    var elements2 = []
    var elements3 = []
    var elements4 = []
    var elements5 = []
    var elements6 = []
    var elements7 = []
    var elements8 = []
    
    newbdd.forEach((carteInfo, i) => {
        elements[i] = document.createElement("h3")
        elements2[i] = document.createElement("p")
        elements3[i] = document.createElement("p")
        elements4[i] = document.createElement("p")
        elements5[i] = document.createElement("p")
        elements6[i] = document.createElement("p")
        elements7[i] = document.createElement("p")
        elements8[i] = document.createElement("p")
        elements[i].innerHTML  =  carteInfo.titre
        elements2[i].innerHTML =  " Nom complet: " + carteInfo.nom
        elements3[i].innerHTML =  " Frappe : " + carteInfo.frappe
        elements4[i].innerHTML =  " Vitesse : " + carteInfo.vitesse
        elements5[i].innerHTML =  " Passe : " + carteInfo.passe
        elements6[i].innerHTML =  " Dribble : " + carteInfo.dribble
        elements7[i].innerHTML =  " Defense : " + carteInfo.defense
        elements8[i].innerHTML =  " Physique : " + carteInfo.physique
        div.appendChild(elements[i])
        div.appendChild(elements2[i])
        div.appendChild(elements3[i])
        div.appendChild(elements4[i])
        div.appendChild(elements5[i])
        div.appendChild(elements6[i])
        div.appendChild(elements7[i])
        div.appendChild(elements8[i])
        
    })
    carteInfos.appendChild(div)
}


const titresTop = document.getElementById('titresTop');

function titreCheck() {
  if(localStorage.bdd) {
    let tableauTop = JSON.parse(localStorage.bdd);
    var elements =  []
    tableauTop.forEach((element, index) => {
        elements[index] = document.createElement("h3");
        elements[index].addEventListener("click", () => {
            // Sauvegarde du titre dans le localStorage lors du click
            localStorage.setItem('titre',element.titre);
            localStorage.getItem('titre');
            afficherInfos(); 
            $("#infosTop").removeClass("hidden");
            $("#Accueil").addClass("hidden");
            $("#FormulaireAjout").addClass("hidden");
            $("#ajout").addClass("hidden");
        } );
        elements[index].innerHTML = element.titre;
        titresTop.appendChild(elements[index]); 
    });
  } 
}
document.body.onload = titreCheck;








