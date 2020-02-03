let {Visitor} = require('../src/script')
let load = require('../src/load')
let fs = require('fs')
let obj = {
  fullName: "Kgaugelo Mpe",
  age: "1001", 
  dateOfVisit: "12/12/2020",
  timeOfVisit: "10:23",
  comments: "sdcsfsdgfsrfs",
  nameOfAssistant: "me"
};

let visitor = new Visitor(
  obj.fullName,
  obj.age, 
  obj.dateOfVisit,
  obj.timeOfVisit,
  obj.comments,
  obj.nameOfAssistant) 

let path = `${__dirname}/file`

  try{
    visitor.save(path)
  }catch(err){
    throw err;
  }
 

it('testing objects', function  () {
  let porche = new Visitor(obj.fullName,obj.age,obj.dateOfVisit,obj.timeOfVisit,
    obj.comments, obj.nameOfAssistant)
expect(porche.toString()).toBe(obj.toString()) 


})


it('checks if object is split', async function () {
  let fname = obj.fullName;
  let nameArr = fname.toLowerCase().split(' ')
  let jsonFile = `visitor_${nameArr[0]}_${nameArr[1]}.json`
  expect(fname).toBe('Kgaugelo Mpe')
  console.log(jsonFile);
})

it('should check if the file was created', async function(){
  let file = require('../src/script')
  var fs = require('fs')
  expect(file).toBeDefined();
})

