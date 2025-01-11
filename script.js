let Apps = document.querySelector(".notesApp");
let newBtn = document.querySelector(".i");

newBtn.addEventListener("click", () => {
  const newNote = document.createElement("textarea");
  newNote.className = "txtArea";
  newNote.title = "Enter Anything here";
  newNote.placeholder = "Take Notes";
  Apps.appendChild(newNote);
});

newBtn.addEventListener