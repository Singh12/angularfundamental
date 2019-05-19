// Create object
let employee = {
    salary:2000,
    percentage: 30,
    calc: function() {
        console.log(this.salary*this.percentage);
    }
}
employee.calc();



// Factory function 

function circle(radius) {
// return objcet
    return {
        radius,
        draw: function() {
            console.log('draw factory function');
        }
    }
}

let cir = circle(1);
cir.draw();


// COnstructor Function

function Circledraw(radius) {
 let name ="raj"; // this will have private mathod
 // calling function
 this.detail = 'singh';
   this.radius = radius;
   this.draw = function() {
      // console.log(this.details);
       console.log('Draw using constructor');
   }
}

let constCircle = new Circledraw(1);

constCircle.location = 4;
// new key word create empty object and paas the method

// Apply for in loop 

for(let key in constCircle) {
   // console.log(key , constCircle[key]);
    // TO get only property
    // console.log(typeof(constCircle[key]));
    if(typeof(constCircle[key]) != 'function') {
        console.log(key , constCircle[key]);
    }

}

// Apply Object inbuild method to get property of an object

let objectKey = Object.keys(constCircle);
console.log(objectKey);

// Use if condition to check if the radius is in circle or not

if('radius' in constCircle)
console.log('Circle is available');
// Same code like above new will like {}
// Circledraw.call({},1);

// Circledraw.apply({}, [1,2])

constCircle.draw();


// Apply clouser to a function

function Student(id) {
this.id = id;


let getDetails = function() {
    let name = "Rajnish";
    console.log(name);
}
this.getNew = function() {
    getDetails();
}
}

let stud = new Student(1);

stud.getNew();


// Geter and setter method in javascript

function Employee(empid) {
   this.employeeid = empid;
   let salary = {
       sal:30000,
       name:'singh'
   }
   this.getSalaryDetails = () => {
      return salary;
   }
   Object.defineProperty(this, 'salary', {
       get: function() {
           return salary;
       },
       set: function(value) {
           console.log(value);
         salary=value;
    }
   })
}

let employees = new Employee(12);
let newSala = employees.getSalaryDetails();
Employee.salary = {
    sal:40000,
    name:'singh'
}
console.log(newSala.sal);

// To call Private member property 

class Person {
    constructor(name) {
      this.name = name;
    }
    
    walk() {
      console.log(this.name + ' is walking.');
    }
  }
           
  let bob = new Person('Bob');
  console.log(bob.walk());  // Outputs 'Bob is walking'
