import fs from "fs";

class Note {
    #fileName;
    #noteList;
    constructor(dataFile) {
        this.#fileName = dataFile;
        this.#noteList = this.#loadNote();
    }

    #loadNote() {
        try {
            let stream = fs.readFileSync(this.#fileName);
            let data = stream.toString();
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    #saveNote(content) {
        let data = JSON.stringify(content);
        fs.writeFileSync(this.#fileName, data);
    }

    #hasTitle(title) {
        if (this.#noteList == null) {
            return -1;
        }

        for (let i = 0; i < this.#noteList.length; i++) {
            if (this.#noteList[i].title === title) {
                return i;
            }
        }

        return -1;
    }

    addNote(title, body) {
        if (this.#hasTitle(title) < 0) {
            this.#noteList.push({ title, body });
            this.#saveNote(this.#noteList);
            return { title, body };
        }
        return null;
    }

    deleteNote(title) {
        let titleIndex = this.#hasTitle(title);
        if (titleIndex < 0) {
            return null;
        }
        let removedTitle = this.#noteList[titleIndex].title;
        let removedValue = this.#noteList[titleIndex].body;
        let removedNote = { title: removedTitle, body: removedValue };
        let newNoteList = this.#noteList.filter((note) => {
            return note.title !== title;
        });
        this.#noteList = newNoteList;
        this.#saveNote(this.#noteList);
        return removedNote;
    }

    listNote() {
        return this.#noteList;
    }

    readNote(title) {
        let titleIndex = this.#hasTitle(title);
        if(titleIndex < 0){
            return null;
        }else{
            return this.#noteList[titleIndex];
        }
    }
}

const note = new Note("data.json");

export default note;
