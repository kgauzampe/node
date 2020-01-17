let fs = require('fs');
let load = require('./load');

class Visitor{ 

    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, nameOfAssistant){
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments; 
        this.nameOfAssistant = nameOfAssistant;
    }
    async save() { 
        let query;
        try {
            await fs.writeFile(`visitor_${(this.fullName)
                .replace(' ','_')
                .toLowerCase()}.json`,
                 JSON.stringify(this, null, 4)
            );
             console.log('The data was add to file!');
             query = await fs.readdir('../node/')
            console.log(query)
           } catch (err) {
             console.log(err);
           }
 
    }
}
// let visitor = new Visitor("Kgaugelo Mpe", 26, "14/01/2020","10:30", "no comment", "Portia" );
// visitor.save();
module.exports = {
    Visitor
}

//load("Nhlaka Sola");




