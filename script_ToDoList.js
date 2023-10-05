let username = prompt('Для персонализации списка введите своё имя:')

let personalList = document.getElementById('greeting')
if (username) {
    personalList.innerHTML = 'Ваш список дел, ' + username
} else {personalList.innerHTML = 'Список дел анонимного пользователя'}

let count = 0

function addToList() {
    let myTaskList = document.getElementById('taskList')
    let myInput = document.getElementById('task')

    count++

    if (count <= 5) {
        myTaskList.innerHTML = "<p>" + myTaskList.innerHTML + count + ". " + myInput.value + "</p>"
    } else {
        alert ("Не берите на себя слишком много!")
    }
       

}
