const { O_NOATIME } = require('constants')
const fs = require('fs')
const chalk = require('chalk')

const addNotes = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title==title
    })

    if(duplicateNotes == 0 ){
        console.log(notes)
        notes.push({
            "title" : title,
            "body" :  body
        })
        saveNote(notes);
    }else{
        console.log("Note title taken!");
    }
}
const saveNote = function(notes){
    fs.writeFileSync('./notes.json',JSON.stringify(notes))
}



const loadNotes =()=>{
    try {
        const bufferdata = fs.readFileSync('./notes.json')
        const data = bufferdata.toString()
        return JSON.parse(data)
    } catch (error) {
        console.log(error)
        return []
    }
}

const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((n)=> n.title==title)
    if(note)
    {
        console.log(note.title+' : '+note.body)

    }else
    {
        console.log(chalk.red.inverse('not found'));
    }
}
const removeNote = function(title){
    const notes = loadNotes()
    const sortNote = notes.filter((note)=>{
            return note.title!=title          
    })
    if(notes.length == sortNote.length){
        console.log(chalk.red.inverse('No note found!!'));
        
    }else{
        console.log(chalk.green.inverse('Note removed!'));
        saveNote(sortNote)
    }
}

const testFilter = function(){
    let cities = [
        {name: 'Los Angeles', population: 3792621},
        {name: 'New York', population: 8175133},
        {name: 'Chicago', population: 2695598},
        {name: 'Houston', population: 2099451},
        {name: 'Philadelphia', population: 1526006}
    ];
    let bigcities = [];
    // for(let i=0 ; i< cities.length;i++){
    //     if(cities[i].population>=3000000)
    //     {
    //         //bigcities.push(cities[i]);
    //         bigcities[i]=cities[i];
    //     }
    // }
    bigcities = cities.filter((city)=>{
            return city.population>=3000000;
    })
    console.log('---->',bigcities.length);
}
module.exports = {
    testFilter : testFilter(),
    addNote : addNotes,
    removeNote : removeNote,
    readNote : readNote
}
