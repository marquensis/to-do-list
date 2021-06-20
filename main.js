let taskList = [];
window.onload = function (e) {
    addListenerToAllDeleteButton();
    taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    for(i = 0; i < taskList.length; i++) {
        document.getElementById("task-list").innerHTML +=
            `<li>
                  <input type="checkbox">
                  <span class="task">${taskList[i]}</span>
                  <button class="delete-btn">x</button>
            </li>`
    }
    console.log(taskList);
    document.getElementById("add-task-button").addEventListener("click", function () {
        let text = document.getElementById("input-task").value;
        if (text && text.length > 0) {
            taskList.push(text);
            localStorage.setItem("tasks", JSON.stringify(taskList));
            document.getElementById("task-list").innerHTML +=
                `<li>
                    <input type="checkbox">
                    <span class="task">${text}</span>
                    <button class="delete-btn">x</button>
                </li>`
        }
        addListenerToAllDeleteButton();
    });
};
function addListenerToAllDeleteButton() {
    let deleteButtons = document.getElementsByClassName('.delete-btn');
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function () {
            let li = deleteButtons[i].parentNode;
            li.parentNode.removeChild(li);
        });
    }
}
