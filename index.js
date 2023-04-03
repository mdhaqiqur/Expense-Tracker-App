function savetolocalstorage(event){
    event.preventDefault();
    const totalexpence=event.target.totalexpence.value;
    const Description=event.target.Description.value;
   
    localStorage.setItem('totalexpence', totalexpence);
    localStorage.setItem('Description', Description);
   
    const obj={
        totalexpence,
        Description,
    }
    localStorage.setItem('ExpenceDetails', JSON.stringify(obj));
    showExpenceonScreen(obj)
}
function showExpenceonScreen(obj){
    const parentElement=document.getElementById('container1')
const childElement=document.createElement('li')
childElement.textContent="Total Expence:-"+obj.totalexpence+"Description:-"+obj.Description

//or use this
//parentElement.innerHTML=parentElement.innerHTML+(("Total Expence:-"+obj.totalexpence) +("  Description:-"+obj.Description))

const deleteButton=document.createElement('input')
deleteButton.type="button"
deleteButton.value="delete"
deleteButton.onclick=()=>{
    localStorage.removeItem(obj.totalexpence)
    parentElement.removeChild(childElement)
}
childElement.appendChild(deleteButton)
parentElement.appendChild(childElement)


const editButton=document.createElement('input')
editButton.type="button"
editButton.value='edit'
editButton.onclick=()=> {
    localStorage.removeItem(obj.totalexpence)
    parentElement.removeChild(childElement)
    document.getElementById('1').value=obj.totalexpence
    document.getElementById('2').value=obj.Description
}
childElement.appendChild(deleteButton)
childElement.appendChild(editButton)
parentElement.
