let todoList=[
    {item:"ddsds",
     date:"12/02/2004"},
    {item:"dsd",
     date:"12/3/1234"}];
displayItem();

function addTodo()
{
    let getElement= document.querySelector('#input-todo');
    let getDate=document.querySelector('#todo-date');
    let todoItem=getElement.value;
    let todoDate=getDate.value;
   // console.log(todoItem);
    todoList.push({item:todoItem, date:todoDate});
    getElement.value='';
    getDate.value='';
    displayItem();
    
}

function displayItem()
{
    let containerElement=document.querySelector('.todo-container');
    let newHtml='';
    for(let i=0; i<todoList.length;i++)
        {
            // de-structuring to get item and date
            let item= todoList[i].item;
            let date=todoList[i].date;
            newHtml +=`
            
             <span>${item}</span>
             <span>${date}</span>
             <button id="btn-delet" onclick="todoList.splice(${i},1); displayItem();">Delet</button> 
             `;
             
        }
        containerElement.innerHTML= newHtml;
      
}