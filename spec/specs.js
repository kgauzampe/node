let checker = require('../script')

beforeEach(async function() {
    await load("Nhlaka Sola");
  }); 
  
  it('does a thing', async function() {
    const result = await fs.readFile(`visitor_${file}.json`, (err, data) => {
        if (err) throw err
        jsonData = JSON.parse(data)
    });
    expect(result).toEqual(jsonData);
  });