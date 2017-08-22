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

    nombreUsu=u.username;
    console.log(nombreUsu);
    //user_html = user_html +u.name;
  }
    
        var ride = {
              

                nombre:u.username,
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

//Guarda el usuario en sessionstorage
$(document).ready(function(){    
    
    $('#btnlog').click(function(){        
    var user = {
         
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

function loadSession() {

  var users = JSON.parse(sessionStorage.getItem('users'));
if(!users){
users=[];
}

  var user_html = "";
  for (var i = 0; i < users.length; i++) {
    var u = users[i];


    user_html = user_html +u.username;
    
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

    nombreUsu=u.username;
    
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

    
  }

  $('#ride_table').html(ride_html);

}


$(document).ready(function(){    

   $('#btnlog').click(function(){   


var users = JSON.parse(localStorage.getItem('users'));
   if(!users){
   users=[];
   alert("no sirve");
}

  var nombreUsu="";

  for (var i = 0; i < users.length; i++) {
    var u = users[i];

    nombreUsu=u.username;
    pass=u.password;
    var usernameIntro=document.getElementById('username').value;
    var passwordIntro=document.getElementById('password').value;

    console.log(usernameIntro);

    if (usernameIntro==nombreUsu&&passwordIntro==pass) {
      alert("Estas Logueado");
      window.location.replace("file:///C:/Users/Alfredo/Documents/GitHub/ProyectoUnoEdwinJimenez/ProyectoUnoEdwinJimenez/PrimerProyectoEdwinJimenez/CrearRide.html");
    errorElement.setAttribute("style","display:none;");
    }
    
       } 

 });

});




