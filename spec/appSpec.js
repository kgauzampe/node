let Visitor = require('../src/script')
let load = require('../src/load')
let obj = {fullname : "Kgaugelo Mpe",
           age : "1000",
           dateofvisit : "12/12/2020",
           timeofvisit : "10:23",
           comments : "sdcsfsdgfsrfs",
           nameofassistant : "me"
          };

/*let visitor = new Visitor(
  obj.fullName,
  obj.age, 
  obj.dateofvisit,
  obj.timeofvisit,
  obj.comments,
  obj.nameofassistant)*/
  // console.log(obj)
// Visitor.save()
  
  it('it checks for the json file', async function() {
    let fname = obj.fullname;
    let nameArr = fname.toLocaleLowerCase().split(' ')

    let jsonFile = `visitor_${nameArr[0]}_${nameArr[1]}.json`

    console.log(jsonFile);
  })

 /* it('it must exist', () => {
      let alice = new script()
      expect(Nhlaka.save).toBeUndefined(); 
  })

  it('should be there ', () => {
      expect(Visitor.load).toBeUndefined();
  })*/
console.log('stuff');