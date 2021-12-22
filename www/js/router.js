/** router.js **/
ROUTER = (() => {
    let currPage = 0;
    const divs = [$("#Accueil"), $("#FormulaireAjout"), $("#infosTop")];
    const buttons = [$("#ajout"), $("#enregistrer")];
    const init = () => {
      divs[0].removeClass("hidden");
      buttons.forEach((button,index) =>{ 
        button.click(() => { 
            if (button.attr("id") == "ajout")
            { 
                divs[1].removeClass("hidden");  
                divs[0].addClass("hidden");
                divs[2].addClass("hidden");
                button.addClass("hidden");
            } 
        } 
    )
    }
        )     
    };
    return { init };
  })();
  ROUTER.init();
  /***********************************/


