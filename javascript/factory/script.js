// Factory function
function createCircle(radius) {
    console.log(this);
 return {
     radius,
     draw: function() {
         console.log(this);
     }
 }
}


const circle =new createCircle(1);
circle.draw();


// using constructor function

// new -> it create a empty object {} and it point to current function

function Circle() {
    console.log(this);
    this.draw = function() {
        console.log('Test');
    }
}

const cir = new Circle();
cir.draw();