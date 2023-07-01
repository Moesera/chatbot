import { checkPlaceholderEmpty } from "./components/userInputs";

const userPrompt = document.getElementById("prompt");

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