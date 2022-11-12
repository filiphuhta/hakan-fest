
async function fetchCocktail() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const cocktail = await response.json();
  return cocktail;
}


async function addCocktail() {
  let dataPromise = fetchCocktail();
  let cocktail;

  await dataPromise.then(d => {
    cocktail = d.drinks[0];
  });

  console.log(cocktail);
  let div = document.getElementById("cocktail");
  div.innerHTML = '<div class="drink-container">' +
    '  <h2 class="drink-heading">Dagens drink</h2>' +
    `<h3> ${cocktail.strDrink}</h3> </br>` +
    `<img src="${cocktail.strDrinkThumb}" style="width: 300px; height: 300px;" />` +
    '<div class="drink-ingredients">' +
    '<h3>Föredraget Glas:</h3> </br> ' +
    `<p> ${cocktail.strGlass}</p>` +
    '<h3>Ingredienser:</h3> </br> ' +
    `<p>${cocktail.strIngredient1}, ` +
    `${cocktail.strIngredient2}, ` +
    `${cocktail.strIngredient3}, ` +
    `${cocktail.strIngredient4}, ` +
    `${cocktail.strIngredient5}, ` +
    `${cocktail.strIngredient6}, ` +
    `${cocktail.strIngredient7}, ` +
    `${cocktail.strIngredient8}, ` +
    `${cocktail.strIngredient9}, ` +
    `${cocktail.strIngredient10}, ` +
    `${cocktail.strIngredient11}, ` +
    `${cocktail.strIngredient12}, ` +
    `${cocktail.strIngredient13}</p>` +
    '</div>' +
    `<h3>Gör såhär</h3>` +
    `<p>${cocktail.strInstructions}</p>` +
    '</div>';
}

addCocktail();

