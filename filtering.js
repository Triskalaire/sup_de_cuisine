// document.getElementById(liste_ingredient).addEventListener('change',filter(liste_ingredient));
// document.getElementById(liste_ustensiles).addEventListener('change',filter(liste_ustensiles));
// document.getElementById(liste_appareil).addEventListener('change',filter(liste_appareil));

function listIngredientCreate(){
    const collection = document.getElementsByClassName('ingredient')
    const liste_ingredient = document.getElementById('liste_ingredients');
    
    for (const ingredient of collection){
        const element_liste=document.createElement('option');
        var bool = true;
        element_liste.value = ingredient.innerHTML;
        element_liste.textContent = ingredient.innerHTML;
        for (const nodouble of liste_ingredient){
            if (nodouble.innerHTML===ingredient.innerHTML){
                bool=false;
            }
        }
        if (bool){
        liste_ingredient.appendChild(element_liste);
        }
    }
    return liste_ingredient;
}

function listUstensilsCreate(){
    const collection = document.getElementsByClassName('ustensils')
    const liste_ustensiles = document.getElementById('liste_ustensiles');
    
    for (const ustensiles of collection){
        const element_liste=document.createElement('option');
        var bool = true;
        element_liste.value = ustensiles.innerHTML;
        element_liste.textContent = ustensiles.innerHTML;
        for (const nodouble of liste_ustensiles){
            if (nodouble.innerHTML===ustensiles.innerHTML){
                bool=false;
            }
        }
        if (bool){
        liste_ustensiles.appendChild(element_liste);
        }
    }
    return liste_ustensiles;
}

function listAppareilsCreate(){
    const collection = document.getElementsByClassName('appliance')
    const liste_appareils = document.getElementById('liste_appareils');
    
    for (const appareils of collection){
        var element_liste=document.createElement('option');
        var bool = true;
        element_liste.value = appareils.innerHTML;
        element_liste.textContent = appareils.innerHTML;
        for (const nodouble of liste_appareils){
            if (nodouble.innerHTML===appareils.innerHTML){
                bool=false;
            }
        }
        if (bool){
        liste_appareils.appendChild(element_liste);
        }
        
    }
    return liste_appareils;
}

// function sortList(html){
//     var sorted = document.getElementById();
//     for (const i of html){
//         var temp = i.innerHTML;
//         console.log(i, sorted)
//         for (const j of sorted){
//             if (i===j){
//                 temp=''
            
//             }
//         }
//         sorted+=temp;
//     }
//     return sorted
// }
// sortList(listAppareilsCreate())
// sortList(listIngredientCreate())
// sortList(listUstensilsCreate())
