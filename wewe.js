// Step 1: Find the button and the message area on the page
const greetBtn = document.getElementById('greetBtn');
const message  = document.getElementById('message');
const nameInput = document.getElementById('nameInput');

// Step 2: Listen for a click on the button
greetBtn.addEventListener('click', function() {

  // Step 3: Read what the user typed
  const name = nameInput.value;

  // Step 4: Check if they typed anything
  if (name === '') {
    message.textContent = 'Please type your name first!';
    message.style.color = 'red';
  } else {
    message.textContent = 'Hello, ' + name + '! Welcome to JavaScript!';
    message.style.color = 'green';
  }})