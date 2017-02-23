angular.module("myApp")
.factory("recipeList",recipeFact)
function recipeFact(){
  var recipes=[
    { 
      Name: "Cheesy Macaroni Chicken Bake",
      Ingredients: ["chicken","cheddar cheese","sour cream", "salt/pepper","panko","boiled macaroni"],
      Type: "Dinner", 
      Directions:["1.Preheat over to 400F","2.add your chicken, salt/pepper, sour cream and cheddar cheese to your boiled macaroni pot. Mix well.",
                  "3.Dish into a greased 9×13 pan.","4.Sprinkle with additional cheddar cheese and sprinkle with Panko.","6. Bake at 400 for 10-12 minutes.",
                  "7.Broil for an additional 2-3 minutes to brown panko.","Serve warm"], 
             
      Ready: "15mins"},
    
    {
       Name:"Cinnamon French Toast Stick",
       Ingredients:["Greek yogurt","butter", "ground cinnamon","day-old bread","pancake syrup" ],
       Type:"Breakfast",
       Directions:["1.BEAT eggs, 1/2 cup yogurt and cinnamon in shallow dish until blended. CUT each bread slice into 3 to 4 wide sticks. SOAK bread sticks in egg mixture, turning once.",
                  "2.COAT large nonstick skillet with butter; HEAT over medium heat until hot. PLACE half the bread sticks in skillet. COOK over medium to medium-low heat until golden brown and no visible liquid egg remains, 1 to 2 minutes per side."
                  ],
        Ready:"5mins"},
      
      {
        Name:"Simple Shrimp Glaze",
        Ingredients:["Shrimp","Garlicloves","Honey","Lemon juice","Dijon mustard"], 
        Type:"Lunch",
        Directions:["1.Combine all ingredients except shrimp, and stir with a whisk." ,
                    "2.Thread shrimp onto skewers. Brush one side of shrimp with glaze. Grill for one to two minutes.",
                    "3.Turn shrimp, brush with glaze, and cook two minutes or until shrimp are opaque."]

      }
      
      ]

      return{
        showRecipes:recipes,
        recipeMatch:[]
      }
}