function createRecette(){
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
        <div class="ingredient_recette">
            ${this.ingredients}
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

function createIngredientList(){
    const ingredientList = document.createElement('article')
    ingredientList.setAttribute('class','ingredient_recette')
    ingredientList.innerHTML=
    `
        <div class="ingredient">
            ${this.ingredient}
        </div>
        <div class="quantity">
            ${this.quantity}
        </div>    
    `;
    return ingredientList ;
}

function createDescription(){

}
export const createRecetteSheet = (recette) => {
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
        createRecette: createRecette,
        createIngredientList: createIngredientList,
        createDescription: createDescription,
    }
};