// document.getElementById(liste_ingredient).addEventListener('change',filter(liste_ingredient));
// document.getElementById(liste_ustensiles).addEventListener('change',filter(liste_ustensiles));
// document.getElementById(liste_appareil).addEventListener('change',filter(liste_appareil));

function listIngredientCreate(){
    const collection = document.getElementsByClassName('ingredient')
    const liste_ingredient = document.getElementById('liste_ingredients');
    
    for (const ingredient of collection){
        const element_liste=document.createElement('option');
        element_liste.value = ingredient.innerHTML;
        element_liste.textContent = ingredient.innerHTML;
        liste_ingredient.appendChild(element_liste);
    }
    return liste_ingredient;
}

function listUstensilsCreate(){
    const collection = document.getElementsByClassName('ustensils')
    const liste_ustensiles = document.getElementById('liste_ustensiles');
    
    for (const ustensiles of collection){
        const element_liste=document.createElement('option');
        element_liste.value = ustensiles.innerHTML;
        element_liste.textContent = ustensiles.innerHTML;
        liste_ustensiles.appendChild(element_liste);
    }
    return liste_ustensiles;
}

function listAppareilsCreate(){
    const collection = document.getElementsByClassName('appliance')
    const liste_appareils = document.getElementById('liste_appareils');
    
    for (const appareils of collection){
        const element_liste=document.createElement('option');
        element_liste.value = appareils.innerHTML;
        element_liste.textContent = appareils.innerHTML;
        liste_appareils.appendChild(element_liste);
    }
    return liste_appareils;
}

listAppareilsCreate();
listIngredientCreate();
listUstensilsCreate();