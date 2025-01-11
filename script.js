let Apps = document.querySelector(".notesApp");
let newBtn_Span = document.querySelector(".newBtn_Span");
let newBtn = document.querySelector(".newBtn_Span .newBtn");
let divNote = document.createElement("div");
let paintIcon = document.createElement("i");

newBtn_Span.addEventListener("mouseenter", () => {
  newBtn.style.color = "#e7e9bb";
  newBtn.style.backgroundColor = "transparent";
});

newBtn_Span.addEventListener("mouseleave", () => {
  newBtn.style.color = "#403b4a";
  newBtn.style.backgroundColor = "transparent";
});

newBtn_Span.addEventListener("click", () => {
  let divNote = document.createElement("div");
  divNote.className = "txtArea_Div";
  const newNote = document.createElement("textarea");
  newNote.className = "txtArea";
  newNote.title = "Open Note";
  newNote.placeholder = "Take Notes";
  Apps.appendChild(divNote);
  divNote.appendChild(newNote);

  // Icons Div
  const IconsDiv = document.createElement("div");
  IconsDiv.className = "IconsDiv";
  divNote.appendChild(IconsDiv);

  // paint Icon
  const paintIcon = document.createElement("i");
  paintIcon.className = "paintIcon iblack ri-paint-fill";
  IconsDiv.appendChild(paintIcon);

  // more Icon
  const moreIcon = document.createElement("i");
  moreIcon.className = "moreIcon iblack ri-more-2-fill";
  IconsDiv.appendChild(moreIcon);
});

// colorPLatee Opener
