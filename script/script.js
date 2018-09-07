/*//////////////////////////////
|                              |
|  Voornaam: Vincent           |
|  Achternaam: Goedhart        |
|                              |
|  Opdracht: Pizza calculator  |
|                              | 
//////////////////////////////*/

function onClickSubmit(){ // Als je op submit klikt

	const priceSmall = 6.49; // Prijs van de 'Small Pizza'
	const priceMedium = 8.49; // Prijs van de 'Medium Pizza'
	const priceLarge = 11.00; // Prijs van de 'Large Pizza'

	var amountSmall = parseInt(document.getElementById("amountSmall").value); // Hoeveelheid 'Small Pizza'
	var amountMedium = parseInt(document.getElementById("amountMedium").value); // Hoeveelheid 'Medium Pizza'
	var amountLarge = parseInt(document.getElementById("amountLarge").value); // Hoeveelheid 'Large Pizza'

	const boolSmall = document.getElementById("smallPizza").checked; // Checkbox statement 'Small Pizza'
	const boolMedium = document.getElementById("mediumPizza").checked; // Checkbox statement 'Medium Pizza'
	const boolLarge = document.getElementById("largePizza").checked; // Checkbox statement 'Large Pizza'

	var amountTotal = 0; // Hoeveelheid pizza's in totaal

	if (amountSmall < 0 || amountMedium < 0 || amountLarge < 0){ // Als de hoeveelheid onder de nul zit

		document.getElementById("finalPrice").innerHTML = "<strong>Please</strong> - change your negative pizza amount to a positive amount!" // Stuur een bericht
		return; // Stopt de code
	}

	if (boolSmall == true && !isNaN(amountSmall)){ // Als de checkbox gechecked is en als hij niet NaN is
		amountTotal += amountSmall*priceSmall; // Voeg de hoeveelheid * de prijs toe
	}

	if (boolMedium == true && !isNaN(amountMedium)){ // Als de checkbox gechecked is en als hij niet NaN is
		amountTotal += amountMedium*priceMedium; // Voeg de hoeveelheid * de prijs toe
	}

	if (boolLarge == true && !isNaN(amountLarge)){ // Als de checkbox gechecked is en als hij niet NaN is
		amountTotal += amountLarge*priceLarge; // Voeg de hoeveelheid * de prijs toe
	}

	if (isNaN(amountSmall)){ // Check of de hoeveelheid van de 'Pizza Small' NaN is
		amountSmall = 0; // Zet de hoeveelheid van 'Pizza Small' 
	}if (isNaN(amountMedium)) { // Check of de hoeveelheid van de 'Pizza Medium' NaN is 
		amountMedium = 0; // Zet de hoeveelheid van 'Pizza Medium' 0
	}if (isNaN(amountLarge)){ // Check of de hoeveelheid van de 'Pizza Large' NaN is
		amountLarge = 0; // Zet de hoeveelheid van 'Pizza Large' 0
	}
	var smallTotal = priceSmall * amountSmall; // Berekent de total price uit voor de 'Pizza Small'
	var mediumTotal = priceMedium * amountMedium; // Berekent de total price uit voor de 'Pizza Small'
	var largeTotal = priceLarge * amountLarge;// Berekent de total price uit voor de 'Pizza Small'

	document.getElementById("finalPrice").innerHTML = "You ordered: " + amountSmall + " Small pizza(s) <strong>&#8364;" + smallTotal + "</strong>, " +  amountMedium + " Medium pizza(s) <strong>&#8364;" + mediumTotal + "</strong>, " + amountLarge + " Large pizza(s) <strong>&#8364;" + largeTotal + "</strong><br>" 
	+ "<h4>Total ordered pizza(s): " + parseInt(amountSmall+amountMedium+amountLarge) + "</h4>" 
	+ "<h1>Total price: <strong>&#8364;" + amountTotal.toFixed(2) + "</h1>"; // Stuur een bericht en rond af op 2 decimalen
}