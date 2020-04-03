const showTasks = async function () {
    const tasklist = await getTasks();
    const div = document.getElementById("tasks")
    addTasksToDom(tasklist, div)
}

const deleteTaskButtonPress = function (event) {
    // alert("delete: " + event.target.id);

    deleteTask(event.target.id).then(showTasks);
}
const taskChecked = function (Checked) {

    const Checked = { description: text, done: true };
    TaskDone(Checked.target.id).then(showTasks);
}
const addTasksToDom = function (tasklist, div) {
    div.innerHTML = '';
    const ul = document.createElement("ul")
    const lilist = tasklist.map(task => {
        const newLi = document.createElement("li");
        const checkBox = document.createElement("input")
        const newImg = document.createElement("img");
        newLi.innerHTML = task.description
        checkBox.id = task.id
        checkBox.type = "checkbox"
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