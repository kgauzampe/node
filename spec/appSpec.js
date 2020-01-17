let Visitor = require('../src/script')
let load = require('../src/load')
let fs = require('fs')
let obj = {
  fullname: "Kgaugelo Mpe",
  age: "1001",
  dateofvisit: "12/12/2020",
  timeofvisit: "10:23",
  comments: "sdcsfsdgfsrfs",
  nameofassistant: "me"
};

/*let visitor = new Visitor(
  obj.fullName,
  obj.age, 
  obj.dateofvisit,
  obj.timeofvisit,
  obj.comments,
  obj.nameofassistant)
   console.log(obj)
 Visitor.save()*/

it('checks if object is split', async function () {
  let fname = obj.fullname;
  let nameArr = fname.toLocaleLowerCase().split(' ')
  let jsonFile = `visitor_${nameArr[0]}_${nameArr[1]}.json`
  expect(fname).toBe('Kgaugelo Mpe')
  console.log(jsonFile);
})

it('should check if the file was created', async function(){
  let file = require('../src/script')
  var fs = require('fs')
  expect(file).toBeDefined();
})

//it('should replace ')