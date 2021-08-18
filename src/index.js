const form = document.getElementById("create-task-form")
form.addEventListener("submit", handleSubmit)
const tasks = document.getElementById("tasks")

function handleSubmit(e){
  e.preventDefault()
  const description = e.target["new-task-description"].value
  addTask(description)
  e.target.reset()
}

function addTask(description) {
  const task = document.createElement("li")
  task.innerText = description
  tasks.appendChild(task)
  const button = document.createElement("button")
  button.innerText = "delete"
  button.addEventListener("click", function(){
    task.remove()
  })
  task.appendChild(button)
  tasks.appendChild(task)
}




