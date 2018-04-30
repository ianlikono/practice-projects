/*
primitives => Numbers, Strings, Booleans, Undefined and Null
Objects(everything else) => Arrays, Functions, Objects, Dates, Wrappers for numbers, Strings, Booleans
Constructor => class
Every javascript object has a prototype property which makes inheritance possible.
The prototype property of an object is where we put methods and properties we want other objects to inherit.
The Constructor's prototype is not the prototype of the constructor itself, its the prototype of all the instances that were created through it.
When a certain method (or property) is called, the search starts in the object itself, and if not found moves to the object prototype this continues untill the method is found => prototype chain
*/
//Function Constructor

var ian = {
	name: 'ian',
	yearOfBirth: 1990,
	job: 'teacher'
}

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

person.prototype.calculateAge = function() {
		console.log(2016-this.yearOfBirth);
	}

//instantiation
var john = new Person('John', 1990, 'teacher');

john.calculateAge();

//object.create
var personProto = {
	calculateAge: function() {2016 - this.yearOfBirth}
}
var john = Object.create(personProto);
john.name ='john';
john.yearOfBirth = 1990
john.job = 'teacher'

var jane = Object.create(personProto, {
	name: { value: 'jane'},
	yearOfBirth: { value: 1963},
	job: {value: 'designer'}
})

//primitives vs objects
	//object variables are referals while primitive variables are contained in the object.


//primitives
	var a = 23;
	var b = a;
	a=46;

	console.log(a) //46
	console.log(b) //23

//objects
	var obj1 = {
		name: 'john',
		age = 26
	};

	var obj2 = obj1;
	obj1.age = 30;
	console.log(obj1.age); //30
	console.log(obj2.age); //30

	//Functions
		//when a primitive is passed to an object a copy is created
	var age = 27;
	var obj = {
		name: 'Jonas',
		city: 'Lisbon'
	}

	function change(a,b) {
		a = 30;
		b.city = 'Nairobi';
	}

	change(age, obj);

	console.log(age); //27
	console.log(obj.city); //Nairobi

	// closures => an inner function has always access to the variables and parameters of its outer function even after the outer function has returned.


//bind call appy

var john = {
	name: 'john',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good' + timeOfDay + ', Ladies and gentlemen! I\'m a ' + this.name + 'and I\'m a ' + this.job + ' and I'\ 'm ' + this.age + ' years old' )
		}
	}
}
















