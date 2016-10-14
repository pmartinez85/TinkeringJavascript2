/**
 * Created by pedro on 14/10/16.
 */
require('./bootstrap');
require('./animal');
imports.Animal;
var Cat = function() {
    Animal.apply(this, arguments);
    // Cat initialization...
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function() {
    console.log('meow');
}

var cat = new Cat();

cat.eat();
cat.say();
