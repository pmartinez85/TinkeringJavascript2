
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

//Comencem el codi

//Mètode Abstracte
// Sistema per prototips

var Animal = function() {
    if (this.constructor === Animal) {
        throw new Error("Can't instantiate abstract class!");
    }
    // Animal initialization...
};

/**
 @abstract
 */
Animal.prototype.say = function() {
    throw new Error("Abstract method!");
}

/**
 * Eat some food
 */
Animal.prototype.eat = function() {
    console.log("Animal is eating.");
}

//Creating an instance would throw an error:
// new Animal(); // throws

//This is how you "inherit" from it:
var Cat = function() {
    Animal.apply(this, arguments);
    // Cat initialization...
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function() {
    console.log('meow');
}

// Dog looks just like it.
var Dog = function() {
    Animal.apply(this, arguments);
};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.say = function() {
    console.log('bark');
}
//
//     And this is how your scenario plays out:

var cat = new Cat();
var dog = new Dog();

cat.eat();
dog.eat();
cat.say();
dog.say();






