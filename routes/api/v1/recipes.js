
const express = require('express');

const recipes = require('../../../data/recipes.json');

const router = express.Router();

router.get('/', (req, res) => {
    const recipeList = recipes.map((recipe)=> {
        return {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            prepTime: recipe.prepTime,
            difficulty: recipe.difficulty
        };
    });
    res.json(recipeList);
})

router.get('/recipe/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)
    const recipe = recipes.find((recipe) => recipe.id === id)
    res.json(recipe);
})

router.post('/recipe/add', (req, res) => {
    const newRecipe = {
        ...req.body,
        id: recipes.length + 1
    }
    recipes.push(newRecipe)
    res.json(newRecipe)
})
module.exports = router;
