const fs = require('fs')
const chalk = require('chalk')

// A function that gets your current notes.
const getNotes = () => {
    notes = 'Your notes...'
    return notes;
}

const loadNotes = () => {
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

const addNote = (title, note) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            note: note
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse("Duplicate title detected, please avoid duplicates"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const cleanedNotes = notes.filter((note) => note.title !== title)

    if (cleanedNotes.length != notes.length) {
        saveNotes(cleanedNotes)
        console.log(chalk.green.inverse(title + ' removed!'))
    } else {
        console.log(chalk.red.inverse('No matching note found, notes unchanged'))
    }    
}

const listNotes = () => {
    notes = loadNotes()

    if (notes.length > 0) {
        console.log(chalk.yellow('Your Notes'))
        notes.forEach((note) => {
            console.log(note.title)
        })
    } else {
        console.log(chalk.red.inverse('You have no notes'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}