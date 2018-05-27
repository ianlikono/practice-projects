//maps

const question = new Map();
question.set('question', 'what is the official name of the latest major javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong, Please Try again!');

question.get('question') 

question.delete(4);

// question.clear(); => clear everything

// question.forEach((value, key) => console.log(`This is ${key}, and its set to ${value}`));

// for (let [key, value] of question.entries()) {
// 	if (typeof(key) === 'number') {
// 		console.log(`Answer ${key} : ${value}`);
// 	}
// }

// Advantages of using maps
	// 1) Any data type can be used as keys
	// 2) they are iterable making it easy to loop through them
	// 3)Easy to get size of a map using the size property
	// 4)Easier to add or remove data on a map


// classes
// ES5
// var Person5 = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// }	

// Person5.prototype.calculateAge = function() {
// 	var age = new Date().getFulYear - this.yearOfBirth;
// 	console.log(age);
// }

// var john5 = new Person5('John', 1990, 'teacher');

// // ES6

// class Person6 {
// 	constructor (name,yearOfBirth, job) {
// 		this.name= name;
// 		this.yearOfBirth = yearOfBirth;
// 		this.job = job;
// 	}

// 	calculateAge() {
// 		var age = new Date().getFulYear - this.yearOfBirth;
// 		console.log(age);
// 	}
// 	static greeting() {
// 		console.log('Hey There!');
// 	}
// }

// const john6 = new Person6('John', 1990, 'teacher');

// Person6.greeting();

// Classes And Subclasses

var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear - this.yearOfBirth;
	console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
	Person5.call(this, name, yearOfBirth, job)
	this.olympicGames = olympicGames;
	this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);