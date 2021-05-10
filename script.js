let userInput

// Connect "Submit" button to function
document.getElementById('submit').addEventListener('click', age)

function age () {
  // Get user input and convert into an integer
  userInput = document.getElementById('age').value
  userInput = parseInt(userInput)

  // Check users' age
  if (userInput >= 17) {
    document.getElementById('answer').innerHTML = 'You can see an R movie alone'
  } else if (userInput >= 13) {
    document.getElementById('answer').innerHTML = 'You can see an PG-13 movie alone'
  } else if (userInput >= 5) {
    document.getElementById('answer').innerHTML = 'You can see an G or PG moivie alone'
  } else {
    document.getElementById('answer').innerHTML = 'Uh. You\'re too young for most things'
  }
}
