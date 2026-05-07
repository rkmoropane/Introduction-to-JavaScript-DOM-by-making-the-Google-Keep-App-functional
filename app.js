class Note {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
}

class App {
  constructor() {
    // localStorage.setItem("test", JSON.stringify(["123"])); // Access the local storage under application tab in the dev tools to see the key value pair
    // console.log(JSON.parse(localStorage.getItem("test"))); // Access the value of the key "test" from local storage and parse it back to an array 
    // this.notes = [new Note("abc1", "test title", "test text")];
    this.notes = JSON.parse(localStorage.getItem("notes")) || []; // Access the notes from local storage and parse it back to an array of objects, if there is no notes in local storage, then set it to an empty array


    this.selectedNoteId = "";
    this.miniSidebar = true;
    this.$activeForm = document.querySelector(".active-form"); // use the `querySelector` to access the specific element by it's class 
    // this.$activeForm.style.display = "block";
    // console.log(this.$activeForm)
    this.$inactiveForm = document.querySelector(".inactive-form");
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    this.$notes = document.querySelector(".notes");
    this.$form = document.querySelector("#form");
    this.$modal = document.querySelector(".modal");
    this.$modalForm = document.querySelector("#modal-form");
    this.$modalTitle = document.querySelector("#modal-title");
    this.$modalText = document.querySelector("#modal-text");
    this.$closeModalForm = document.querySelector("#modal-btn");
    this.$sideBar = document.querySelector(".sidebar");
    this.$sideBarActive = document.querySelector(".active-item");

    this.addEventListeners();
    this.displayNotes();
  }

  // two paramenters - type of event, and action you want to happen as soon you pass through this 
  addEventListeners(){
    document.body.addEventListener("click", (event) => {
        // console.log("CLICKED");
        this.handleFormClick(event);
        this.closeModal(event);
        this.openModal(event);
        this.handleAchiving(event);
    });

    this.$form.addEventListener("submit", (event) => {
        event.preventDefault();
        // Access the input field values
        const title = this.$noteTitle.value;
        const text = this.$noteText.value;
        this.addNote({ title, text });
        this.closeActiveForm();
    });
    this.$modalForm.addEventListener("submit", (event) => {
        event.preventDefault();
    });

    this.$sideBar.addEventListener("mouseover", (event) => {
      // console.log("Mouse is over the sidebar");
      this.handleToggleSidebar();
    });
    this.$sideBar.addEventListener("mouseout", (event) => {
      // console.log("Mouse is out the sidebar");
      this.handleToggleSidebar();
    });

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

  openModal(event) {
    const $selectedNote = event.target.closest(".note");
    const $archivedNote = event.target.closest(".archive");
    // console.log("Archived:", $archivedNote);
    if ($selectedNote && !$archivedNote) {
      this.selectedNoteId = $selectedNote.id;
      this.$modalTitle.value = $selectedNote.children[1].innerHTML;
      this.$modalText.value = $selectedNote.children[2].innerHTML;
      this.$modal.classList.add("open-modal");
    } else {
      return;
    }
  }
  closeModal(event) {
    const isModalFormClickedOn = this.$modalForm.contains(event.target);
    const isCloseModalBtnClickedOn = this.$closeModalForm.contains(event.target);
    // console.log("Modal Btn is clicked on: ", isCloseModalBtnClickedOn);
    if ((!isModalFormClickedOn || isCloseModalBtnClickedOn) && this.$modal.classList.contains("open-modal")) {
      // console.log("Selected Note ID:", this.selectedNoteId);
      this.editNote(this.selectedNoteId, { title: this.$modalTitle.value, text: this.$modalText.value });
      this.$modal.classList.remove("open-modal");
    }
  }

  handleAchiving(event) {
    const $selectedNote = event.target.closest(".note");
    const $archivedNote = event.target.closest(".archive");
    if ($selectedNote && $archivedNote) {
      // Handle archiving logic here
      // console.log("Archiving note with ID:", $archivedNote.id);
      this.selectedNoteId = $selectedNote.id; 
      this.deleteNote(this.selectedNoteId);
    } else {
      return;
    }
  }

  addNote({ title, text }) {
    // Access the cuids
    // console.log("CUID:", cuid());
    if (title !== "" || text !== "") {
      const newNote = new Note(cuid(), title, text)
      this.notes = [...this.notes, newNote];
      this.render();
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
    this.render();
  }

  deleteNote(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.render();
     
  }

  handleMouseOverNote(element) {
    const $note = document.querySelector("#"+element.id);
    const $checkNote = $note.querySelector(".check-circle");
    const $noteFooter = $note.querySelector(".note-footer");

    $checkNote.style.visibility = "visible";
    $noteFooter.style.visibility = "visible";

  }
  handleMouseOutNote(element) {
    const $note = document.querySelector("#"+element.id);
    const $checkNote = $note.querySelector(".check-circle");
    const $noteFooter = $note.querySelector(".note-footer");

    $checkNote.style.visibility = "hidden";
    $noteFooter.style.visibility = "hidden";
  }

  handleToggleSidebar() {
    if (this.miniSidebar) {
      this.$sideBar.style.width = "250px";
      this.$sideBar.classList.add("sidebar-hover");
      this.$sideBarActive.classList.add("sidebar-active-item");
      this.miniSidebar = false;

    } else {
      this.$sideBar.style.width = "80px";
      this.$sideBar.classList.remove("sidebar-hover");
      this.$sideBarActive.classList.remove("sidebar-active-item");
      this.miniSidebar = true;

    }
  }

  saveNotes() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  render() {
    this.saveNotes();
    this.displayNotes();
  }

  displayNotes () {
    this.notes.map(note => {
      // console.log(`
      //   ID: ${note.id}
      //   Title: ${note.title}
      //   Text: ${note.text}
      //   `)
    });
    this.$notes.innerHTML = this.notes.map(
      (note) =>
      `
        <div class="note" id=${note.id} onmouseover="app.handleMouseOverNote(this)" onmouseout="app.handleMouseOutNote(this)">
            <span class="material-icons check-circle">check_circle</span>
            <div class="title">${note.title}</div>
            <div class="text">${note.text}</div>
            <div class="note-footer">
                <div class="tooltip">
                    <span class="material-symbols-outlined hover small-icon">add_alert</span>
                    <span class="tooltip-text">Remind me</span>
                </div>
                <div class="tooltip">
                    <span class="material-symbols-outlined hover small-icon">person_add</span>
                    <span class="tooltip-text">Collaborator</span>
                </div>
                <div class="tooltip">
                    <span class="material-symbols-outlined hover small-icon">palette</span>
                    <span class="tooltip-text">Change Color</span>
                </div>
                <div class="tooltip">
                    <span class="material-symbols-outlined hover small-icon">image</span>
                    <span class="tooltip-text">Add Image</span>
                </div>
                <div class="tooltip archive">
                    <span class="material-symbols-outlined hover small-icon">archive</span>
                    <span class="tooltip-text">Archive</span>
                </div>
                <div class="tooltip">
                    <span class="material-symbols-outlined hover small-icon">more_vert</span>
                    <span class="tooltip-text">More</span>
                </div>
            </div>
        </div>

      `
    ).join("");
  }
}


const app = new App();
