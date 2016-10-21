
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});

//HTTP REQUEST DE TIPUS GET
//CSS Selector
$("#getuser").click(function(){ //seleccionem el seu objecte pel seu id
    $.ajax({
        type: "GET",  //canviar a POST
        data: $("#user").val(),
        //afegir una ruta en web.php i fer-la  post per a que ens retorne la informació
        // del usuari(sense fer formulari ni button tipus submit)
        url: 'http://localhost:8000/apicutre/user/1',
        success: function(result){ //en result va el resultat d'haver cridat a la pàgina
            console.log("Get Ajax OK");
            console.log(result);
            $("#user").val(result);
        },
        error: function(){
            console.log("Error de peticio Get Ajax");
        }

    });

});

$("#postuser").click(function(){ //seleccionem el seu objecte pel seu id
    $.ajax({
        type: "POST",  //canviar a POST
        data: $("#user").val(),
        //afegir una ruta en web.php i fer-la  post per a que ens retorne la informació
        // del usuari(sense fer formulari ni button tipus submit)
        url: 'http://localhost:8000/apicutre/user/1',
        success: function(result){ //en result va el resultat d'haver cridat a la pàgina
            console.log("Post Ajax OK");
            console.log(result);
            $("#userpost").val(result);
        },
        error: function(){
            console.log("Error de peticio Post Ajax");
        }

    });

});