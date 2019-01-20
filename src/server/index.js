const express = require('express');
const bodyParser = require('body-parser');
const rec = require('./controllers/controller')

//middleware
const app = express();
app.use(bodyParser.json());

//Endpoints
app.get('/api/recipes', rec.getRecipes)
app.post('/api/recipes', rec.addRecipe)
app.delete('/api/recipes/:id', rec.deleteRecipe)
app.put('/api/recipes/:id', rec.editRecipe)
app.get('/api/recipes/:text', rec.filterRecipes)
app.get('/api/recipe/:id', rec.recipeCard)

app.listen(4000, () => {
    console.log('4000 listening')
})
