// document.getElementById(liste_ingredient).addEventListener('change',filter(liste_ingredient));
// document.getElementById(liste_ustensiles).addEventListener('change',filter(liste_ustensiles));
// document.getElementById(liste_appareil).addEventListener('change',filter(liste_appareil));
document.getElementById('recherche').addEventListener('input',filterRecettes());

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

function filterRecettes(){
    const words = document.getElementById('recherche').value.toLowerCase();
    const recipes = document.querySelectorAll('.recette')
    recipes.forEach(recipe => {
        const name = recipe.querySelector('.nom_recette').innerHTML;
        const description = recipe.querySelector('.text_recette').innerHTML;
        const ingredients = Array.from(recipe.querySelectorAll('.ingredient')).map(ingredient => ingredient.textContent.toLowerCase()).join(' ');
        if (!(
            name.includes(words) ||
            ingredients.includes(words)|| 
            description.includes(words))){
            recipe.style.display = 'none';
        }
        else {recipe.style.display ='block'}
    })
}

document.getElementById('recherche').addEventListener('change',filterRecettes)

// function filter(liste){
//     const words = document.getElementById('recherche').value.toLowerCase();
//     const recipes = document.querySelectorAll('.recette')
//     console.log(recipes)
//     console.log(words)
//     recipes.forEach(recipe => {
//         console.log(recipe)
//         // const name = recipe.querySelector('nom_recette');
//         const description = recipe.querySelector('text_recette');
//         // const ingredients = Array.from(recipe.querySelector('ingredient')).map(ingredient => ingredient.textContent.toLowerCase()).join(' ');
//         if (!(
//             // name.includes(words) || 
//             // ingredients.includes(words)|| 
//             description.includes(words))){
//             recipe.style.display = 'none';
//         }
//         else {recipe.style.display ='block'}
//     })
// }

