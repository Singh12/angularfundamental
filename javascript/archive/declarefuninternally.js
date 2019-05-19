console.log('declarefuninternally');
let Circle1 = new Function('radius', `
this.radius = radius;
this.details = function() {
    console.log('Enternal function');
}
`);

// Above function is  equal to 

function Circles(radius) {
    this.radius = radius;
this.details = function() {
    console.log('Enternal fun');
}
}


let circless =new Circle1(1);

circless.details();

function Food() {
    Circles.call(this,13);
  }
console.log(new Food().details());


// Call method by value and teh reference

let valuetype =10;

function valueType(valuetype) {
    valuetype++;
    console.log(valuetype)
}


valueType(valuetype);
console.log(valuetype);


// Pass by refetrence

let passbyref = {
    value:30,
    num:20
}


function passbyReff(passbyref) {
    passbyref.value++;
    console.log(passbyref.value);
}
passbyReff(passbyref);
console.log(passbyref.value);




/*Passing function itself*/


function Mkeobject(objectifire) {
	return function(cool) {
		return objectifire+'is'+cool;
	}
}

let makes = new Mkeobject('rajnish');
let cool = makes('cool');

console.log(cool);