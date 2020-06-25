
// Example 1

// ES5
function Car(color) {
	this.color = color;
}

Car.prototype.getColor = function() {
	return this.color;
}

var myCar = new Car('red');
myCar.getColor(); // -> red


// ES6 Classes
class Car2 {
	constructor(color) {
		this.color = color;
	}
	getColor() {
		return this.color;
	}
}

var myCar2 = new Car2('blue');
myCar2.getColor(); // -> blue


// Example 2 - Simple React Component

class Simple extends React.Component {
	render() {
		return <h1>Hello, World</h1>;
	}
}
