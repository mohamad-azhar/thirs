/*let text = document.getElementById("to_do");
let todo_button = document.getElementById("todo_button");
let task_list = document.getElementById("task_list");

todo_button.addEventListener("click", function(){


    let todo = `
        
        text.value
       
        
    `

    task_list.innerHTML = todo

})*/
//die bovenstaande js is de ouded
/*
let text = document.getElementById("todo_text");
let todo_button = document.getElementById("todo_button");
let task_list = document.getElementById("task_list");

todo_button.addEventListener("click", function(){

    if(text.value.trim() === "") return;

    let li = document.createElement("li");
    li.textContent = text.value;

    // Doorstrepen bij klik
    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    });

    // X knop maken
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = " ✖ ";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(e){
        e.stopPropagation(); // voorkomt dat hij ook doorstreept
        li.remove();
    });

    li.appendChild(deleteBtn);
    task_list.appendChild(li);

    text.value = "";
});*/



// dit is nog een nieuwere en betere versie
let text = document.getElementById("todo_text");
let todo_button = document.getElementById("todo_button");
let task_list = document.getElementById("task_list");

todo_button.addEventListener("click", function(){

    if(text.value.trim() === "") return;

    let li = document.createElement("li");

    // bullet span
    let bullet = document.createElement("span");
    bullet.classList.add("bullet");

    // klik op bullet = doorstrepen en vul bolletje
    bullet.addEventListener("click", function(){
        bullet.classList.toggle("completed");
        taskSpan.classList.toggle("completed");
    });

    // tekst span
    let taskSpan = document.createElement("span");
    taskSpan.textContent = text.value;

    // klik op tekst = ook doorstrepen (optioneel)
    taskSpan.addEventListener("click", function(){
        bullet.classList.toggle("completed");
        taskSpan.classList.toggle("completed");
    });

    // delete knop
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function(e){
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(bullet);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    task_list.appendChild(li);

    text.value = "";
});
