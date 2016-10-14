
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

var animales = require('./animal');
var animales = require('./dog');
var animales = require('./cat');
var anim = new animales.Animal();
var gos = new animales.Animal();
var gat = new animales.Animal();


exports.Animal = Animal;

//Comencem el codi

var dog = new Dog();
dog.eat();
dog.say();
var cat = new Cat();
cat.eat();
cat.say();




