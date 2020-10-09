const db = require('./database/connection.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipe')
}

function getShoppingList(recipe_id) {
    return db.select('ingredient.ingredient_name', 'recipe_ingredient.quantity' )
    .from('ingredient')
    .join('recipe_ingredient', 'ingredient.id', '=', 'recipe_ingredient.ingredient_id')
    .where('recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
    return db.select('steps.step_name')
    .from('steps')
    .where('recipe_id', recipe_id)
    .orderBy('step_number')
}

// SELECT ingredient.ingredient_name, recipe_ingredient.quantity
// FROM ingredient
// JOIN recipe_ingredient ON ingredient.id = recipe_ingredient.ingredient_id
// WHERE recipe_id = 1