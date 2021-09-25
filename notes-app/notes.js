const fs = require('fs')

// A function that gets your current notes.
const getNotes = function() {
    notes = 'Your notes...'
    return notes;
}

const addNotes = function(title, note) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            note: note
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log("Duplicate detected, please don't duplicate note titles!")
    }




}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(error) {
        return []
    }


}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
}