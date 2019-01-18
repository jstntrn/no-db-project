let id = 12;

let recipes = [
    {
        id: 0,
        title: 'Blueberry Pancakes',
        image_url: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 1,
        title: 'Pesto',
        image_url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 2,
        title: 'Salmon',
        image_url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 3,
        title: 'Pepperoni Pizza',
        image_url: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 4,
        title: 'Fresh Salad',
        image_url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 5,
        title: 'Sliders',
        image_url: 'https://images.unsplash.com/photo-1536510344784-b43e97721c1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 6,
        title: 'Cinnamon Waffles',
        image_url: 'https://images.unsplash.com/photo-1505253304499-671c55fb57fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 7,
        title: 'Bacon Cheese Fries',
        image_url: 'https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 8,
        title: 'Chicken Sandwich',
        image_url: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 9,
        title: 'Banana Bread',
        image_url: 'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 10,
        title: 'Ramen',
        image_url: 'https://images.unsplash.com/photo-1518646261099-bd070a676912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
        id: 11,
        title: 'Steak Tacos',
        image_url: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ingredients: [
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'},
            {qty: 1, units: 'cups', item: 'Water'}
        ],
        instructions: 'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
];

module.exports = {
    getRecipes: (req, res) => {
        res.status(200).send(recipes)
        console.log('got recipes');
    },
    filterRecipes: (req, res) => {
        console.log("checkcontrol")
        const {text} = req.body;
        console.log(text)
        recipes = recipes.filter( recipe => {
            return recipe.title.includes(text) === true;
        })
        res.status(200).send(recipes)
        console.log('filtered recipes')
    },
    addRecipe: (req, res) => {
        const {title, image_url, ingredients, instructions} = req.body;
        recipes.push({
            id: id,
            title: title,
            image_url: image_url,
            ingredients: ingredients,
            instructions: instructions,
        })
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