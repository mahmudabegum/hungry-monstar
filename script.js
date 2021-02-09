const inputButton = document.getElementById("searchButton");
inputButton.addEventListener("click",function(){

let inputMeal = document.getElementById("inputMeal").value;
const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputMeal}`
fetch(url)
.then (response=>response.json())
.then (data=> {

    const mealsList = document.getElementById("allMeals")
    let mealsItem = "";
    if(data.meals){
    data.meals.forEach(meals => {
        mealsItem += `
            <div onclick = "showIngredient(${meals.idMeal})" class= "allItem" idMeal = "${meals.idMeal}">
             
           <div>
              <img src="${meals.strMealThumb}">
           </div>
              <div>
                <h3 class= "items"> ${meals.strMeal} </h3>
                </div>
        </div>
        
        `; 
    });
} else {
    mealsItem = "Sorry, This Item is unavailable! Please, try another One. Thank You!!"
}
    mealsList.innerHTML = mealsItem;

});

})

const showIngredient = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
      .then (response=>response.json())
      .then (data=> detailsIngredient(data.meals[0]))
      .catch (error=>showError("Sorry! No ingredient, Please-try again"));
      
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
    `;
}

const showError = error => {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = error;
}


