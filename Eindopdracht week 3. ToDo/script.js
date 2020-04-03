const showTasks = async function () {
    const tasklist = await getTasks();
    const div = document.getElementById("tasks")
    addTasksToDom(tasklist, div)
}

const deleteTaskButtonPress = function (event) {
    // alert("delete: " + event.target.id);

    deleteTask(event.target.id).then(showTasks);
}
const taskChecked = function (event) {
    event.target.task.done = !event.target.task.done;
    updateTask(event.target.task.id, event.target.task).then(showTasks);
}

const changeTask = function (event) {
    event.target.task.description = prompt("Wat moet je taak worden?")
    updateTask(event.target.id, event.target.task).then(showTasks);
}

const addTasksToDom = function (tasklist, div) {
    div.innerHTML = '';
    const ul = document.createElement("ul")
    const lilist = tasklist.map(task => {
        const newLi = document.createElement("li");
        const checkBox = document.createElement("input")
        const newImg = document.createElement("img");
        newLi.className = "task" + task.done;
        newLi.id = task.id
        newLi.task = task
        newLi.innerHTML = task.description
        newLi.addEventListener("dblclick", changeTask)
        checkBox.id = "check"
        checkBox.type = "checkbox"
        checkBox.task = task
        checkBox.checked = task.done
        checkBox.addEventListener("click", taskChecked);
        newImg.src = "trash-delete-icon.jpg";
        newImg.id = task.id;
        newImg.addEventListener("click", deleteTaskButtonPress);
        newLi.appendChild(newImg)
        newLi.appendChild(checkBox)
        return newLi;
    });
    div.appendChild(ul)
    lilist.forEach(li => ul.appendChild(li));
};

showTasks();


document.getElementById("addTask").addEventListener("click", function () {
    const text = document.getElementById("newTask").value;
    const nieuweTaak = { description: text, done: false };
    addTask(nieuweTaak).then(showTasks);

});