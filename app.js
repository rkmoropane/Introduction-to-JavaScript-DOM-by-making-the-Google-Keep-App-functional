class Note {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
}

class App {
  constructor() {
    this.notes = [];

    this.$activeForm = document.querySelector(".active-form"); // use the `querySelector` to access the specific element by it's class 
    // this.$activeForm.style.display = "block";
    // console.log(this.$activeForm)
    this.$inactiveForm =document.querySelector(".inactive-form");
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    this.$notes = document.querySelector(".notes");

    this.addEventListeners();
  }

  // two paramenters - type of event, and action you want to happen as soon you pass through this 
  addEventListeners(){
    document.body.addEventListener("click", (event) => {
        // console.log("CLICKED");
        this.handleFormClick(event);
    }) 
  }

  handleFormClick(event) {
    //   console.log("Acitve form is clicked on", this.$activeForm.contains(event.target));
    //   console.log("Inacitve form is clicked on", this.$inactiveForm.contains(event.target));
    const isActiveClickedOn = this.$activeForm.contains(event.target);
    const isInactiveClickedOn = this.$inactiveForm.contains(event.target);

    // Access the input field values
    const title = this.$noteTitle.value;
    const text = this.$noteText.value;
    // console.log("Note Title:", title);
    // console.log("Note Text:", text);

    if (isInactiveClickedOn) {
      // console.log("Clicked inside of the Inactive form!");
      this.openActiveForm();
    } 
    else if (!isActiveClickedOn && !isInactiveClickedOn) {
      // console.log("Clicked outside of the Inactive form!");
      this.addNote({ title, text });
      this.closeActiveForm();
    }
  }

  openActiveForm() {
    this.$inactiveForm.style.display = "none";
    this.$activeForm.style.display = "block";
    this.$noteText.focus();
  }
  closeActiveForm() {
    this.$inactiveForm.style.display = "block";
    this.$activeForm.style.display = "none";
    this.$noteTitle.value = "";
    this.$noteText.value = "";
  }

  addNote({ title, text }) {
    // Access the cuids
    // console.log("CUID:", cuid());
    if (title !== "" || text !== "") {
      const newNote = new Note(cuid(), title, text)
      this.notes = [...this.notes, newNote];
      this.displayNotes();
    }
  }

  editNote(id, { title, text }) {
    this.notes = this.notes.map((note) => {
      if (note.id == id) {
        note.title = title;
        note.text = text;
      }
      return note;
    });
  }

  deleteNote(id) {
    this.notes = this.notes.filter(note => note.id !== id);
     
  }

  // displayNotes () {
  //   // this.notes.map(note => {
  //   //   console.log(`
  //   //     ID: ${note.id}
  //   //     Title: ${note.title}
  //   //     Text: ${note.text}
  //   //     `)
  //   // })
  //   this.$notes.innerHTML = this.notes.map(
  //     (note) =>
  //     `
  //       ID: ${note.id}
  //       <h1>Title: ${note.title}</h1>
  //       Text: ${note.text}
  //     `
  //   );
  // }
  displayNotes() {
    this.$notes.innerHTML = this.notes.map(
      (note) =>
        `
        ID: ${note.id}
        <h1>Title: ${note.title}</h1>
        Text: ${note.text}
        `
    );
  }
}


const app = new App();
