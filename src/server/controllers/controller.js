let id = 20;

let recipes = [
    {
        id: 0,
        title: 'Blueberry Pancakes',
        image_url: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 1,
        title: 'Pesto Pasta',
        image_url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 2,
        title: 'Salmon',
        image_url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 3,
        title: 'Pepperoni Pizza',
        image_url: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 4,
        title: 'Fresh Salad',
        image_url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 5,
        title: 'Sliders',
        image_url: 'https://images.unsplash.com/photo-1536510344784-b43e97721c1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 6,
        title: 'Cinnamon Waffles',
        image_url: 'https://images.unsplash.com/photo-1505253304499-671c55fb57fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 7,
        title: 'Bacon Cheese Fries',
        image_url: 'https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 8,
        title: 'Chicken Sandwich',
        image_url: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 9,
        title: 'Banana Bread',
        image_url: 'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 10,
        title: 'Ramen',
        image_url: 'https://images.unsplash.com/photo-1518646261099-bd070a676912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 11,
        title: 'Steak Tacos',
        image_url: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 12,
        title: 'Egg Sandwich',
        image_url: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 13,
        title: 'Enchiladas',
        image_url: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 14,
        title: 'Caramel Cake',
        image_url: 'https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 15,
        title: 'Chocolate Mousse',
        image_url: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 16,
        title: 'Blueberry Pie',
        image_url: 'https://images.unsplash.com/photo-1476887334197-56adbf254e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 17,
        title: 'Croissant',
        image_url: 'https://images.unsplash.com/photo-1503647869191-8eb843e92c0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 18,
        title: 'Rasberry Ice Cream',
        image_url: 'https://images.unsplash.com/photo-1540476279764-95cd842bf327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 19,
        title: 'Vegetable Soup',
        image_url: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: '1 cup all-purpose flour, 1 tablespoon sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 large egg, 3/4 cup milk, 1/4 cup shortening or butter, melted',
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    }
];

module.exports = {
    getRecipes: (req, res) => {
        res.status(200).send(recipes)
        console.log('got recipes');
    },
    filterRecipes: (req, res) => {
        console.log("checkcontrol")
        const {text} = req.params;
        console.log(text)
        let lowerText = text.toLowerCase();
        recipesFiltered = recipes.filter( recipe => {
            let lowerTitle = recipe.title.toLowerCase();
            if(lowerTitle.includes(lowerText) === true){
                return recipe;
            };
        })
        res.status(200).send(recipesFiltered)
        console.log('filtered recipes')
    },
    recipeCard: (req, res) => {
        const {id} = req.params;
        cardData = recipes.filter( recipe => recipe.id === +id)
        res.status(200).send(cardData)
    },
    addRecipe: (req, res) => {
        const {title, image_url, ingredients, instructions} = req.body;
        console.log(req.body);
        
        recipes.push({
            id: id,
            title: title,
            image_url: image_url,
            ingredients: ingredients,
            instructions: instructions,
        })

        console.log(recipes);
        
        id++;
        res.status(200).send(recipes);
        console.log('added recipe');
    },
    editRecipe: (req, res) => {
        const {id} = req.params;
        const {title, image_url, ingredients, instructions} = req.body;                      
        recipes = recipes.map((recipe) => {
            if(recipe.id === +id) {
                recipe.title = title || recipe.title,
                recipe.image_url = image_url || recipe.image_url,
                recipe.ingredients = ingredients || recipe.ingredients,
                recipe.instructions = instructions || recipe.instructions
            }
            return recipe;
        })
        res.status(200).send(recipes);
        console.log('edited recipe');
    },
    deleteRecipe: (req, res) => {
        const {id} = req.params;
        recipes = recipes.filter((recipe) => recipe.id !== +id);
        res.status(200).send(recipes);
        console.log('deleted recipe');
    }
}