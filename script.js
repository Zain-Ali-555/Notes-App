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
  newNote.style.backgroundColor = "transparent";
  Apps.appendChild(divNote);
  divNote.appendChild(newNote);

  // Icons Div
  const IconsDiv = document.createElement("div");
  IconsDiv.className = "IconsDiv";
  divNote.appendChild(IconsDiv);

  // Pin Icon
  let pinIcon = document.createElement("i");
  pinIcon.className = "pinIcon iblack ri-pushpin-2-line";
  IconsDiv.appendChild(pinIcon);

  let paintIcon = document.createElement("i");
  paintIcon.className = "paintIcon iblack ri-paint-fill";
  IconsDiv.appendChild(paintIcon);

  // more Icon
  const moreIcon = document.createElement("i");
  moreIcon.className = "moreIcon iblack ri-more-2-fill";
  IconsDiv.appendChild(moreIcon);

  // colorPLatee Opener

  divNote.addEventListener("mouseenter", () => {
    IconsDiv.style.display = "flex";
  });
  divNote.addEventListener("mouseleave", () => {
    IconsDiv.style.display = "none";
  });

  paintIcon.addEventListener("click", () => {
    const colorPlate = document.createElement("div");
    colorPlate.className = "Fcolor";
    paintIcon.appendChild(colorPlate);
    const Rcolor = document.createElement("div");
    Rcolor.className = "color Rcolor";
    const Bcolor = document.createElement("div");
    Bcolor.className = "color Bcolor";
    const Gcolor = document.createElement("div");
    Gcolor.className = "color Gcolor";
    const Ycolor = document.createElement("div");
    Ycolor.className = "color Ycolor";
    const Wcolor = document.createElement("div");
    Wcolor.className = "color Wcolor";
    const Blcolor = document.createElement("div");
    Blcolor.className = "color Blcolor";
    colorPlate.appendChild(Rcolor);
    colorPlate.appendChild(Bcolor);
    colorPlate.appendChild(Gcolor);
    colorPlate.appendChild(Ycolor);
    colorPlate.appendChild(Wcolor);
    colorPlate.appendChild(Blcolor);

    Rcolor.addEventListener("click", () => {
      divNote.style.backgroundColor = "red";
      newNote.style.placeholder = "yellow";
      newNote.style.color = "white";
    });
    Bcolor.addEventListener("click", () => {
      divNote.style.backgroundColor = "royalblue";
      newNote.style.color = "white";
    });
    Gcolor.addEventListener("click", () => {
      divNote.style.backgroundColor = "green";
      newNote.style.color = "white";
    });
    Ycolor.addEventListener("click", () => {
      divNote.style.backgroundColor = "yellow";
      newNote.style.color = "black";
    });
    Wcolor.addEventListener("click", () => {
      divNote.style.backgroundColor = "white";
      newNote.style.color = "#757575";
    });
    Blcolor.addEventListener("click", () => {
      divNote.style.backgroundColor = "black";
      newNote.style.color = "white";
    });
    let closecolorPlate = (event) => {
      if (!colorPlate.contains(event.target) && event.target !== paintIcon) {
        colorPlate.remove();
        document.removeEventListener("click", closecolorPlate);
      }
    };
    document.addEventListener("click", closecolorPlate);
  });

  pinIcon.addEventListener("click", () => {
    if (pinIcon.className == "pinIcon iblack ri-pushpin-2-fill") {
      pinIcon.className = "pinIcon iblack ri-pushpin-2-line";
    } else {
      pinIcon.className = "pinIcon iblack ri-pushpin-2-fill";
    }
  });
});
