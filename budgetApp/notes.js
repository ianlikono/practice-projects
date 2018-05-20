//data encapsulation => allows us to hide the implementation details of a specific module from the outside scope. 

//seperations of concerns => Each part of the app does one thing independently

var budgetController = (function() {
	var x = 23;
	var add = function(a) {
		return x + a;
	}
	return {
		publicTest: function(b) {
			return add(b);
		}
	}
})();

var UIController = (function() {

})();

var controller = (function(budgetCtrl, UICtrl) {
	var z = budgetCtrl.publicTest(5)
	return {
		anotherPublic: function() {
			console.log(z);
		}
	}
})(budgetController, UIController);

