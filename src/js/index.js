import { createFormData } from "./api/handler/handleUserInput";

//  move into a constants file / folder
const userPrompt = document.getElementById("prompt");
const userInputForm = document.getElementById("userInputForm");
const submitButton = document.getElementById("submitButton");
const accessKeyInput = document.getElementById("accessKeyInput");

//  maybe move this into its own function and import it to keep it cleaner
userPrompt.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    submitButton.click();
  }

  userPrompt.style.height = "auto";
  userPrompt.style.height = `${userPrompt.scrollHeight}px`;

  if (userPrompt.scrollHeight > 200) {
    userPrompt.style.overflowY = "scroll";
    userPrompt.style.height = "100rem";
  } else {
    userPrompt.style.overflowY = "hidden";
  }
});

userInputForm.addEventListener("submit", createFormData);

// accessKeyInput.addEventListener("")
