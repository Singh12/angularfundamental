let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];




let result=arr.sort().reduce((acc, cur) => {
    // let lengths = acc.length;
    let arrs=[];
   lengths= acc.length
    if(lengths === 0 || acc[lengths-1] != cur) {
        acc.push(cur);
    }
    return acc;
},[]);

console.log(result);


let arr2 = [{a:10,b:20},{a:10,b:20}];


let reducer = (key,curr) => {
    let obj = {};
     obj[key.a] = key.b;
     return obj;
}

console.log(arr2.reduce(reducer));
var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      console.log(acc[key]);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  
  var groupedPeople = groupBy(people, 'age');
  console.log(groupedPeople);


  var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];

 const rs= friends.reduce((accumulator,current) => {
      
    return [...accumulator,...current.books];
  },['Alphabet']);
  console.log(rs);
  // allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]