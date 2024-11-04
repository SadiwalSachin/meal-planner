import {Meal} from "../models/meal.model.js"


const meals = [
    {
      id: 1,
      name: "Grilled Chicken Salad",
      details: "Grilled chicken with mixed greens, cherry tomatoes, and a light vinaigrette.",
      calories: 300,
      protein: 35,
      carbs: 10,
      fats: 10,
      dietaryPreferences: ["Gluten-Free", "Low-Carb"],
      healthGoals: ["Weight Loss", "High Protein"],
      mealType: "Lunch",
      image:"https://media.istockphoto.com/id/1036965974/photo/caprese-lunch-bowl-with-grilled-chicken.jpg?s=612x612&w=0&k=20&c=VoB4Gag47G7q2KlVIWj2JzB915zCk8A8i0UirW2WTa8="
    },
    {
      id: 2,
      name: "Vegan Buddha Bowl",
      details: "Quinoa, roasted veggies, chickpeas, avocado, and tahini dressing.",
      calories: 450,
      protein: 12,
      carbs: 50,
      fats: 15,
      dietaryPreferences: ["Vegan", "Gluten-Free"],
      healthGoals: ["Heart Health", "High Fiber"],
      mealType: "Lunch",
      image:"https://simplyceecee.co/wp-content/uploads/2018/07/veganbuddhabowl-2.jpg"
    },
    {
      id: 3,
      name: "Avocado Toast",
      details: "Whole-grain toast topped with mashed avocado, salt, and pepper.",
      calories: 250,
      protein: 6,
      carbs: 28,
      fats: 14,
      dietaryPreferences: ["Vegetarian"],
      healthGoals: ["Healthy Fats", "Quick & Easy"],
      mealType: "Breakfast",
      image:"https://img.freepik.com/free-photo/avocado-open-toast-with-avocado-slices-lemon-flax-seeds-sesame-seeds-black-bread-slices-top-view_2831-797.jpg"
    },
    {
      id: 4,
      name: "Egg White Omelette",
      details: "Egg whites with spinach, mushrooms, and feta cheese.",
      calories: 200,
      protein: 25,
      carbs: 4,
      fats: 8,
      dietaryPreferences: ["Low-Carb", "Vegetarian"],
      healthGoals: ["Weight Loss", "High Protein"],
      mealType: "Breakfast",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMK_daSKlNyP_ws6ixVDq4Cx_cCMpfKuq2fg&s"
    },
    {
      id: 5,
      name: "Salmon & Asparagus",
      details: "Grilled salmon with roasted asparagus and lemon.",
      calories: 400,
      protein: 30,
      carbs: 5,
      fats: 25,
      dietaryPreferences: ["Gluten-Free", "Paleo"],
      healthGoals: ["Heart Health", "Muscle Gain"],
      mealType: "Dinner",
      image:"https://media.istockphoto.com/id/1091500222/photo/grilled-salmon-with-french-fries-and-asparagus.jpg?s=612x612&w=0&k=20&c=nd5Kr3iq9ATyf0j9etHOrqz2yyG7QsoahEBXvUkf4qY="
    },
    {
      id: 6,
      name: "Beef Stir-Fry",
      details: "Lean beef with bell peppers, onions, and broccoli in a light sauce.",
      calories: 500,
      protein: 40,
      carbs: 20,
      fats: 20,
      dietaryPreferences: ["Low-Carb"],
      healthGoals: ["Muscle Gain", "High Protein"],
      mealType: "Dinner",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1WpKkmp8pWn-z4uTilaWKFloh_iIHgL-aw&s"
    },
    {
      id: 7,
      name: "Greek Yogurt with Berries",
      details: "Low-fat Greek yogurt topped with blueberries, strawberries, and honey.",
      calories: 200,
      protein: 15,
      carbs: 25,
      fats: 3,
      dietaryPreferences: ["Vegetarian", "Gluten-Free"],
      healthGoals: ["Digestive Health", "Low Fat"],
      mealType: "Snack",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-5RIP-6vI81DZYPpzYf4AQYB9nB_LHVbyA&s"
    },
    {
      id: 8,
      name: "Shrimp Tacos",
      details: "Shrimp with lettuce, salsa, and avocado in soft corn tortillas.",
      calories: 350,
      protein: 20,
      carbs: 40,
      fats: 12,
      dietaryPreferences: ["Gluten-Free"],
      healthGoals: ["Quick & Easy", "Healthy Fats"],
      mealType: "Lunch",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl552p5YG_jl9YUZ92ZIMr8_i_i3D-6QpzbA&s"
    },
    {
      id: 9,
      name: "Spaghetti Squash Bolognese",
      details: "Spaghetti squash with homemade bolognese sauce.",
      calories: 300,
      protein: 20,
      carbs: 25,
      fats: 10,
      dietaryPreferences: ["Low-Carb", "Gluten-Free"],
      healthGoals: ["Weight Loss", "Low Fat"],
      mealType: "Dinner",
      image:"https://www.paleorunningmomma.com/wp-content/uploads/2020/01/bolognese6.jpg"
    },
    {
      id: 10,
      name: "Turkey Chili",
      details: "Lean ground turkey with beans, tomatoes, and spices.",
      calories: 400,
      protein: 30,
      carbs: 45,
      fats: 10,
      dietaryPreferences: ["Gluten-Free"],
      healthGoals: ["High Protein", "Heart Health"],
      mealType: "Dinner",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHj2CCFPOuy_a51IHq3C8quW2k8SHRN9pqg&s'
    },
    {
      id: 11,
      name: "Veggie Stir-Fry",
      details: "Broccoli, bell peppers, carrots, and tofu in a light soy sauce.",
      calories: 350,
      protein: 15,
      carbs: 50,
      fats: 10,
      dietaryPreferences: ["Vegan", "Gluten-Free"],
      healthGoals: ["Weight Loss", "High Fiber"],
      mealType: "Dinner",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XBMsByLDT-OQfwwi5PHhQ04_hhPfcHs0MA&s"
    },
    {
      id: 12,
      name: "Chicken Fajitas",
      details: "Grilled chicken with onions, bell peppers, and spices.",
      calories: 400,
      protein: 35,
      carbs: 30,
      fats: 15,
      dietaryPreferences: ["Gluten-Free", "Low-Carb"],
      healthGoals: ["Muscle Gain", "High Protein"],
      mealType: "Dinner",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkcdS6ilydpFyW9P0uOCXcjGSbCukl86T-3A&s"
    },
    {
      id: 13,
      name: "Cauliflower Rice Bowl",
      details: "Cauliflower rice with black beans, salsa, and avocado.",
      calories: 250,
      protein: 10,
      carbs: 20,
      fats: 12,
      dietaryPreferences: ["Vegan", "Low-Carb"],
      healthGoals: ["Weight Loss", "High Fiber"],
      mealType: "Lunch",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjMVI8MSdd3JU6I5T5hcQHpGIfuiHdXhVHg&s"
    },
    {
      id: 14,
      name: "Tofu Scramble",
      details: "Scrambled tofu with spinach, mushrooms, and spices.",
      calories: 200,
      protein: 15,
      carbs: 10,
      fats: 10,
      dietaryPreferences: ["Vegan", "Low-Carb"],
      healthGoals: ["Weight Loss", "High Protein"],
      mealType: "Breakfast",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAsHZp-xClz1jKZadwP7O3SgWmuGgRZ84IFw&s"
    },
    {
      id: 15,
      name: "Zucchini Noodles with Pesto",
      details: "Zucchini noodles with homemade basil pesto and cherry tomatoes.",
      calories: 250,
      protein: 8,
      carbs: 12,
      fats: 18,
      dietaryPreferences: ["Vegan", "Gluten-Free"],
      healthGoals: ["Low Carb", "Quick & Easy"],
      mealType: "Dinner",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYeGrzv2LwUVHGMSB5LrsU1Epui_F6pYJQQ&s"
    },
    {
      id: 16,
      name: "Quinoa Salad",
      details: "Quinoa with cucumber, tomatoes, feta cheese, and olive oil.",
      calories: 350,
      protein: 12,
      carbs: 40,
      fats: 12,
      dietaryPreferences: ["Vegetarian", "Gluten-Free"],
      healthGoals: ["Heart Health", "High Fiber"],
      mealType: "Lunch",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXamjVHZLq6LV2EYfs3ktRuoLIDgdTHgDIQ&s"
    },
    {
      id: 17,
      name: "Egg & Veggie Muffins",
      details: "Egg muffins with spinach, bell peppers, and onions.",
      calories: 150,
      protein: 10,
      carbs: 5,
      fats: 8,
      dietaryPreferences: ["Low-Carb", "Gluten-Free"],
      healthGoals: ["Weight Loss", "Meal Prep"],
      mealType: "Breakfast",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXJrhKSHu2P-Z9p9GZV-W0LcIeiBivlhsaw&s"
    },
    {
      id: 18,
      name: "Berry Smoothie",
      details: "Blend of mixed berries, almond milk, and chia seeds.",
      calories: 200,
      protein: 5,
      carbs: 30,
      fats: 5,
      dietaryPreferences: ["Vegan", "Gluten-Free"],
      healthGoals: ["Digestive Health", "Quick & Easy"],
      mealType: "Snack",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20ghEgtH53bQZ57WZ5thPYxDs_jtMX-Ob6g&s"
    },
    {
      id: 19,
      name: "Stuffed Bell Peppers",
      details: "Bell peppers stuffed with ground turkey, quinoa, and veggies.",
      calories: 400,
      protein: 25,
      carbs: 35,
      fats: 15,
      dietaryPreferences: ["Gluten-Free"],
      healthGoals: ["High Protein", "Meal Prep"],
      mealType: "Dinner",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfGiFAJ0MZrUMw_UYQjeir3u0Svq4QAiaIA&s"
    },
    {
      id: 20,
      name: "Chickpea Salad Sandwich",
      details: "Chickpea salad with mayo and celery on whole-grain bread.",
      calories: 350,
      protein: 12,
      carbs: 45,
      fats: 10,
      dietaryPreferences: ["Vegan"],
      healthGoals: ["Quick & Easy", "High Fiber"],
      mealType: "Lunch",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ObmTGkpnMkXqW8nGd_hfZKj8P6cwnMZX2g&s"
    },
    {
      id: 21,
      name: "Banana Oat Pancakes",
      details: "Oat-based pancakes with mashed banana and a touch of cinnamon.",
      calories: 300,
      protein: 8,
      carbs: 50,
      fats: 7,
      dietaryPreferences: ["Gluten-Free", "Vegetarian"],
      healthGoals: ["Quick & Easy", "Healthy Carbs"],
      mealType: "Breakfast",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGV-vB0ICDDx2cbG9EYc9pmDeLn2P-kkMvaQ&s"
    },
    {
      id: 22,
      name: "Chicken & Sweet Potato",
      details: "Grilled chicken with roasted sweet potatoes and green beans.",
      calories: 450,
      protein: 35,
      carbs: 40,
      fats: 10,
      dietaryPreferences: ["Gluten-Free"],
      healthGoals: ["High Protein", "Muscle Gain"],
      mealType: "Dinner",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESTMAiJfOw4tW0tp3m2luRwPTYCwYIIQMaA&s"
    },
    {
      id: 23,
      name: "Peanut Butter Apple Slices",
      details: "Apple slices topped with peanut butter and chia seeds.",
      calories: 200,
      protein: 5,
      carbs: 25,
      fats: 8,
      dietaryPreferences: ["Vegan", "Gluten-Free"],
      healthGoals: ["Quick & Easy", "Healthy Fats"],
      mealType: "Snack",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8iFyVM2APF2GD9prcH6LK1Fsc49vb71gzA&s"
    },
    {
      id: 24,
      name: "Mixed Berry Parfait",
      details: "Greek yogurt layered with mixed berries and granola.",
      calories: 250,
      protein: 12,
      carbs: 35,
      fats: 6,
      dietaryPreferences: ["Vegetarian"],
      healthGoals: ["Digestive Health", "Quick & Easy"],
      mealType: "Breakfast",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBBiaOvd7H0s1kAPxdwac2N5N6DEdONh8_g&s"
    },
    {
      id: 25,
      name: "Chia Pudding",
      details: "Chia seeds soaked in almond milk with fresh berries.",
      calories: 200,
      protein: 5,
      carbs: 30,
      fats: 8,
      dietaryPreferences: ["Vegan", "Gluten-Free"],
      healthGoals: ["Digestive Health", "Quick & Easy"],
      mealType: "Snack",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpkYGBsKytjbyXfYPf09wQr9lX1S2vWue8w&s"
    },
    {
      id: 26,
      name: "Grilled Veggie Wrap",
      details: "Wrap filled with grilled veggies and hummus.",
      calories: 350,
      protein: 10,
      carbs: 45,
      fats: 12,
      dietaryPreferences: ["Vegan"],
      healthGoals: ["High Fiber", "Quick & Easy"],
      mealType: "Lunch"
    },
    {
      id: 27,
      name: "Spaghetti Squash with Marinara",
      details: "Spaghetti squash topped with marinara sauce and fresh basil.",
      calories: 180,
      protein: 5,
      carbs: 10,
      fats: 7,
      dietaryPreferences: ["Vegan", "Low-Carb"],
      healthGoals: ["Weight Loss", "Low Fat"],
      mealType: "Dinner"
    },
    {
      id: 28,
      name: "Egg Salad",
      details: "Classic egg salad with celery and mayo.",
      calories: 250,
      protein: 15,
      carbs: 5,
      fats: 18,
      dietaryPreferences: ["Gluten-Free"],
      healthGoals: ["Quick & Easy", "High Protein"],
      mealType: "Snack"
    },
    {
      id: 29,
      name: "Stuffed Zucchini Boats",
      details: "Zucchini stuffed with ground beef, tomatoes, and cheese.",
      calories: 300,
      protein: 25,
      carbs: 10,
      fats: 15,
      dietaryPreferences: ["Low-Carb"],
      healthGoals: ["Weight Loss", "High Protein"],
      mealType: "Dinner"
    },
    {
      id: 30,
      name: "Protein Pancakes",
      details: "High-protein pancakes made with protein powder and oats.",
      calories: 350,
      protein: 25,
      carbs: 40,
      fats: 8,
      dietaryPreferences: ["Vegetarian"],
      healthGoals: ["Muscle Gain", "Quick & Easy"],
      mealType: "Breakfast"
    }
  ];
  
  
export const getAllMeal = async (req,res)=>{
    return res.status(201).json({success:true,message:"All meal fetched",data:meals})
}