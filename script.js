const inputButton = document.getElementById("searchButton");
inputButton.addEventListener("click",function(){

let inputMeal = document.getElementById("inputMeal").value;
const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputMeal}`
fetch(url)
.then (response=>response.json())
.then (data=> {

    const mealsList = document.getElementById("allMeals")
    let mealsItem = "";
    data.meals.forEach(meals => {
        mealsItem += `
            <div onclick = "showIngredient(${meals.idMeal})" class= "allItem" idMeal = "${meals.idMeal}">
             
           <div>
              <img src="${meals.strMealThumb}">
           </div>
              <div>
                <h3> ${meals.strMeal} </h3>
                </div>
        </div>
        
        `; 
    });

    mealsList.innerHTML = mealsItem;

});

});

const showIngredient = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
      .then (response=>response.json())
      .then (data=> detailsIngredient(data.meals[0]));
      
}

const detailsIngredient = meals => {
    const ingredient = document.getElementById("ingredient");
    ingredient.innerHTML = `
    <img src="${meals.strMealThumb}">
    <h2>Meals Name:${meals.strMeal}</h2>
    <h3>Ingredients</h3>
    <ul>
    <li>${meals.strIngredient1}</li>
    <li>${meals.strIngredient2}</li>
    <li>${meals.strIngredient3}</li>
    <li>${meals.strIngredient4}</li>
    <li>${meals.strIngredient5}</li>
    <li>${meals.strIngredient6}</li>
    </ul>
    `
}
