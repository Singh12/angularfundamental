

// new -> it create a empty object {} and it point to current function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Test');
    }
}

const cir = new Circle(1);

// Similar call

Circle.call({},1);
cir.draw();

// we can create a function 

const CreateCir = new Function('radius',` this.radius = radius;
this.draw = function() {
    this.radius = radius;
    console.log('Test');
}`);

const c = new CreateCir(1);
c.draw();
console.log('Hi')