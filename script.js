const checkButton = document.getElementById("palindrome-button");
const inputElement = document.getElementById("palindrome-input");
const resultElement = document.getElementById("result");

const cleanInput = (input) => {
  const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedInput;
};

function checkPalindrome(input) {
  const cleanedInput = cleanInput(input);
  const reversedCleanedInput = cleanedInput.split("").reverse().join("");
  return cleanedInput === reversedCleanedInput;
}

checkButton.addEventListener("click", () => {
  const inputValue = inputElement.value; 
  if (!inputValue.trim()) {
    // If inputValue is empty or only contains whitespace
    alert("Please input a value.");
    return; // Exit the function to prevent further execution
  }

  const resultOfPalindrome = checkPalindrome(inputValue);

  if (resultOfPalindrome) {
    resultElement.innerText = `${inputValue} is a palindrome`;
    resultElement.classList.remove("hidden");
    resultElement.style.color = "green";
  } else {
    resultElement.innerText = `${inputValue} is not a palindrome`;
    resultElement.classList.remove("hidden");
    resultElement.style.color = "red";
  }
});
