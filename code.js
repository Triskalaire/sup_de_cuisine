import {createRecetteSheet} from "./recettes_creation.js"
const dataUrl = 'https://gist.githubusercontent.com/baiello/0a974b9c1ec73d7d0ed7c8abc361fc8e/raw/e598efa6ef42d34cc8d7e35da5afab795941e53e/recipes.json';

const loading_complete = new Event('recettes fully fetched');

export function getData(){
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
            const recette = createRecetteSheet(recettes[i]);
            recetteContainer.append(recette.createRecette());
        }
    }
)