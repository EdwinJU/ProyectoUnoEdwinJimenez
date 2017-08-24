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
        alert("Usuario Guardado");
  
     
     });

});


//Guarda el ride en localstorage
$(document).ready(function(){    

   $('#btnSaveR').click(function(){   

  var users = JSON.parse(sessionStorage.getItem('users'));
  var usersD= JSON.parse(localStorage.getItem('users'));
   if(!users){
   users=[];
   alert("Debes loguearte o registrarte primero");
}

  var localUsuName = "";
  var nombreUsu="";

  for (var i = 0; i < usersD.length; i++) {
    var ul = usersD[i];

    localUsuName=ul.username;
    break;
  }

  for (var i = 0; i < users.length; i++) {
    var u = users[i];

    nombreUsu=u.username;
    console.log(nombreUsu);
    break;
      }

      if (nombreUsu==localUsuName) {

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
        alert("Ride Guardado");

      }else{
        alert("El usuario Logueado no existe");
      }
    
        
  
     
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

//Visualizar la persona logueada
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
//Mostrar rides creados por la persona logueada
function loadRides() {


var users = JSON.parse(sessionStorage.getItem('users'));
   if(!users){
   users=[];
   alert("Debes loguearte o registrarte primero");
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

     ride_html = ride_html+"<td><td>" +r.name + "<td><td>"+r.start + "<td><td>"+r.end + "<td><td>"+r.description + "<td><td>"+r.departure + "<td><td>"+r.estimate + "<td><td>"+r.days;

    
  }

  $('#ride_table').html(ride_html);

}
}

//Login
$(document).ready(function(){    

   $('#btnlog').click(function(){   


var users = JSON.parse(localStorage.getItem('users'));
   if(!users){
   users=[];
   alert("no ha usuarios");
}

  var nombreUsu="";
  var pass="";

  for (var i = 0; i < users.length; i++) {
    var u = users[i];

    nombreUsu=u.username;
    pass=u.password;
    var usernameIntro=document.getElementById('username').value;
    var passwordIntro=document.getElementById('password').value;

    console.log(usernameIntro);

    if (usernameIntro==nombreUsu&&passwordIntro==pass) {
      alert("Estas Logueado");
      window.location.replace("file:///C:/Users/Alfredo/Documents/GitHub/ProyectoUnoEdwinJimenez/ProyectoUnoEdwinJimenez/PrimerProyectoEdwinJimenez/dashboard.html");

    break;
    }else if (usernameIntro!=nombreUsu&&passwordIntro!=pass) {

      alert("El usuario no existe");
      break;

    }
      
      
      
    
    
       } 
 });
});

//Buscar Ride para la pantalla de home
function verRides() {

  var rides = JSON.parse(localStorage.getItem('rides'));
if(!rides){
alert("No hay rides")
}

  var ride_html = "";
  var startIntro=document.getElementById('start').value;
  var endIntro=document.getElementById('end').value;
  var inicio="";
  var fin="";
  for (var i = 0; i < rides.length; i++) {
    var r = rides[i];
    inicio=r.start;
    fin=r.end;

    if (startIntro==inicio&&endIntro==fin) {
      ride_html =ride_html+ "<tr><td>"+r.nombre + "<td><td>"+r.start + "<td><td>"+r.end;

    }  
    $('#rided_table').html(ride_html);
  }

  

}








$(document).ready(function(){    

   $('#btnUp').click(function(){ 
    var nameIntro = document.getElementById('name').value;
    var usernameIntro = document.getElementById('username').value;
    var lastnameIntro = document.getElementById('lastname').value;
    var phoneIntro = document.getElementById('phone').value;
    var passwordIntro = document.getElementById('password').value;

    if (nameIntro == "" || usernameIntro == "" || lastnameIntro == "" || passwordIntro == "" || phoneIntro=="") {
        alert("escribe todos los datos por favor");
    }
    else {
        var datos = JSON.parse(localStorage.getItem("users"));



        for (var i = 0; i < datos.length; i++) {
            if (nameIntro == datos[i].name) {
                datos[i].name = nameIntro;
                datos[i].password = passwordIntro;
                datos[i].lastname = lastnameIntro;
                datos[i].phone = phoneIntro;
                datos[i].username=usernameIntro;
                localStorage.setItem("users", JSON.stringify(datos));
                console.log("Sirvio")
                break;
            }
        }

    }
 });
});




//Editar Rides
$(document).ready(function(){    

   $('#btnSaveEdit').click(function(){ 
    var nameIntro = document.getElementById('nameEdit').value;
    var startIntro = document.getElementById('startEdit').value;
    var endIntro = document.getElementById('endEdit').value;
    var departureIntro = document.getElementById('departureEdit').value;
    var estimateIntro = document.getElementById('estimateEdit').value;
    var descriptionIntro = document.getElementById('commentEdit').value;
    var daysIntro = document.getElementById('daysEdit').value;
    

    if (nameIntro == "" || startIntro == "" || endIntro == "" || departureIntro == "" || estimateIntro==""
     || descriptionIntro== "" || daysIntro == "") {
        alert("escribe todos los datos por favor");
    }
    else {
        var datosEdit = JSON.parse(localStorage.getItem("rides"));


        for (var i = 0; i < datosEdit.length; i++) {
            if (nameIntro == datosEdit[i].name) {
                datosEdit[i].name = nameIntro;
                datosEdit[i].start = startIntro;
                datosEdit[i].end = endIntro;
                datosEdit[i].departure = departureIntro;
                datosEdit[i].estimate=estimateIntro;
                datosEdit[i].description = descriptionIntro;
                datosEdit[i].days=daysIntro;
                localStorage.setItem("rides", JSON.stringify(datosEdit));
                console.log("Sirvio")
                alert("Cambios Guardados");
                break;
                
            }else{
              alert("Debes loguearte o registrarte primero");
              break;
            }
        }

    }
 });
});





$(document).ready(function(){    

   $('#btnSaveSett').click(function(){   

  var users = JSON.parse(sessionStorage.getItem('users'));
  var usersLo=JSON.parse(localStorage.getItem('users'));
   if(!users){
   users=[];
   alert("Debes loguearte o registrarte primero");
}

  var nombreUsu="";
  var usuLocal="";

  for (var i = 0; i < usersLo.length; i++) {
    var ul = usersLo[i];

    usuLocal=ul.username;
    break;
  }

  for (var i = 0; i < users.length; i++) {
    var u = users[i];

    nombreUsu=u.username;
    console.log(nombreUsu);
    break;
  }

  if (nombreUsu==usuLocal) {

    var extraInfo = {
              

                nombre:u.username,
                fullname: $('#fullname').val(),
                speedaverage: $('#speed').val(),
                aboutme: $('#comment').val(),
                      
               
          };
var extraInfos = JSON.parse(localStorage.getItem('extraInfos'));
if(!extraInfos){
extraInfos= [];

}
         extraInfos.push(extraInfo);
        localStorage.setItem('extraInfos', JSON.stringify(extraInfos));

  }else{
    alert("El Usuario no existe");
  }

    
        
  
     
     });
  

});


//Eliminar Ride
$(document).ready(function(){    
    $('#btnDelete').click(function(){                
                                                   
     
     var rides = JSON.parse(localStorage.getItem('rides'));
     var nombreRide="";
      var nameIntro = document.getElementById('nameEdit').value;

      if(!rides){
   rides=[];
   alert("Debes no hay rides registrados");
}

     for (var i = 0; i < rides.length; i++) {
    var r = rides[i];

    nombreRide=r.name;
    console.log(nombreRide);
        console.log(nameIntro);

       if (nameIntro==nombreRide) {

         rides.pop(); 
           //localStorage.setItem('rides', JSON.stringify(rides));
           localStorage.removeItem('rides', JSON.stringify(nombreRide));
           localStorage.removeItem('name', JSON.stringify(rides));
           localStorage.removeItem('start', JSON.stringify(rides));
                      localStorage.removeItem('end', JSON.stringify(rides));
                      localStorage.removeItem('departure', JSON.stringify(rides));
                      localStorage.removeItem('estimate', JSON.stringify(rides));
                      localStorage.removeItem('description', JSON.stringify(rides));
                      localStorage.removeItem('days', JSON.stringify(rides));


break;

      }

  
  }
      

    });   
});