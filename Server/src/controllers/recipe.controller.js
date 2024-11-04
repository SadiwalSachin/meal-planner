import { Recipe } from "../models/recipe.model.js";

const recipes = [
    {
        id: 1,
        name: "Spaghetti Bolognese",
        title: "Classic Italian Spaghetti Bolognese",
        cookingTime: 45,
        ingredients: [
            "spaghetti", "ground beef", "onion", "garlic", "tomato sauce",
            "carrots", "celery", "olive oil", "salt", "pepper", "Parmesan cheese"
        ],
        instructions: [
            "Cook spaghetti as per package instructions and set aside.",
            "In a large pan, heat olive oil and sauté onions and garlic until fragrant.",
            "Add ground beef and cook until browned.",
            "Stir in carrots, celery, and tomato sauce; simmer for 30 minutes.",
            "Serve sauce over spaghetti and top with Parmesan cheese."
        ],
        nutrition: { calories: 600, carbs: 60, protein: 25 },
        image:"https://media.istockphoto.com/id/527439685/photo/spaghetti-bolognese.jpg?s=612x612&w=0&k=20&c=LaPTAxoP3HbQ6qHIWWfTRNxYCFQYNUU6EWMCCXP0iYk="
    },
    {
        id: 2,
        name: "Chicken Caesar Salad",
        title: "Grilled Chicken Caesar Salad",
        cookingTime: 20,
        ingredients: [
            "romaine lettuce", "grilled chicken breast", "Parmesan cheese",
            "croutons", "Caesar dressing", "lemon juice", "salt", "pepper"
        ],
        instructions: [
            "Chop romaine lettuce and add to a large bowl.",
            "Slice grilled chicken breast into strips and add to the bowl.",
            "Add croutons and Parmesan cheese.",
            "Drizzle Caesar dressing and lemon juice over salad.",
            "Toss to coat and season with salt and pepper to taste."
        ],
        nutrition: { calories: 400, carbs: 15, protein: 30 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-z6t_Fl6uI7VoK65rEKsRydUphE53rDkENA&s"
    },
    {
        id: 3,
        name: "Vegetable Stir-Fry",
        title: "Quick & Easy Vegetable Stir-Fry",
        cookingTime: 15,
        ingredients: [
            "bell peppers", "broccoli", "carrots", "snap peas", "soy sauce",
            "ginger", "garlic", "olive oil", "salt", "pepper"
        ],
        instructions: [
            "Heat olive oil in a pan over medium heat.",
            "Add minced garlic and ginger, sauté for 1-2 minutes.",
            "Add bell peppers, broccoli, carrots, and snap peas to the pan.",
            "Stir-fry for about 10 minutes until vegetables are tender.",
            "Season with soy sauce, salt, and pepper to taste."
        ],
        nutrition: { calories: 250, carbs: 30, protein: 5 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XBMsByLDT-OQfwwi5PHhQ04_hhPfcHs0MA&s"
    },
    {
        id: 4,
        name: "Beef Tacos",
        title: "Mexican-Style Beef Tacos",
        cookingTime: 20,
        ingredients: [
            "ground beef", "taco seasoning", "tortillas", "lettuce", "tomato",
            "cheese", "sour cream", "avocado", "salt", "pepper"
        ],
        instructions: [
            "Brown ground beef in a pan over medium heat.",
            "Add taco seasoning and mix well.",
            "Fill tortillas with beef, lettuce, diced tomato, cheese, and avocado.",
            "Top with sour cream and season with salt and pepper to taste."
        ],
        nutrition: { calories: 450, carbs: 40, protein: 20 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZZ2CyIz6hiwMuudloMFOPFsmKkmhqO-WJw&s"
    },
    {
        id: 5,
        name: "Pancakes",
        title: "Fluffy Breakfast Pancakes",
        cookingTime: 15,
        ingredients: [
            "flour", "sugar", "baking powder", "salt", "milk", "egg", "butter", "maple syrup"
        ],
        instructions: [
            "In a bowl, mix flour, sugar, baking powder, and salt.",
            "In another bowl, whisk milk, egg, and melted butter.",
            "Combine wet and dry ingredients and mix until smooth.",
            "Cook batter on a hot griddle until bubbles form, then flip.",
            "Serve warm with maple syrup."
        ],
        nutrition: { calories: 300, carbs: 50, protein: 6 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLuRL2SO_VoHSvqE41mrsndRl3Tc06QpkUA&s"
    },
    {
        id: 6,
        name: "Chicken Curry",
        title: "Indian Chicken Curry",
        cookingTime: 40,
        ingredients: [
            "chicken breast", "onion", "garlic", "ginger", "tomato puree",
            "coconut milk", "curry powder", "cilantro", "salt", "pepper"
        ],
        instructions: [
            "Heat oil in a pot and sauté onions, garlic, and ginger.",
            "Add chicken pieces and cook until browned.",
            "Stir in curry powder, tomato puree, and coconut milk.",
            "Simmer on low heat for 20 minutes until chicken is cooked.",
            "Garnish with cilantro before serving."
        ],
        nutrition: { calories: 500, carbs: 25, protein: 30 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixzD4VzaxSG2VMrAqOZ3cec6xSYcSf08qyw&s"
    },
    {
        id: 7,
        name: "Grilled Cheese Sandwich",
        title: "Classic Grilled Cheese",
        cookingTime: 10,
        ingredients: [
            "bread", "cheddar cheese", "butter"
        ],
        instructions: [
            "Butter one side of each slice of bread.",
            "Place cheese between bread slices with buttered sides facing out.",
            "Cook on a skillet until golden brown and cheese is melted."
        ],
        nutrition: { calories: 400, carbs: 30, protein: 10 },
        image:"https://t4.ftcdn.net/jpg/00/96/66/79/360_F_96667985_icjJBJpOeQO6CndaTQmNQEHqG0f6swLR.jpg"
    },
    {
        id: 8,
        name: "Quinoa Salad",
        title: "Mediterranean Quinoa Salad",
        cookingTime: 20,
        ingredients: [
            "quinoa", "cucumber", "tomato", "red onion", "feta cheese",
            "olive oil", "lemon juice", "salt", "pepper"
        ],
        instructions: [
            "Cook quinoa according to package instructions and let cool.",
            "Dice cucumber, tomato, and red onion.",
            "In a bowl, mix quinoa, vegetables, and feta cheese.",
            "Drizzle with olive oil and lemon juice.",
            "Season with salt and pepper, toss, and serve."
        ],
        nutrition: { calories: 350, carbs: 40, protein: 12 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg2Okn9HHWiiAFQuMYfP7y80Wt7wjLnZvdQ&s"
    },
    {
        id: 9,
        name: "Salmon with Asparagus",
        title: "Baked Salmon with Asparagus",
        cookingTime: 25,
        ingredients: [
            "salmon fillet", "asparagus", "olive oil", "lemon juice", "salt", "pepper"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Place salmon and asparagus on a baking sheet.",
            "Drizzle with olive oil and lemon juice.",
            "Season with salt and pepper.",
            "Bake for 20 minutes until salmon is cooked through."
        ],
        nutrition: { calories: 400, carbs: 5, protein: 30 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65bTssRq-eMlD7OabvKgxFMFuNH6cjG58sw&s"
    },
    {
        id: 10,
        name: "Avocado Toast",
        title: "Avocado Toast with Egg",
        cookingTime: 5,
        ingredients: [
            "bread", "avocado", "egg", "salt", "pepper", "chili flakes"
        ],
        instructions: [
            "Toast bread until golden brown.",
            "Mash avocado and spread on toast.",
            "Top with a fried or poached egg.",
            "Season with salt, pepper, and chili flakes."
        ],
        nutrition: { calories: 300, carbs: 20, protein: 10 },
        image:"https://img.freepik.com/free-photo/avocado-open-toast-with-avocado-slices-lemon-flax-seeds-sesame-seeds-black-bread-slices-top-view_2831-797.jpg"
    },
    {
        id: 11,
        name: "Beef Stew",
        title: "Hearty Beef Stew",
        cookingTime: 120,
        ingredients: [
            "beef chuck", "potatoes", "carrots", "celery", "onion",
            "beef broth", "tomato paste", "salt", "pepper", "thyme"
        ],
        instructions: [
            "In a pot, brown beef chuck with salt and pepper.",
            "Add chopped onion, carrots, celery, and potatoes.",
            "Stir in tomato paste and beef broth.",
            "Bring to a boil, then reduce heat and simmer for 1.5 hours.",
            "Season with thyme before serving."
        ],
        nutrition: { calories: 450, carbs: 30, protein: 35 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3vJj91VGKyLYWxQjzwxgB_qS23749ae7iA&s"
    },
    {
        id: 1,
        name: "Spaghetti Bolognese",
        title: "Classic Italian Spaghetti Bolognese",
        cookingTime: 45,
        ingredients: [
            "spaghetti", "ground beef", "onion", "garlic", "tomato sauce",
            "carrots", "celery", "olive oil", "salt", "pepper", "Parmesan cheese"
        ],
        instructions: [
            "Cook spaghetti as per package instructions and set aside.",
            "In a large pan, heat olive oil and sauté onions and garlic until fragrant.",
            "Add ground beef and cook until browned.",
            "Stir in carrots, celery, and tomato sauce; simmer for 30 minutes.",
            "Serve sauce over spaghetti and top with Parmesan cheese."
        ],
        nutrition: { calories: 600, carbs: 60, protein: 25 },
        image:"https://media.istockphoto.com/id/527439685/photo/spaghetti-bolognese.jpg?s=612x612&w=0&k=20&c=LaPTAxoP3HbQ6qHIWWfTRNxYCFQYNUU6EWMCCXP0iYk="
    },
    {
        id: 2,
        name: "Chicken Caesar Salad",
        title: "Grilled Chicken Caesar Salad",
        cookingTime: 20,
        ingredients: [
            "romaine lettuce", "grilled chicken breast", "Parmesan cheese",
            "croutons", "Caesar dressing", "lemon juice", "salt", "pepper"
        ],
        instructions: [
            "Chop romaine lettuce and add to a large bowl.",
            "Slice grilled chicken breast into strips and add to the bowl.",
            "Add croutons and Parmesan cheese.",
            "Drizzle Caesar dressing and lemon juice over salad.",
            "Toss to coat and season with salt and pepper to taste."
        ],
        nutrition: { calories: 400, carbs: 15, protein: 30 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-z6t_Fl6uI7VoK65rEKsRydUphE53rDkENA&s"
    },
    {
        id: 3,
        name: "Vegetable Stir-Fry",
        title: "Quick & Easy Vegetable Stir-Fry",
        cookingTime: 15,
        ingredients: [
            "bell peppers", "broccoli", "carrots", "snap peas", "soy sauce",
            "ginger", "garlic", "olive oil", "salt", "pepper"
        ],
        instructions: [
            "Heat olive oil in a pan over medium heat.",
            "Add minced garlic and ginger, sauté for 1-2 minutes.",
            "Add bell peppers, broccoli, carrots, and snap peas to the pan.",
            "Stir-fry for about 10 minutes until vegetables are tender.",
            "Season with soy sauce, salt, and pepper to taste."
        ],
        nutrition: { calories: 250, carbs: 30, protein: 5 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XBMsByLDT-OQfwwi5PHhQ04_hhPfcHs0MA&s"
    },
    {
        id: 4,
        name: "Beef Tacos",
        title: "Mexican-Style Beef Tacos",
        cookingTime: 20,
        ingredients: [
            "ground beef", "taco seasoning", "tortillas", "lettuce", "tomato",
            "cheese", "sour cream", "avocado", "salt", "pepper"
        ],
        instructions: [
            "Brown ground beef in a pan over medium heat.",
            "Add taco seasoning and mix well.",
            "Fill tortillas with beef, lettuce, diced tomato, cheese, and avocado.",
            "Top with sour cream and season with salt and pepper to taste."
        ],
        nutrition: { calories: 450, carbs: 40, protein: 20 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZZ2CyIz6hiwMuudloMFOPFsmKkmhqO-WJw&s"
    },
    {
        id: 5,
        name: "Pancakes",
        title: "Fluffy Breakfast Pancakes",
        cookingTime: 15,
        ingredients: [
            "flour", "sugar", "baking powder", "salt", "milk", "egg", "butter", "maple syrup"
        ],
        instructions: [
            "In a bowl, mix flour, sugar, baking powder, and salt.",
            "In another bowl, whisk milk, egg, and melted butter.",
            "Combine wet and dry ingredients and mix until smooth.",
            "Cook batter on a hot griddle until bubbles form, then flip.",
            "Serve warm with maple syrup."
        ],
        nutrition: { calories: 300, carbs: 50, protein: 6 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLuRL2SO_VoHSvqE41mrsndRl3Tc06QpkUA&s"
    },
    {
        id: 6,
        name: "Chicken Curry",
        title: "Indian Chicken Curry",
        cookingTime: 40,
        ingredients: [
            "chicken breast", "onion", "garlic", "ginger", "tomato puree",
            "coconut milk", "curry powder", "cilantro", "salt", "pepper"
        ],
        instructions: [
            "Heat oil in a pot and sauté onions, garlic, and ginger.",
            "Add chicken pieces and cook until browned.",
            "Stir in curry powder, tomato puree, and coconut milk.",
            "Simmer on low heat for 20 minutes until chicken is cooked.",
            "Garnish with cilantro before serving."
        ],
        nutrition: { calories: 500, carbs: 25, protein: 30 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixzD4VzaxSG2VMrAqOZ3cec6xSYcSf08qyw&s"
    },
    {
        id: 7,
        name: "Grilled Cheese Sandwich",
        title: "Classic Grilled Cheese",
        cookingTime: 10,
        ingredients: [
            "bread", "cheddar cheese", "butter"
        ],
        instructions: [
            "Butter one side of each slice of bread.",
            "Place cheese between bread slices with buttered sides facing out.",
            "Cook on a skillet until golden brown and cheese is melted."
        ],
        nutrition: { calories: 400, carbs: 30, protein: 10 },
        image:"https://t4.ftcdn.net/jpg/00/96/66/79/360_F_96667985_icjJBJpOeQO6CndaTQmNQEHqG0f6swLR.jpg"
    },
    {
        id: 8,
        name: "Quinoa Salad",
        title: "Mediterranean Quinoa Salad",
        cookingTime: 20,
        ingredients: [
            "quinoa", "cucumber", "tomato", "red onion", "feta cheese",
            "olive oil", "lemon juice", "salt", "pepper"
        ],
        instructions: [
            "Cook quinoa according to package instructions and let cool.",
            "Dice cucumber, tomato, and red onion.",
            "In a bowl, mix quinoa, vegetables, and feta cheese.",
            "Drizzle with olive oil and lemon juice.",
            "Season with salt and pepper, toss, and serve."
        ],
        nutrition: { calories: 350, carbs: 40, protein: 12 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg2Okn9HHWiiAFQuMYfP7y80Wt7wjLnZvdQ&s"
    },
    {
        id: 9,
        name: "Salmon with Asparagus",
        title: "Baked Salmon with Asparagus",
        cookingTime: 25,
        ingredients: [
            "salmon fillet", "asparagus", "olive oil", "lemon juice", "salt", "pepper"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Place salmon and asparagus on a baking sheet.",
            "Drizzle with olive oil and lemon juice.",
            "Season with salt and pepper.",
            "Bake for 20 minutes until salmon is cooked through."
        ],
        nutrition: { calories: 400, carbs: 5, protein: 30 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65bTssRq-eMlD7OabvKgxFMFuNH6cjG58sw&s"
    },
    {
        id: 10,
        name: "Avocado Toast",
        title: "Avocado Toast with Egg",
        cookingTime: 5,
        ingredients: [
            "bread", "avocado", "egg", "salt", "pepper", "chili flakes"
        ],
        instructions: [
            "Toast bread until golden brown.",
            "Mash avocado and spread on toast.",
            "Top with a fried or poached egg.",
            "Season with salt, pepper, and chili flakes."
        ],
        nutrition: { calories: 300, carbs: 20, protein: 10 },
        image:"https://img.freepik.com/free-photo/avocado-open-toast-with-avocado-slices-lemon-flax-seeds-sesame-seeds-black-bread-slices-top-view_2831-797.jpg"
    },
    {
        id: 11,
        name: "Beef Stew",
        title: "Hearty Beef Stew",
        cookingTime: 120,
        ingredients: [
            "beef chuck", "potatoes", "carrots", "celery", "onion",
            "beef broth", "tomato paste", "salt", "pepper", "thyme"
        ],
        instructions: [
            "In a pot, brown beef chuck with salt and pepper.",
            "Add chopped onion, carrots, celery, and potatoes.",
            "Stir in tomato paste and beef broth.",
            "Bring to a boil, then reduce heat and simmer for 1.5 hours.",
            "Season with thyme before serving."
        ],
        nutrition: { calories: 450, carbs: 30, protein: 35 },
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3vJj91VGKyLYWxQjzwxgB_qS23749ae7iA&s"
    }
];

export const getAllRecipe = async (req,res) => {
    return res.status(201).json({success:true,message:"Recipe recived",data:recipes})
}