//Adding function to add user

function add_user(){
    userName = document.getElementById('userName').value;
    if(userName == ''){
        document.getElementById('error').style.fontSize = '15px';
    }
    else{
        localStorage.setItem('userName', userName);
        window.location = 'kwitter_room.html';
    }
}
