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
//actualizar localstorage
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

  var users = JSON.parse(sessionStorage.getItem('users'));
   if(!users){
   users=[];
   alert("no sirve");
}

  var user_html = "";
  var nombreUsu="";

  for (var i = 0; i < users.length; i++) {
    var u = users[i];

    nombreUsu=u.name;
    console.log(nombreUsu);
    //user_html = user_html +u.name;
  }
    
        var ride = {
              

                nombre:u.name,
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


function loadSession() {

  var users = JSON.parse(sessionStorage.getItem('users'));
if(!users){
users=[];
}

  var user_html = "";
  for (var i = 0; i < users.length; i++) {
    var u = users[i];


    user_html = user_html +u.name;
    
  }

  $('#user_table').html(user_html);

}

function loadRides() {


var users = JSON.parse(sessionStorage.getItem('users'));
   if(!users){
   users=[];
   alert("no sirve");
}

  var user_html = "";
  var nombreUsu="";

  for (var i = 0; i < users.length; i++) {
    var u = users[i];

    nombreUsu=u.name;
    
    //user_html = user_html +u.name;
  }




  var rides = JSON.parse(localStorage.getItem('rides'));
if(!rides){
rides=[];
}

  var ride_html = "";
  for (var i = 0; i < rides.length; i++) {
    var r = rides[i];

     if(r.nombre==nombreUsu){

     ride_html = ride_html+r.nombre  +"<td><td>" +r.name + "<td><td>"+r.start + "<td><td>"+r.end + "<td><td>"+r.description + "<td><td>"+r.departure + "<td><td>"+r.estimate + "<td><td>"+r.days;

    }else{
      alert("No sirvio :(")
    }
    
  }

  $('#ride_table').html(ride_html);

}



//function deshabilitar(){
//document.boti.btnSave.disabled=true;
//}
