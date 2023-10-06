let username = prompt('Для персонализации списка введите своё имя:')

let personalList = document.getElementById('greeting')
if (username) {
    personalList.innerHTML = 'Ваш список дел, ' + username + '.'
} else {personalList.innerHTML = 'Список дел анонимного пользователя'}

let count = 0

function addToList() {
    let myTaskList = document.getElementById('taskList')
    let myInput = document.getElementById('task')
    let taskText = myInput.value.trim(); // Trim whitespace from the input value

    if (taskText !== "") { // Check if the input is not empty
        count++;

        if (count <= 5) {
            myTaskList.innerHTML = myTaskList.innerHTML + '<p>' + count + ". " + myInput.value + '</p>'
            myInput.value = ''
        } else {
            alert ("Не берите на себя слишком много!")
    }
}

}

// Add an event listener to the input field for the "Enter" key press
let taskInput = document.getElementById('task');
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addToList(); // Call addToList when Enter is pressed
    }
})
