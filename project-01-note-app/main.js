

import yargs from "yargs";
import note from "./note.js";
import chalk from "chalk";

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: false,
            type: "string",
        },
    },
    handler(argv) {
        let add = note.addNote(argv.title, argv.body);
        if (add != null) {
            console.log(chalk.green.inverse(" New note added "));
        } else {
            console.log(chalk.red.inverse(" Note title is taken "));
        }
    },
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Removed title",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        let removed = note.deleteNote(argv.title);
        if (removed != null) {
            console.log(chalk.green.inverse(" Note removed "));
        } else {
            console.log(chalk.red.inverse(" Note does not exist "));
        }
    },
});

yargs.command({
    command: "read",
    describe: "Read the note",
    handler(argv) {
        let read = note.readNote(argv.title);
        if (read != null) {
            console.log(chalk.inverse(` Title: ${read.title} `));
            if(read.body != undefined){
                console.log(read.body);
            }
        } else {
            console.log(chalk.red.inverse(" Title does not exist "));
        }
    },
});

yargs.command({
    command: "list",
    describe: "List the note",
    handler() {
        for (let n of note.listNote()) {
            let title = chalk.green.inverse(` Title: ${n.title} `);
            let value = chalk.inverse(`  Body: ${n.body} `);
            if (n.body != undefined) {
                console.log(title, value);
            } else {
                console.log(title);
            }
        }
    },
});

yargs.demandCommand(1);
yargs.argv;
