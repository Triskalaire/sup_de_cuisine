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
        <div class="ustensiles">
            ${createUstensilsList(this.ustensils)}
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
                <div class="unit">${item.unit ? item.unit :""}</div>
            </div>
        `;
    }
    return ingredientHTML;
}

function createUstensilsList(ustensilsArray){
    let ustensilsHTML = '';
    for (const item of ustensilsArray) {
        ustensilsHTML += `
            <div class="ustensils">${item || "N/A"}</div>
        `;
    }
    return ustensilsHTML;
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
        createUstensilsList: createUstensilsList,
    }
};