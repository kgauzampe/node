let fs = require('fs');


class Visitor{ 

    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, nameOfAssistant){
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments; 
        this.nameOfAssistant = nameOfAssistant;
    } 

    async  save() { 
        let query;
        let name = this.fullName.replace(' ','_').toLowerCase()
        try {
            await fs.writeFile(`visitor_${(name)}.json`,
                 JSON.stringify(this, null, 4)
            );
             console.log('The data was add to file!');
             query = await fs.readdir('../node/')
            console.log(query)
           } catch (err) {
             throw err;
           }
 
    }
}
async function load(x) { 
    let jsonData = {};
    let file = x.toLowerCase().replace(' ','_');
    await fs.readFile(`visitor_${file}.json`, (err, data) => {
        if (err) throw err

        jsonData = JSON.parse(data);
        console.log(jsonData);   
    }) 

}


module.exports = {
    Visitor,
    load
}





