let Apps = document.querySelector(".notesApp");
let newBtn_Span = document.querySelector(".newBtn_Span");
let newBtn = document.querySelector(".newBtn_Span .newBtn");
let divNote = document.createElement("div");
let paintIcon = document.createElement("i");

let textarea = document.querySelectorAll("txtArea_Div");

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

  // Paint Icon
  let paintIcon = document.createElement("i");
  paintIcon.className = "paintIcon iblack ri-paint-fill";
  IconsDiv.appendChild(paintIcon);

  // delete Icon
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "deleteIcon iblack ri-delete-bin-5-fill";
  IconsDiv.appendChild(deleteIcon);

  // unlock/lock Icon
  let ulIcon = document.createElement("i");
  ulIcon.className = "ulIcon iblack ri-lock-unlock-fill";
  IconsDiv.appendChild(ulIcon);

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
      divNote.style.order = "0";
    } else {
      pinIcon.className = "pinIcon iblack ri-pushpin-2-fill";
      divNote.style.order = "-1";
    }
  });

  deleteIcon.addEventListener("click", (event) => {
    let deleteNotification = document.createElement("div");
    deleteNotification.className = "Confirm_Note";
    deleteNotification.innerHTML = `<h5 > Do you really want to <span style="color: red;"> delete </span>this note?</h5>
        <div class="btns_Div">
          <button class="cncle btn">Cancel</button>
          <button class="del btn">Delete</button>
        </div>`;
    divNote.appendChild(deleteNotification);

    deleteNotification.querySelector(".del").addEventListener("click", () => {
      divNote.remove();
    });
    deleteNotification.querySelector(".cncle").addEventListener("click", () => {
      deleteNotification.remove();
    });
  });

  ulIcon.addEventListener("click", () => {
    if (ulIcon.className === "ulIcon iblack ri-lock-unlock-fill") {
        ulIcon.className = "ulIcon iblack ri-lock-password-fill";

        let lockNotification = document.createElement("div");
        lockNotification.className = "Confirm_Note";
        lockNotification.innerHTML = `
            <h5>
                Wana <span style="color: rgb(0, 255, 4)">Lock</span> this note?
            </h5>
            <div class="btns_Div">
                <button class="cncle btn">Cancel</button>
                <button class="cnfrm btn">Confirm</button>
            </div>`;
        divNote.appendChild(lockNotification);

        // Cancel Button Handler
        lockNotification.querySelector(".cncle").addEventListener("click", () => {
            lockNotification.style.display = "none";
            ulIcon.className = "ulIcon iblack ri-lock-unlock-fill";
        });

        // Confirm Button Handler
        lockNotification.querySelector(".cnfrm").addEventListener("click", () => {
            let storedPin = "";

            let pinCodePopup = document.createElement("div");
            pinCodePopup.className = "pinPopup";
            pinCodePopup.innerHTML = `
                <div class="pinCode">
                    <input type="password" maxlength="1" class="digit digit1">
                    <input type="password" maxlength="1" class="digit digit2">
                    <input type="password" maxlength="1" class="digit digit3">
                    <input type="password" maxlength="1" class="digit digit4">
                </div>
                <button class="lock cnfrm btn">Lock</button>`;
            divNote.appendChild(pinCodePopup);
            lockNotification.style.display = "none";

            let inputs = pinCodePopup.querySelectorAll(".pinPopup input");
            let lockBtn = pinCodePopup.querySelector(".lock");

            // Input field navigation logic
            inputs.forEach((elem, index) => {
                elem.addEventListener("input", (event) => {
                    if (event.target.value !== "" && index < inputs.length - 1) {
                        inputs[index + 1].focus(); // Move to the next input
                    }
                });

                elem.addEventListener("keydown", (event) => {
                    if (event.key === "Backspace" && index > 0 && elem.value === "") {
                        inputs[index - 1].focus(); // Move back to the previous input
                    }
                });
            });

            // Lock Button Handler
            lockBtn.addEventListener("click", () => {
                storedPin = Array.from(inputs)
                    .map((elem) => elem.value)
                    .join("");

                if (storedPin.length !== 4) {
                    alert("You must enter a valid 4-digit PIN!");
                    inputs.forEach((input) => (input.value = "")); // Clear the inputs
                    inputs[0].focus(); // Focus back to the first input
                } else {
                    alert(`Your PIN is now locked as: ${storedPin}`);
                    pinCodePopup.style.display = "none"; // Close the popup
                }
            });
        });
    } else {
        ulIcon.className = "ulIcon iblack ri-lock-unlock-fill";

        let pinCodePopup = document.createElement("div");
        pinCodePopup.className = "pinPopup";
        pinCodePopup.innerHTML = `
            <div class="pinCode">
                <input type="password" maxlength="1" class="digit digit1">
                <input type="password" maxlength="1" class="digit digit2">
                <input type="password" maxlength="1" class="digit digit3">
                <input type="password" maxlength="1" class="digit digit4">
            </div>
            <button class="sbmt cnfrm btn">Confirm</button>`;
        divNote.appendChild(pinCodePopup);

        let inputs = pinCodePopup.querySelectorAll(".pinPopup input");
        inputs.forEach((elem, index) => {
            elem.addEventListener("input", (event) => {
                if (event.target.value !== "" && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });

            elem.addEventListener("keydown", (event) => {
                if (event.key === "Backspace" && index > 0 && elem.value === "") {
                    inputs[index - 1].focus();
                }
            });
        });

        pinCodePopup.querySelector(".sbmt").addEventListener("click", () => {
            let storedPin = Array.from(inputs)
                .map((elem) => elem.value)
                .join("");

            if (storedPin.length !== 4) {
                alert("You must enter a valid 4-digit PIN!");
                inputs.forEach((input) => (input.value = "")); // Clear the inputs
                inputs[0].focus(); // Focus back to the first input
            } else {
                console.log(`PIN Entered: ${storedPin}`);
                pinCodePopup.style.display = "none"; // Close the popup
            }
        });
    }
});


  // Increase Size of Note when open it

  newNote.addEventListener("click", (event) => {
    if (divNote.className != "opened_Note") {
      Apps.className = "opened";
      divNote.className = "opened_Note";
      document.querySelectorAll(".txtArea_Div").forEach((element) => {
        element.className = "hidden"; // Hides all elements with class 'txtArea_Div'
      });
    }
    event.stopPropagation();
  });

  divNote.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  Apps.addEventListener("click", () => {
    Apps.className = "notesApp";
    divNote.className = "txtArea_Div";
    document.querySelectorAll(".txtArea_Div").forEach((element) => {
      element.className = "txtArea_Div"; // Hides all elements with class 'txtArea_Div'
    });
  });
});
