const fs = require('fs')
const chalk = require('chalk')

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
        console.log("Duplicate title detected, please avoid duplicates")
    }


}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function (title) {
    const notes = loadNotes()
    const cleanedNotes = notes.filter(function (note) {
        return note.title !== title
    })

    if (cleanedNotes.length != notes.length) {
        saveNotes(cleanedNotes)
        console.log(chalk.green.inverse(title + ' removed!'))
    } else {
        console.log(chalk.red.inverse('No matching note found, notes unchanged'))
    }
    



}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}