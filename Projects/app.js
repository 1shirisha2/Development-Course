var addBtn=document.getElementById("add-task")
var taskInput=document.getElementById("task")
var tasklist=doucemt.getElementById("tasks")
addBtn.addEventListener("click",function(){
    var task=taskInput. value
    addtask(task)
    taskInput.value=""

})
function addTask(task){
    var li=Document.createElement("li")
    li.innerHTML=task
taskList.appendchild(li)
}