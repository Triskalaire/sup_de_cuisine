function createRecetteSheet(){
    const article = document.createElement('article')
    article.setAttribute('class', 'recette')
    article.innerHTML=
        `
        <div class="img_recette">
            <img class="food_image" src="${this.image}">
        </div>
        <div class="nom_recette">
            ${this.name}
        </div>
        <div class="servings">
            ${this.servings}
        </div>
        <div class="time">
            ${this.time}
        </div>
        <div class="ingredients_recette">
            ${createIngredientList(this.ingredients)}
        </div>
        <div class="text_recette">
            ${this.description}
        </div>
        <div class="appliance">
            ${this.appliance}
        </div>
        <div class="ustensils">
            ${this.ustensils}
        </div>
        `;
    return article;
}

function createIngredientList(ingredientArray) {
    let ingredientHTML = '';
    for (const item of ingredientArray) {
        ingredientHTML += `
            <div class="ingredient_recette">
                <div class="ingredient">${item.ingredient || "N/A"}</div>
                <div class="quantity">${item.quantity ? item.quantity : ""}</div>
            </div>
        `;
    }
    return ingredientHTML;
}

function createDescription(){

}
export const createRecette = (recette) => {
    const { id, image, name, servings, ingredients, time, description, appliance, ustensils } = recette;

    return {
        id: id,
        image: image,
        name: name,
        servings: servings,
        ingredients: ingredients,
        time: time,
        description: description,
        appliance: appliance,
        ustensils: ustensils,
        createRecetteSheet: createRecetteSheet,
        createIngredientList: createIngredientList,
        createDescription: createDescription,
    }
};