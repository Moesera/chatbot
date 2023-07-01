import { checkPlaceholderEmpty } from "./components/userInputs";

//  move into a constants file / folder
const userPrompt = document.getElementById("prompt");

//  maybe move this into its own function and import it to keep it cleaner
userPrompt.addEventListener('input', () => {
  userPrompt.style.height = 'auto';
  userPrompt.style.height = `${userPrompt.scrollHeight}px`;

  if (userPrompt.scrollHeight > 200) {
    userPrompt.style.overflowY = 'scroll';
    userPrompt.style.height = '100rem';
  } else {
    userPrompt.style.overflowY = 'hidden';
  }

  checkPlaceholderEmpty(userPrompt, "Message", "data-ph");
});

