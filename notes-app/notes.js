const fs = require('fs')

// A function that gets your current notes.
const getNotes = function () {
    notes = 'Your notes...'
    return notes;
}

const loadNotes = function () {
    try {
        // Read notes from file and return a parsed JS object.
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(error) {
        // Return an empty array if no notes exist.
        return []
    }


}

const addNote = function (title, note) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
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

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function (title) {
    console.log('Removing ' + title)
    const notes = loadNotes()

}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}