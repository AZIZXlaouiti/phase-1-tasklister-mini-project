const tasklist=[]




document.addEventListener("DOMContentLoaded", () => {
  const le = document.addEventListener('submit',(e)=>{
    e.preventDefault();
    const toDo = document.querySelector('#new-task-description')
      if (toDo.value !== ""){
        
        tasklist.push(toDo.value)
        let li = document.createElement('li')
        let bu = document.createElement('button')
        bu.innerHTML = 'X'
        
        li.innerHTML = toDo.value
        let item = document.querySelector('#list #tasks')
        console.log(tasklist)
        item.appendChild(li)
        li.appendChild(bu)
        // e.target.reset()
        toDo.value = ''
      }
    
     
      

    
   
  });
  
});
