let cpt = 0;

//Créarion de tâches
function createTodo(todoTxt){
   const todoHTML = `<div class="todo">
                    <input type="checkbox" id="checkbox-${cpt}">
                    <label for="checkbox">${todoTxt}</label>
                    <button onclick="closeTodo(this.previousElementSibling.previousElementSibling,this.parentNode)" class="bt-close">&times;</button></div>`

    document.querySelector('#todolist').innerHTML += todoHTML;

    
}

//Test kes valeurs entré
function checkValue(val){
return val.length > 2;
}

//Fenêtre de confirmation lors de la suppression d'une tâche
function closeTodo(checkboxTag, todoTag){
    if (checkboxTag.checked){
        const response = confirm('Voulez vous vraiment supprimer cette tâche ?');
        if(!response) return;
    }
    document.querySelector('#todolist').removeChild(todoTag);
}

//Ecoute l'evenement submit et agit en fonction
document.forms.formAddTodo.addEventListener(
    'submit',
    function(e){
        e.preventDefault();
        if (checkValue(this.todoTxt.value)){
            createTodo(this.todoTxt.value);
            cpt++;
        }
        else{
            const errorTxt = document.querySelector('.error');
            errorTxt.style.display ='block';
            setTimeout(() =>{
                errorTxt.style.display = 'none';
            }, 2000)
        }
        
    }
)

