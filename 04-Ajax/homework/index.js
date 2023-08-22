const [boton] = $('#boton'); //Traemos el boton a la variable
const [search] = $('#search');
const [deleteBtn] = $('#delete'); 
const url = 'http://localhost:5000/amigos';

const listFriends = (response) =>{
    const [lista] = $('#lista');
    lista.innerText = '';
    response.forEach((friend) =>{ //response es un array
        const newLi = document.createElement('li');
        newLi.innerText = friend.name; //<li> INNER TEXT </li>
        lista.appendChild(newLi);
    })
}

const showFriends = () =>{
    $('#lista').empty(); //Empty no funciona con variables, debe aplicarse de forma directa
    $.get(url, listFriends)
}

const searchFriends = () =>{
   const [input] = $('input');
   const id = input.value; //number
   input.value = '';
   $.get(`${url}/${id}`, (response) =>{ //dai está loca jajaja que forma de escribir la url
        const [amigo] = $('#amigo');
        amigo.innerText = response.name;
   }) 
}

const deleteFriend = () =>{
    let deleteInput = document.querySelector('#inputDelete').value;
    let succ = document.querySelector('#success');
    let friend;

    if(deleteInput){
     $.ajax({
        type: "DELETE",
        url: `${url}/${deleteInput}`,
        success: () =>{
           listFriends(); 
        }
     })   
    }

}

boton.addEventListener('click', showFriends);
search.addEventListener('click', searchFriends);
deleteBtn.addEventListener('click', deleteFriend);

