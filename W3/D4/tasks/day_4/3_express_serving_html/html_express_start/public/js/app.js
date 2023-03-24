const tasks = [
    {title:"Buy Groceries", description:"Milk, Eggs, Cheese"},
    {title:"Learn JS", description:"Learn Express"}
];

document.addEventListener("DOMContentLoaded", ()=>{
    const list = document.querySelector("#to-do-list");
    for(let task of tasks){
        const taskItem = document.createElement("li");
        taskItem.textContent = `${task.title} - ${task.description}`;
        list.appendChild(taskItem);
    }
})