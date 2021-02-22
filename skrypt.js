// Name input field forwarding to next html
const resultsList = document.getElementById('results');
new URLSearchParams(window.location.search).forEach((name) => {
resultsList.append('Hello, '+`${name}`)
});

// Auto day and date
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const day = String(days[today.getDay()]);
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const el = document.getElementById('date');
el.innerHTML = 'Today is ' +  day + ' ' + dd + '/' + mm + '/' + yyyy;

// To-do plus pop up window
const addButton = document.querySelector('.add-item')
const addOverlay = document.querySelector('.overlay')
const addModal = document.querySelector('.modal')
const closeModal = document.querySelector('.close')
const closeModal1 = document.querySelector('.add')

addButton.addEventListener('click', function(){
    addOverlay.classList.add('overlay-on')
    addModal.classList.add('modal-on')
});

closeModal.addEventListener('click', function(){
    addOverlay.classList.remove('overlay-on')
    addModal.classList.remove('modal-on')
});

closeModal1.addEventListener('click', function(){
    addOverlay.classList.remove('overlay-on')
    addModal.classList.remove('modal-on')
});




//Add new To-do
//Selectors
const todoInput = document.querySelector('.todo')
const commentInput = document.querySelector('.comment')
const dateInput = document.querySelector('.date')
const timeInput = document.querySelector('.time')
const todoAdd = document.querySelector('.add')
const todoList = document.querySelector('.list')

//Event Listeners
todoAdd.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('action');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //description
    const newComment = document.createElement('p');
    newComment.innerText = 'Comments: ' + commentInput.value;
    newComment.classList.add('comment-item');
    todoDiv.appendChild(newComment);
    //date
    const newDate = document.createElement('date');
    newDate.innerText = 'Deadline: ' + dateInput.value;
    newDate.classList.add('date-item');
    todoDiv.appendChild(newDate);
    //hour
    const newHour = document.createElement('hour');
    newHour.innerText =  timeInput.value;
    newHour.classList.add('hour-item');
    todoDiv.appendChild(newHour);
    //extend button
    // const completeButton = document.createElement('button');
    // completeButton.innerHTML = '<i class="fas fa-angle-down"></i>';
    // completeButton.classList.add('complete-btn');
    // todoDiv.appendChild(completeButton);

    //delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append to child
    todoList.appendChild(todoDiv);
    //clear todobox
    todoInput.value='';
}

//deletetodo
function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const action =  item.parentElement;
        action.remove();
    }
};





