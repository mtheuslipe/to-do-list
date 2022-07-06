//pegando dados inseridos no html
const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

//comando do formulário 
form.onsubmit = function (e){
    e.preventDefault();
    const inputField = document.getElementById('input-place');
    addTasks(inputField.value);
    form.reset();
};
//função para adicionar as tarefas e imprimir na tela
function addTasks(description){
    //criando elementos no html que serão inseridos quando a função é chamada
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescripitionNode = document.createTextNode(description);

    //atributos e configurações para cada elemento criado 
    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescripitionNode);

    taskContainer.classList.add("taskItem");
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer)
}

