export const num_6 = randomNumber(111111,999999)
export const num_2 = randomNumber(1,30)
//Generates a random number
export function randomNumber(min, max) {
    var random = Math.round(Math.random() * (max - min + 1)) + min
    return random
}

/*
(c) by Thomas Konings
Random Name Generator for Javascript


function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

export function generateFullName() {
	var name1 = ["Emma", "Olivia", "Isabella", "Sophia", "Rebeka", "Niklaus", "Elijah", "Marcellus", "Oliver", "Bruce"];

	var name2 = ["Wayne", "Mikaelson", "Queen", "Brown", "King"];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
	return name;

}

export function generateFirstName() {
	var name1 = ["Emma", "Olivia", "Isabella", "Sophia", "Rebeka", "Niklaus", "Elijah", "Marcellus", "Oliver", "Bruce"];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]);
	return name;

}

export function generateLastName() {
    var name2 = ["Wayne", "Mikaelson", "Queen", "Brown", "King"];

	var name = capFirst(name2[getRandomInt(0, name2.length + 1)]);
	return name;

}
*/