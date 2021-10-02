const chalk = require('chalk')
const { argv } = require('process')
const yargs = require('yargs')
const { removeNotes } = require('./notes.js')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.0.1')

// App Spec for notes.js:
// add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        note: {
            describe: 'The note you want to add',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Title: ' + argv.title, '\n' + 'Note: ' + argv.note)
        notes.addNote(argv.title, argv.note)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Calling removeNote()')
        notes.removeNote(argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reads a note : Use --title="yourTitle" to pick a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Reading note: ' + argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Lists available notes by title',
    handler() {
        console.log('Note1, Note2, Note3')
    }
})

yargs.parse()