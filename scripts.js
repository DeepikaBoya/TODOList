const textref=document.querySelector('#input-box');
const ulref=document.querySelector('ul')
const liref=document.querySelector('#list-container')
const addref=document.querySelector('button')


addref.addEventListener('click',(event)=>
{
   
if(textref.value==='')
{
    alert("You must write something")
}
else
{
    // const li=document.createElement('li');
    // li.className="edit-task"

    // li.innerHTML=textref.value;
    // liref.appendChild(li);
    // //edit
    // const spanEdit = document.createElement("span");
    //     spanEdit.className = 'edit';
    //     spanEdit.textContent = 'edit';
    //     li.appendChild(spanEdit);



    // //delete
    // let span=document.createElement("span");
    // span.innerHTML="\u00d7";
    // li.appendChild(span)
    const li = document.createElement('li');
            li.innerHTML = `<input type="text" class="edit-task" value="${textref.value}" readonly>
                             <span class="edit">✎</span>
                             <span class="delete">\u00d7</span>`;
            liref.appendChild(li);



}
textref.value=''
saveData();
})


liref.addEventListener("click",function(e)
{
    
    if (e.target.classList.contains('edit')) {
        const li = e.target.parentElement;
        const inputField = li.querySelector('.edit-task');
                // Remove the 'checked' class to remove the strike-through
                li.classList.remove('checked');

        inputField.readOnly = false;
        inputField.focus();
        saveData();
    } else if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName==="LI") {
        e.target.classList.toggle('checked');
        saveData();
    }

},false)
liref.addEventListener('keyup', function (e) {
    

    if (e.target.classList.contains('edit-task') && e.key === 'Enter') {
        const inputField = e.target;
        inputField.readOnly = true;

        // Check if the edited value is not empty before saving
        if (inputField.value.trim() !== '') {
            saveData();
        } else {
            // Optionally, you can provide feedback to the user about not saving an empty value
            alert("Task cannot be empty. Please enter a valid task.");
            // Reset the input field value to the previous value or take other actions as needed
            inputField.value = inputField.getAttribute('value');
        }
    }

});


function saveData()
{
    localStorage.setItem("data",liref.innerHTML)
}

function showTask()
{
    liref.innerHTML=localStorage.getItem("data")
}
showTask()

