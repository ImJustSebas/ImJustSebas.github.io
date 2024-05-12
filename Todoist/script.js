const AddTask = document.getElementById('AddTask');

AddTask.onclick = function(){
    var Content = document.getElementById('Contenido').value;

    if (Content === '') {
        alert('debes de escribir algo en el campo');
        return;
    }

    var Task = document.createElement('li');
    var TaskContent = document.createTextNode(Content);
    Task.appendChild(TaskContent);

    var TaskContainer = document.getElementById('TaskContainer');
    TaskContainer.appendChild(Task);

    var input = document.getElementById('Contenido');
    input.value = "";

    Task.onclick = function(){
        Task.classList.toggle('CompletedTask');
    };
}

