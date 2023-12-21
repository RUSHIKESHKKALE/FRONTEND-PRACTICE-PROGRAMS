
//using revealing module to modularised our code
var todoListApp=(function(){
    let tasks = [];
    const tasksList = document.getElementById("list");
    const addTaskInput = document.getElementById("add");
    const tasksCounter = document.getElementById("tasks-counter");
    
    console.log("Working");
    
    var a=10;
    
    //fetching APIs for todos
    async function fetchTodos() {
      //for get request
      // fetch('https://jsonplaceholder.typicode.com/todos')
      // .then(function(response){
      //   console.log(response);
      //   return response.json();
      // })
      // .then(function(data){
      //   console.log(data);
      //   tasks=data.slice(0,10);
      //   renderList();
      // })
      // .catch(function(error){
      //   console.log(error);
      // })
    
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        tasks = data.slice(0, 10);
        renderList();
      } catch (error) {
        console.log(error);
      }
    }
    
    function addTaskToDom(task) {
      const li = document.createElement("li");
      li.innerHTML = `
    <input type="checkbox" id="${task.id}" ${
        task.completed ? "checked" : ""
      }class="custom-checkbox">
    <label for="${task.id}">${task.title}</label>
    <img  src="bin.svg" class="delete" data-id="${task.id}" />
     `;
      tasksList.append(li);
    }
    
    function renderList() {
      tasksList.innerHTML = "";
    
      for (let i = 0; i < tasks.length; i++) {
        addTaskToDom(tasks[i]);
      }
      tasksCounter.innerHTML = tasks.length;
    }
    
    //toggeling function
    function toggleTask(taskId) {
      const task = tasks.filter(function (task) {
        return task.id === Number(taskId);
      });
    
      if (task.length > 0) {
        const currentTask = task[0];
        currentTask.completed = !currentTask.completed;
        renderList();
        showNotification("task toggle successfully");
        return;
      }
      showNotification("could not toggle the task");
    }
    
    //delete task function
    function deleteTask(taskId) {
      const newTasks = tasks.filter(function (task) {
        return task.id !== Number(taskId);
      });
      tasks = newTasks;
      renderList();
      showNotification("task deleted successfully");
    }
    
    //adding task function
    function addTask(task) {
      if (task) {
        // fetch("https://jsonplaceholder.typicode.com/todos",{
        //   method:'POST',
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(task),
        //  })
        //   .then(function (response) {
        //     console.log(response);
        //     return response.json();
        //   })
        //   .then(function (data) {
        //     console.log(data);
        //     tasks.push(task);
        //     renderList();
        //    showNotification("the task is successfully added");
        //   })
        //   .catch(function (error) {
        //     console.log('error', error);
        //   })
    
    
        tasks.push(task);
        renderList();
        showNotification("the task is successfully added");
        return;
      }
      showNotification("the task can not be added");
    }
    
    
    //show notification function
    function showNotification(text) {
      alert(text);
    }
    
    //key press function which is declared in addeventlistener.
    function handleInputKeypress(e) {
      if (e.key == "Enter") {
        const text = e.target.value;
        console.log(text);
    
        if (!text) {
          showNotification("task text can not be empty");
          return;
        }
        const task = {
          title: text,
          id: Date.now(),
          completed: false,
        };
        e.target.value = "";
        addTask(task);
      }
    }
    
    //for deleting task in the after clicking on delete
    function handleClickListener(e) {
      const target = e.target;
      console.log(target);
      if (target.className === "delete") {
        const taskId = target.dataset.id;
        deleteTask(taskId);
        return;
      } else if (target.className === "custom-checkbox") {
        const taskId = target.id;
        toggleTask(taskId);
        return;
      }
    }
    
    function initializeapp() {
      fetchTodos();
      //adding event listener to the input box on keyup event
      addTaskInput.addEventListener("keyup", handleInputKeypress);
      //adding the event listener on whole document
      document.addEventListener("click", handleClickListener);
    }
    
    //her we returning object of todolistapp
    return{
       initialize: initializeapp,
       a:a
    }
    
  })();
  
  
  
  