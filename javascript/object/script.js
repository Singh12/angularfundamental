let student = {
    name: 'Rajnish',
    lastname: 'Singh',
    age: 27,
    callMethod: function() {
        console.log(this);
    }
}

student.callMethod();