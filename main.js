let list = [];
let done = [];

function addTodo(event) {
    event.preventDefault();

    let input = document.querySelector('#text-input').value;
    list.push(input);

    let todo_list = document.querySelector('#todo-list');
    generateList(todo_list);

    document.querySelector('#my-form').reset();
    document.querySelector('#text-input').focus();
}

function doneTodo(index) {
    done.push(list[index]);
    list.splice(index, 1)

    let done_list = document.querySelector('#done-todo-list');
    generateDoneList(done_list);

    let todo_list = document.querySelector('#todo-list');
    generateList(todo_list);
}

function deleteList(index) {
    done.splice(index, 1)
    
    let done_list = document.querySelector('#done-todo-list');
    generateDoneList(done_list);
}

function generateList(elm) {
    elm.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
        elm.innerHTML += `
            <li>
                <p>
                    <button class="btn btn-info" onclick="doneTodo(${i});">✔</button>
                    <span>${list[i]}</span>
                </p>
            </li>
        `
    }
}

function generateDoneList(elm) {
    elm.innerHTML = '';
    for (let i = 0; i < done.length; i++) {
        elm.innerHTML += `
            <li>
                <p>
                    <button class="btn btn-danger" onclick="deleteList(${i});">✘</button>
                    <span>${done[i]}</span>
                </p>
            </li>
        `
    }
}
