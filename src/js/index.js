import { createFormData } from "./api/handler/handleUserInput";
import * as storage from "./storage/index";
import * as constant from "./constants/index";

//  move into a constants file / folder
const root = document.documentElement;
const userColor = getComputedStyle(root).getPropertyValue('--userColor');

function checkForKey () {
  const key = storage.load("api_key");

  if(key) {
    constant.accessKeyInput.value = key;
    constant.accessKeyInput.disabled = true;
    constant.accessKeyInput.style.color = userColor;
  } else {
    return
  }
}

 // user input

//  maybe move this into its own function and import it to keep it cleaner
constant.userPrompt.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    constant.submitButton.click();
  }

  constant.userPrompt.style.height = "auto";
  constant.userPrompt.style.height = `${constant.userPrompt.scrollHeight}px`;

  if (constant.userPrompt.scrollHeight > 200) {
    constant.userPrompt.style.overflowY = "scroll";
    constant.userPrompt.style.height = "100rem";
  } else {
    constant.userPrompt.style.overflowY = "hidden";
  }
});


// submit input
constant.userInputForm.addEventListener("submit", createFormData);

// Api key inputs
constant.accessKeyInput.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
  storage.save("api_key", e.target.value);

  constant.accessKeyInput.value = e.target.value;
  constant.accessKeyInput.disabled = true;
  constant.accessKeyInput.style.color = userColor;
}
});

accessKeyDelete.addEventListener("click", (e) => {
  storage.remove("api_key");

  constant.accessKeyInput.value = "";
  constant.accessKeyInput.disabled = false;
  constant.accessKeyInput.style.color = "white";
})


checkForKey();