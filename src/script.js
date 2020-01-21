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
let visitor = new Visitor('Kgauza Mpe',30, '11/12/2013', '12:31', 'no comment','Mpumelelo' )
 visitor.save();
module.exports = {
    Visitor
}

//load("Nhlaka Sola");




