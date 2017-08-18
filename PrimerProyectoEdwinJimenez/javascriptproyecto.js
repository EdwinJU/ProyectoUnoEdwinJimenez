//Guarda el usuario en localstorage
$(document).ready(function(){    
    
    $('#btnSave').click(function(){        
        var user = {
               
                name: $('#name').val(),
                lastname: $('#lastname').val(),
                phone: $('#phone').val(),
                username: $('#username').val(),
                password: $('#password').val(),
             
               
          };
var users = JSON.parse(localStorage.getItem('users'));
if(!users){
users= [];

}
         users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
  
     
     });

});

//Guarda el usuario en sessionstorage
$(document).ready(function(){    
    
    $('#btnSave').click(function(){        
    var user = {
                 name: $('#name').val(),
                lastname: $('#lastname').val(),
                phone: $('#phone').val(),
                username: $('#username').val(),
                password: $('#password').val(),
               
          };
var users = JSON.parse(sessionStorage.getItem('users'));
if(!users){
users= [];

}
         users.push(user);
        sessionStorage.setItem('users', JSON.stringify(users));
      
     
     });

});