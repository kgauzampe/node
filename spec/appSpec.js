let script = require('../script')
let load = require('../load')
let fs = require('fs');

beforeEach(async function() {
    await load("Nhlaka Sola");
  }); 
  
  it('it checks for the json file', async function() {
    const result = await fs.readFile(`visitor_${file}.json`, (err, data) => {
        if (err) throw err
        jsonData = JSON.parse(data)
    });
    expect(result).toEqual(jsonData);
  })

  it('it must exist', () => {
      let alice = new visitor()
      expect(Nhlaka.save).toBeDefined();
  })

  it('should be there ', () => {
      expect(Visitor.load).toBeDefined();
  })

