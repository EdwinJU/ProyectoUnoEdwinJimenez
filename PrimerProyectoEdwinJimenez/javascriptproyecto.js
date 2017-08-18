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



//Guarda el ride en localstorage
$(document).ready(function(){    
    
    $('#btnSaveR').click(function(){        
        var ride = {
               
                name: $('#name').val(),
                start: $('#start').val(),
                end: $('#end').val(),
                description: $('#comment').val(),
                departure: $('#departure').val(),
                estimate: $('#estimate').val(),
                days: $('#days').val(),

             
               
          };
var rides = JSON.parse(localStorage.getItem('rides'));
if(!rides){
rides= [];

}
         rides.push(ride);
        localStorage.setItem('rides', JSON.stringify(rides));
  
     
     });

});

//Guarda el ride en sessionstorage
$(document).ready(function(){    
    
    $('#btnSaveR').click(function(){        
    var ride = {
                name: $('#name').val(),
                start: $('#start').val(),
                end: $('#end').val(),
                description: $('#comment').val(),
                departure: $('#departure').val(),
                estimate: $('#estimate').val(),
                days: $('#days').val(),
               
          };
var rides = JSON.parse(sessionStorage.getItem('rides'));
if(!rides){
rides= [];

}
         rides.push(ride);
        sessionStorage.setItem('rides', JSON.stringify(rides));
      
     
     });

});



