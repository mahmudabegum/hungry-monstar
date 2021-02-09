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
            <div idMeal = "${meals.idMeal}">
             
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
