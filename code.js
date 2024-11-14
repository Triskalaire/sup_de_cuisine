import {createRecette} from "./recettes_creation.js"
import { listAppareilsCreate } from "./filtering.js";
import { listIngredientCreate } from "./filtering.js";
import { listUstensilsCreate } from "./filtering.js";
import { filter_liste_appareil } from "./filtering.js";
import { filter_liste_ingredient } from "./filtering.js";
import { filter_liste_ustensiles } from "./filtering.js";

const dataUrl = 'https://gist.githubusercontent.com/baiello/0a974b9c1ec73d7d0ed7c8abc361fc8e/raw/e598efa6ef42d34cc8d7e35da5afab795941e53e/recipes.json';

export const loading_complete = new Event('recettes fully fetched');

function getData(){
    return fetch(dataUrl)
        .then (Response => Response.json())
        .then(recettes => recettes)
        .catch(error => error)
}

getData().then(
    (recettes) => {
        const recetteContainer = document.getElementById("liste_recettes");
        const recetteLength = recettes.length;

        for ( let i = 0; i < recetteLength; i++ ) {
            const recette = createRecette(recettes[i]);
            recetteContainer.append(recette.createRecetteSheet());
        }
        document.dispatchEvent(loading_complete);

    }
)

document.addEventListener('recettes fully fetched', () => {
    const loaderElement = document.getElementById('recette_loader');
    loaderElement.remove();
    listAppareilsCreate();
    listIngredientCreate();
    listUstensilsCreate();
});
document.getElementById('liste_ingredients').addEventListener('change',filter_liste_ingredient);
document.getElementById('liste_ustensiles').addEventListener('change',filter_liste_ustensiles);
document.getElementById('liste_appareils').addEventListener('change',filter_liste_appareil);


