var addBtn=document.getElementById("add-task")
var task Input=document.getElementById("task")
var task list=doucemt.getElementById("tasks")
addBtn.addEventListener("click",function(){
    var task=task Input. value
    add task(task)
    task Input.value=""

})
function add Task(task){
    var li=Document.create Element("li")
    li.innerHTML=task
taskList.appendchild(li)
}