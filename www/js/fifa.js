const newCard = (e) => {

    var inputTitre = document.getElementById("Titre").value;
    var inputNom = document.getElementById("Nom").value;
    var inputVitesse = document.getElementById("Vitesse").value;
    var inputFrappe = document.getElementById("Frappe").value;
    var inputPasse = document.getElementById("Passe").value;
    var inputDriblle = document.getElementById("Dribble").value;
    var inputDefense = document.getElementById("Defense").value;
    var inputPhysique = document.getElementById("Physique").value;


        var top = {
            titre: inputTitre,
            nom: inputNom,
            vitesse: inputVitesse,
            frappe: inputFrappe,
            passe: inputPasse,
            dribble: inputDriblle,
            defense: inputDefense,
            physique: inputPhysique,       
        }
        if (localStorage.bdd)
        {
            var newbdd = JSON.parse(localStorage.bdd);
            newbdd.push(top); 
            localStorage.setItem("bdd", JSON.stringify(newbdd));
        }
        else
        {
            var newbdd = [];
            newbdd.push(top); 
            localStorage.setItem("bdd", JSON.stringify(newbdd));
        }

        $("#Accueil").removeClass("hidden");  
        $("#FormulaireAjout").addClass("hidden");
        $("#ajout").removeClass("hidden");

}