angular.module("myApp",[]); 
angular.module("myApp")
.controller("mainController",mainCtrl); 
mainCtrl.$inject=["recipeList"];// injecting the factory to use it. 




function mainCtrl(recipeList){
  var main=this;
main.showRecipes=recipeList.showRecipes; 
main.greeting="Match made in kitchen!";
main.AddIngredients=["Shrimp","Garlicloves","Honey","Lemon juice","Dijon mustard"]; //list you have
  // this is the data i can remove before the final presentation!!!
main.NewIngredients=function(){
main.AddIngredients.push(main.input)}

main.RemoveFromAddIngredients=function(ing){
main.AddIngredients.splice(main.AddIngredients.indexOf(ing),1)
}
main.checkIngredients=function(recipe){
return angular.equals(recipe.Ingredients,main.AddIngredients)
//main.checkIngredients=function(recipe){
//var target=recipe.ingredients.length; 
  
  //main.AddIngredients.forEach(function(ing){
  // if(recipe.ingredients.indexOf(ing)>=0){
    // target--
}

main.showRecipe=function(recipe){
  main.activeRecipe=recipe;
  $("#myModal").modal('show');}

}