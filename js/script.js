// reference
var btn = document.getElementById('button');
var nameBurger = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var textPrice = document.getElementById('price');
var coupon = document.getElementById('coupon');


var couponCodes = ['12354ABCDEF', '12354ABCDEG', '12354HBCDEF', '12355ABCDEF']


//button confirm on click
btn.addEventListener('click', 
function() {
    // rispulisco il nome da eventuali spazi
    var name = nameBurger.value.trim();
    // verifico se l'utente abbia inserito il nome dell'hamburger
    // se no, appare un messaggio di errore
    if (name.length === 0) {
        //error
        console.log('Please, name your hamburger');
        alert('Please, name your hamburger');

        //se si, continuo con il programma
    } else {
        //prezzo base
        price = 50;
        // calcola prezzo in base a elementi selezionati;
        for (var i = 0; i < ingredients.length; i++) {
            var ingredient = ingredients[i]; //singolo ingrediente ad ogni ciclo
            // per ogni elemento verifico se checkato
            if (ingredient.checked){
                console.log(`${ingredient.id} ${ingredient.value}`);
                // se si, sommo il prezzo base con la somma degli ingredienti
                price += parseInt(ingredient.value)
            }
        }
        
        //Verifico se applicare sconto con coupon
        userCupoun = coupon.value.toUpperCase();
        if (couponCodes.includes(userCupoun)) {
            price -= price * 0.2;
        }

        // STAMPO prezzo
        textPrice.innerHTML = price.toFixed(2);
    }
});