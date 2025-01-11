let Apps = document.querySelector(".notesApp");
let newBtn_Span = document.querySelector(".newBtn_Span");
let newBtn = document.querySelector(".newBtn_Span .newBtn");

newBtn_Span.addEventListener("click", () => {
  const divNote = document.createElement("div");
  divNote.className = "txtArea_Div";
  const newNote = document.createElement("textarea");
  newNote.className = "txtArea";
  newNote.title = "Enter Anything here";
  newNote.placeholder = "Take Notes";
  Apps.appendChild(divNote);
  divNote.appendChild(newNote);
});

newBtn_Span.addEventListener("mouseenter", () => {
  newBtn.style.color = "#e7e9bb";
  newBtn.style.backgroundColor = "transparent";
});
newBtn_Span.addEventListener("mouseleave", () => {
  newBtn.style.color = "#403b4a";
  newBtn.style.backgroundColor = "transparent";
});
