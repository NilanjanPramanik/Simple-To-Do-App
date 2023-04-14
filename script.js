document.querySelector('#Push').onclick = function(){
    //check if the input was empty
    if(document.querySelector('#Text').value.length == 0){
        alert("Please Enter a Task");
    }
    // adding a new task
    else{
        document.querySelector('#tasks').innerHTML += `
        <span id="taskname">
            <div class="addedTask">
                <i class="bi bi-dot"></i>
                ${document.querySelector('#Text').value}
            </div>
            <button class="deleteBtn"><i class="bi bi-x-lg"></i></button>
        </span>
        `
    }
    
    //deleting task
    let current_task = document.querySelectorAll('.deleteBtn');
    for(let i=0; i<current_task.length; i++){
        current_task[i].onclick = function(){
            this.parentNode.remove();
        }
    }

    //complition of a task
    let task = document.querySelectorAll('#taskname');
    for(let i=0; i<task.length; i++){
        task[i].onclick = function(){
            this.classList.toggle('complited');
        }
    }

    //clearing the input 
    document.querySelector('#Text').value = "";
}